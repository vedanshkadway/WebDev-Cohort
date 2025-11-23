//  print 
console.log("Hello World!") // Hello World! print hoga!
//syncronous behaviour hota hai ---> line by line code execute hota hai
console.log("Hello") 


// variables in js ye sb primitive data types hote hain till line 29
String= "Hello World"
Number= 123
Boolean= true

console.log(String, Number)//Hello World 123
//Agar ek table ke form me dekhna ho toh
console.table([String, Number, Boolean]) 

// infinity and NaN  ko alag type se treat krti h javascript 
console.log(Infinity)

//type of
console.log(typeof Infinity)

//BigInt - 2^53-1
BigInt = 1234567890123456789012345678901234567890n
boolean = true
 
//undefined ,null 
let a;
console.log(a) //undefined
a= null
console.log(a) //null -->ek empty value hoti hai

//Non primitive data types
//object : {key: value} key value pair hoti hai
let obj = {
    name: "Rahul",
    age: 23
}
console.log(obj) //{ name: 'Rahul', age: 23 }

//symbol
let sym = Symbol("This is a symbol")
console.log(sym) 
console.log(typeof sym) //symbol

//array 
let arr = [1,2,3,4,5]

//variables in js
//var, --> global scope ,memory leak hoti hai
//let, const --> block scope

var p="Hello"
console.log(p)//Hello
p="World"
console.log(p)//World

let q="iit"
z="vedansh"
console.log(z) //var and let ke bina bhi declare kr skte h but it is bad practice.
console.log(q)//iit
q="delhi"
console.log(q)//delhi

const r="rohit"
console.log(r)
// r="rohan" //error const variable ko change nhi kr skte

//type change krna
let val= "5a"
let ans = val;
console.log(ans) //NaN -->Not a Number
console.log(typeof val)//string
console.log("here")
console.log(typeof ans)//number



//functions
function fun(){
    console.log("This is a function")
}  //function scope

//Modules 
//common js modules --->module.exports, require

//export import modules
module.exports = {fun,arr} //exporting fun and arr






