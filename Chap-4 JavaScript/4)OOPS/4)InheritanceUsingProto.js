// Implement Inheritance without using extends word.

class A{
    funInsideA(){
        return `In function A`;
    }
}

class B{
    funInsideB(){
        return `In function B`;
    }
}
Object.setPrototypeOf(B.prototype, A.prototype);
const obj = new B();
console.log(obj.funInsideA());
console.log(obj.funInsideB());