//Question 1: Given an array of days, write a function that filters out the weekends (Saturday and Sunday) and returns the number of working days.

//Eg:days = ["Saturday","Sunday"]
//Output: 0
//Eg:days = ["Monday","Tuesday","Wednesday","Thursday","Friday"]
//Output: 5

function workingDays(days){
    const workDays = days.filter(day => day!=="Saturday"&& day!=="Sunday");
    return workDays.length;
}

let days = ["Saturday","Sunday"]
console.log(workingDays(days))