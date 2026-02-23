
// maging list names and thei ages
let listNames = ["siham", "ahmed",  "cali" ,"faarax"]
let ages = [20 ,30 ,40 ,20 ]
console.log(listNames [3]);
console.log(ages [3])
// changing one of the names above 
listNames[1] = "mohamud"
// console.log(listNames)


// adding at the end and other item
let shoppingList = ["onions", "watermelon", "raise"]
shoppingList.push("tea")
// console.log(shoppingList)

// get ride of the last one
shoppingList.pop()
console.log(shoppingList)

// i want add at the beggining of the array
shoppingList.unshift("painkiller")
console.log(shoppingList)

// get ride of at the beggining 
shoppingList.shift()
console.log(shoppingList)

// length is aproprty you cant use it ()
console.log(shoppingList.length)
// and know length would not counted as 0 , 1, 2, 3 like index its only the normal human counting 12345