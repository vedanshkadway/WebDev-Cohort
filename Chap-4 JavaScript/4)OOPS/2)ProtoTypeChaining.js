let obj1 ={
    value : "First"
}

let obj2 = {
    fname : "hello",
    lname : "World"
}

// we are putting the properties of obj2 in the prototype of obj1.
obj1.__proto__ = obj2;

// Ab agar buildin prototype function use krna hoga toh vo obj2 ke call honge , as obj1 ke proto me obj2 h .



console.log(obj1.fname);
console.log(obj1.__proto__.__proto__); // yaha pe builtin properties h.