// marks >90 --> A
// marks >80 --> B
// marks >70 --> C
// marks >60 --> D
// marks <=60 --> F
let marks = 12
function gradeCalc(marks){
    if(marks>90){return "A";}
    else if(marks>80){return "B";}
    else if(marks>70){return "C";}
    else if(marks>60){return "D";}
    else{return "F";}
}

console.log(gradeCalc(89));