class Person{
    // Assigning Variables in class
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }

    //Added Functions 
    getname(){
        return `First name is ${this.fname} and Lastname is ${this.lname}`
    }
};

const p1 = new Person('Vedansh','Kadway');
const p2 = new Person('Garv','Gupta');

console.log(p1.getname());
    