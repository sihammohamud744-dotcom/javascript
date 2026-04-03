let firstName = "siham"
let lastName = "mohamud"
let fullName = "my full name is " + firstName + " " + lastName
console.log(fullName);

let day = "tuesday"
switch (day) {
    case "monday":
        console.log("it's monday");
        break;
    case "tuesday":
        console.log("it's tuesday");
        break;
    default:
        console.log("it's not monday or tuesday");
}

let grade = 85
switch (true) {
    case grade >= 90:
        console.log("you got an A");
        break;
    case grade >= 80:
        console.log("you got a B");
        break;
    default:
        console.log("you got a C or lower");
}