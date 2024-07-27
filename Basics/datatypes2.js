//Js is dynamically typed

//Primitives Types - they're call by value

//7 Types: String, Number, Bool, null, undefined, Symbol, BigInt

//Reference Types(Non Primitives) - call by reference

//Arrays, Objects, Functions

const score =  100
const scoreValue =  100.3

const isLoggedIn = false
const temp = null
let userEmail;

const id = Symbol('123') //symbols
const newId = Symbol('123')
//their value will be different despite them looking the same. the return value is different

const bigNumber = 12343249328493n //bigint

//-----------
const heroes = ["Hero1", "Hero2", "Hero3"]//array

let myObj = {
    name: "shrey",
    age: 21,
} //object

const myFunc = function(){
    console.log("Hello world");
} //function
