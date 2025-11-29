
const arr = [1,2,4,12,1,4,123];

// arr.forEach(function(value,Index){
//     console.log("Value is : "+ value +" and Index is: "+Index);
// })
// Error : .forEach function does not exist on arr

//PolyFill of forEach
// 1)Input and Output
// Input --> Function with value and index.
// Output --> No return 

//Work Doing --> print Value and Index.

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this; //Current Object ko point out kr rha h 
        for(let i=0;i<originalArr.length;i++){
            userFn(originalArr[i],i);
        }
    }
};

arr.myForEach(function(value,index){
    console.log(`Value is ${value} and Index is ${index}`);
})


// Map

// const newArr = arr.map(r => r*2);
// console.log(newArr);

// Input: Function
// Output: Return Array 

//Work : Updating the values of Array.

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const origArr = this;
        const newArr = [];

        for(let i=0;i<origArr.length;i++){
            newArr.push(userFn(origArr[i]));
        }
        return newArr;

    }
}

let arr2 = [1,2,3,4,5];

const newArr2 = arr2.myMap(function(val){return val*2;});

console.log(newArr2);


// Filter
//Input : Function 
//Output : New Array Containing the filtered values.
//Work: if userFn return True for a value then it adds that value to the new array.


if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        let newFilterArr = [];
        const origArr = this;

        for(let i=0;i<origArr.length;i++){
            if(userFn(origArr[i])){
                newFilterArr.push(origArr[i]);
            }
        }
        return newFilterArr;
    }
}

const newFilter = arr2.myFilter(function(value){
    return value%2;
});

console.log(newFilter);
