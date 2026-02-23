// objects are list of propeties or attributes and it defines what is inside the variable

// way one of creating with function and you can do it without function
let person = {
    name: "siham",
    age: 22,
    city: "helsinki",
    saysalam: function(){
        console.log("alsalaamu allaykum");
    }
        

 }   

person.saysalam()

person.age = 20
// console.log(person["name"])

// each one console loging
// console.log(person.age);
// console.log(person.name);

// if we consolel.log person it will print all 
// console.log(person);

// their are many ways to creat objects one way of creating is above

// way 2 of creating object

let animal = new Object();
console.log(animal);
animal.type = "dog"
animal.bread = "hergab hhhh",
sayhi: function(){
    console.log("hi");
}
animal.sayhi()
// console.log(animal)

// way 3 of making objects and called empty objects

// let people = {}
// people.type = "boy";
// people.bread = "girl"
// console.log(people.type);

// there are other  3 ways to access the properties like
// console.log(people["type"]);
// console.log(people.type);
// let {type} = people
// console.log(type);






