// let person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue",
//     isMarried : true
// }
 
// let personString = JSON.stringify(person);
// console.log(person);
// console.log(personString);

// let personObject = JSON.parse(personString);
// console.log(personObject);

// let person2 = JSON.parse(personString);
// console.log(person2)
// console.log(personString);



// json has double qoutes arround it's keys and values, but in js we can use single or double qoutes. json is a string, but js object is an object. json is used to exchange data between server and client, but js object is used to store data in js. json is a subset of js, but js is not a subset of json. json is a text format, but js is a programming language. json is used to serialize and deserialize data, but js is used to write code.
// 
//  how to storeDate inside the computer using browsers localstorage is what is localstroge mean



function saveName() {
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("username", name);
}

function loadName() {
  const savedName = localStorage.getItem("username");
  document.getElementById("output").innerText = savedName;
}

function clearName() {
    localStorage.removeItem("username");
    document.getElementById("output").textContent = "";
    
}