// // // var name=('my name is vincent');
// // // console.log(name);
// // // console.log(`${name}`);

// // // let a= 'book'


// // // if(true){
// // //     let a= 'new book';
// // //     console.log(a);
// // // }
// // // console.log(a)

// // // primitive data types
// // //sring
// // // let name = 'umeanozie vincent'; //this is a string
// // // console.log(typeof name);
// // // console.log(name);
// // // console.log(name.length); //this will give the length of the string

// // // //numbers
// // // let x = 200
// // // console.log(typeof x)
// // // console.log(x)
// // // console.log(x-100)

// // let y = '200'
// // console.log(typeof y) //this will convert the string to number
// // console.log(Number(y));

// // //null
// // let goal = null; //this is a null value
// // console.log(typeof goal);
// // console.log(goal); //this will print null

// // let age
// // console.log(age)
// // console.log(typeof age)

// // // boolean
// // // true or false
// // console.log(5>2)

// // let a = 5
// // let b = 50
// // console.log(a==b) //this will print false

// let a = 5 //this is a number
// let b = '5' //this is a string
// console.log(a===b) //the triple = will check whether the 2 values has the same data type and value while 2= will only check the value without considering the data type

// let c= a+b
// console.log(c) //55
// console.log(typeof c)

// //bigint
// let x = 2n //this is bigint
// let y = 4n //this is bigint
// let z = x+y // this will add the 2 bigint together
// console.log(typeof x)
// console.log(x)
// console.log(y)
// console.log(z)

// //symbol
// let sym1 = Symbol('hello') //this is a symbol
// console.log(typeof sym1) //this will print symbol

//Non primitive
//let list =['apple',2000,'vincent',13n,true,3.14] 
//const newElement= list.push('dog')
//console.log(newElement)
//console.log(list)

//list.pop()
//console.log(list)
//list.unshift('dog')
//console.log(list)
//list.shift()
//console.log(list)

//removing an element from a specific index
//list.splice(1,1)
//console.log(list)

//adding an element at a specific index
//list.splice(2,0,'ifeanyi')
//console.log(list)

let car = {
    make: 'toyota',
    colour:'black', 
    year: 2025,
    model:'highlander',
};
console.log(typeof car)

//dot notation
console.log(car.make)
console.log(car.colour)

console.log( `i bought a ${car.make} ${car.model}`)


let person = {
    name: "umeanozie vincent",
    age: 24,
    address: {
      state: "lagos",
      LGA: "isolo",
    }
    hobbies: ["reading", "watching movies"]
}
console.log(person.age)
console.log(person['age']) //another way of doing what is in 114

console.log(person.address.state)
console.log(person.hobbies[1]) //square bracket used for key array

//adding a new key value pair to an object
//camel naming  (phoneNumber)
person.phoneNumber = "09073708496";
person.email = "umeanozievincent@gmail.com";
person["occupation"] = "software engineer"; //you can also use squarebracket[] for adding a key value to an object
person['hobbies'] = person.hobbies.push('freelancing'); //adding to an array in an object
person.address.street = 'alhaji hamzat wahab'; //adding a new property to the address

console.log(person)

//updating an existing property
person.age = 25

console.log(person);

//deleting a property from an object
delete person.age
console.log(person);


//function
function sum(x,y){
  const sum = x+y;
  return sum;
}
const result = (100,50)
console.log(result);

function greet(name){
  return 'welcome to javascript'. name
}
let greeting = greet ('vincent')
console.log(greeting)

greeting = greet('godwin')
console.log(greeting)

