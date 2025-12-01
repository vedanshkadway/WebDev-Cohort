class A{
    funInsideA(){
        return `In function A`;
    }
}

class B extends A{
    funInsideB(){
        return `In function B`;
    }
}

const obj = new B();
console.log(obj.funInsideA());
console.log(obj.funInsideB());