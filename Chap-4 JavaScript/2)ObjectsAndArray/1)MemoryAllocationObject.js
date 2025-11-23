//Primitive data types are stored in stack memory
let num1 = 5;
let num2 = num1;
num2++;
console.log(num1); // 5
console.log(num2); // 6

//Non-primitive data types are stored in heap memory because they can be of variable size
let obj1 = { value: 10 };
let obj2 = obj1;    
obj2.value++;
console.log(obj1.value); // 11
console.log(obj2.value); // 11
//In the above example, both obj1 and obj2 point to the same memory location in the heap. Hence, changes made through obj2 are reflected in obj1.

// Garbage Collection in JavaScript:
//JavaScript automatically manages memory through a process called garbage collection. 
//When there are no references to an object in the heap, it becomes eligible for garbage collection, freeing up memory.


//Memory Leak --> When there were two variables pointing to the same object in heap memory and one variable is no longer needed so when we delete that variable we also deleted its corresponding object in the heap memory ,but when the second pointer is deleted since its memory was already deleted it can delete the memory of some other variable which is still in use leading to memory leak.



//Now if I want to copy the object not address.
// Part-1
//we can use spread operator

let p1 = {
    fname:"Vedansh",
    lname:"Kadway"
}
let p2 = {
    ...p1
}

//But Spread Operator work on only 1 Level ,Ye Inner level pe nhi jata.
// Problem

let p3 = {
    fname:"HEllow",
    lname:"World",
    address : {
        streat: 46
    }
}

let p4 = {
    ...p3
}
p4.address.streat = 52;
console.log(p3.address.streat)//52
console.log(p4.address.streat)//52

//Spread Operator is making a Shallow Copy.

//Now for Deep Copy we will convert 
// Object --> String --> Copy --> Object

//Basically Non Primitive DS ko Primitive me convert kiya then usko copy kiya then usko wapas Non Primitive me convert kiya.

const p3String = JSON.stringify(p3);
let p5 = JSON.parse(p3String);

p5.address.streat = 89
console.log(p5); //{ fname: 'HEllow', lname: 'World', address: { streat: 89 } }
console.log(p3); //{ fname: 'HEllow', lname: 'World', address: { streat: 52 } }



