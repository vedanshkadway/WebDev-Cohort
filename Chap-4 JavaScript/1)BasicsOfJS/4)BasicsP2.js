var {fun} =require('./3)Basics') //import a function from another file

//website to learn js :https://developer.mozilla.org/en-US/docs/Web/JavaScript
"use strict"//treat all js code as newer version

// types of operator
/*1.Assignment operator
2.Arithmetic operator
3.Comparison operator
4.Logical operator
5.Bitwise operator
6.Ternary operator
*/

//1.Assignment operator
let a=5
let b=6

//2.Arithmetic operator
console.log(a+b)
console.log("10"+5) //105
// Explanation: In JavaScript, the + operator is used for both addition and string concatenation. When one of the operands is a string,
//  JavaScript converts the other operand to a string and concatenates them.
console.log(10+"5") //105
// The - operator is used for subtraction. When one of the operands is a string, JavaScript attempts to convert the string to a number. 
// If the conversion is successful, it performs the subtraction.
console.log(10-"5") //5
console.log(10*"5") //50
console.log(10/"5") //2
console.log(10+2-"1") //11 

//3.Comparison operator
console.log(a==b) //false
console.log("2"== 2)//true 
console.log(2==="2") //false data type bhi check krta h.
console.log('2'>2) //convert string to number and compare 2>2 false
console.log(2>='2') //convert number to string and compare 2>=2 true

console.log(null > 0)//false
console.log(null >='')//true
console.log(null == 0)//false
console.log(null >= 0)//true
//Reason:comparison operator me null ko 0 me convert kr deta h but null>0 false hota h.
//but equallity me null ko convert nhi krte h.


console.log("yaha dekh")

//4.Logical operator
console.log(true && false)

//5.Bitwise operator
console.log(2&3)

//6.Ternary operator
console.log(a>b?true:false)//false


//conditions
if(a>b){
    console.log("a is greater than b")  
}
else if(a==b){
    console.log("a is equal to b")
}
else{
    console.log("b is greater than a")
}

//switch case
let day=3
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    default:
        console.log("Invalid day")
}

//NUllish coalescing operator(??):undefined or null check krta h.
let val1;
val1=5??10
console.log(val1)//5
val1=undefined??10 //10
console.log(val1)//10
val1=null??10 //10
console.log(val1)//10
val1=null??10??20 //10
console.log(val1)//
console.log("here")
console.log(val1)//10

//loops
//for loop
for(let i=0;i<5;i++){
    console.log(i)
    if(i==3){
        break
        //continue
        
    }
}

//while loop
let j=0
while(j<5){
    console.log(j)
    j++
}

//do while loop
let k=0
do{
    console.log(k)
    k++
}while(k<5)

//for of loop
let arr=[1,2,3,4,5]
for(let i of arr){
    console.log(i)
}
//maps
let map = new Map() //yaha pe map ordered hota h aur (objects unordered) with unique values only!
map.set("name","Rahul")
map.set("age",23)
map.set("position","Developer")
map.set("name","Rahul")
console.log(map)

//printing key and value
for(let [key,value] of map){
    console.log(key,value)
}
// object me iterate nhi kr pata for of loop 
//object ke liye for in loop use hota h.
let obj={
    name:"Rahul",
    age:23,
    position:"Developer"
}
console.log("here obj")
for (const key in obj) {
    console.log(key,obj[key]) //key-->name, age, position

}
for(const key in arr){
    console.log(key) //key-->0,1,2,3,4(index ai)
    console.log(arr[key]) //value-->1,2,3,4,5
}

//for each loop
arr.forEach((value,index)=>{
    console.log(value,index) //value-->1,2,3,4,5 index-->0,1,2,3,4
})

//for each loop for object
const obje=[
    {name:"Rahul",age:23},
    {name:"Rahul",age:23},
    {name:"Rahul",age:23}
].forEach((value,index)=>{
    console.log(value,index)
})





