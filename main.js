
// to take value

let title = document.getElementById('title');
let price = document.getElementById('price');
let disc = document.getElementById('disc');
let taxs = document.getElementById('taxes');
let date = document.getElementById('date');
let amount = document.getElementById('amount');
let cat = document.getElementById('cat');
// to get it only
let total = document.getElementById('total');
let creat = document.getElementById('creat');
let delelteAll = document.getElementById('deleteAll')

let mood = "creat";
let variable = "create"


// make the total function
// get total
function calc() {
    if (price != "") {
        let resu = price.value * (100 - disc.value)
        let resul = (resu / 100)
        let result = resul + +taxs.value;
        total.innerHTML = `total = ${result}`
    }
}


// creat product
// local storage
let arr = [];

if (localStorage.product != null) {
    arr = JSON.parse(localStorage.product);
}
else {
    arr = [];
}

// let arr = [];

function crea() {
    // to creat an opject. 
    let newopj = {
        title: title.value,
        price: price.value,
        disc: disc.value,
        total: total.innerHTML,
        cat: cat.value,
        date: date.value,
        amount: amount.value,
    }
    // to push the arr to the opject 
    if (title.value != '' && price.value != '' && disc.value != '' && amount.value != '') {
        if (mood === "create") {
            arr.push(newopj)
        } else {
            arr[variable] = newopj;
            mood = "create";
            creat.innerHTML = "create";
        }
    } else {

    }
    // to convert it to the locat storage.

    localStorage.setItem("product", JSON.stringify(arr))

    clearData();
    readData();
    disapper();
}

// clear

function clearData() {
    title.value = "";
    price.value = "";
    disc.value = "";
    cat.value = "";
    amount.value = "";
    date.value = "";
    taxs.value = "";
}

// read
function readData() {
    table = "";
    for (i = 0; i < arr.length; i++) {
        table += `
            <tr>
                <td>${i}</td>
                <td>${arr[i].title}</td>
                <td>${arr[i].price}</td>
                <td>${arr[i].total}</td>
                <td>${arr[i].cat}</td>
                <td>${arr[i].amount}</td>
                <td>${arr[i].date}</td>
                <td><button onclick = "readupdate(${i})">update</button></td>
                <td><button onclick = "del(${i})">Delete</button></td>
            </tr>
        `
    }
    document.getElementById('table').innerHTML = table;
}

readData()

// delete
function del(i) {
    // console.log(arr);
    arr.splice(i, 1);
    console.log("=".repeat(20))
    // console.log(arr);
    localStorage.product = JSON.stringify(arr);
    readData();
    disapper();
}


// delete all
function disapper() {

    if (arr.length > 0) {
        delelteAll.style.display = "block";
    }
    else {
        delelteAll.style.display = "none";
    }

}
function delAll() {
    arr = [];
    localStorage.product = JSON.stringify(arr);
    readData();
    disapper();
}

// update

//------- first you must call the date from the inputs 

function readupdate(i) {
    console.log(i);
    title.value = arr[i].title;
    price.value = arr[i].price;
    total.innerHTML = arr[i].total;
    cat.value = arr[i].cat;
    amount.value = arr[i].amount;
    date.value = arr[i].date;

    /****************************************************/
    creat.innerHTML = "update";
    variable = i;
    mood = "update";
    scroll({
        top: 0,
        behavior: "smooth"
    })
}


// search
// clean data







