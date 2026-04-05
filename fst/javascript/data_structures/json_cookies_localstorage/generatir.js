// what is generator function in js
// A generator function is a special type of function that can be paused and resumed, allowing it to produce a sequence of values over time. It is defined using the function* syntax and uses the yield keyword to yield values one at a time. When a generator function is called, it returns an iterator object that can be used to iterate through the yielded values. This allows for more efficient memory usage and can be useful for handling asynchronous operations or generating infinite sequences of data.



function* listOfNames() {
    yield "siham";
    yield "sara";
    yield "samar";
    yield "salma";
}

const names = listOfNames();
console.log(names.next().value); // Output: "siham"
console.log(names.next().value); // Output: "sara"
console.log(names.next().value); // Output: "samar"
console.log(names.next().value); // Output: "salma"


// generator is a way of controling the contant in your functions one by one if you make yield you gona need one the to that