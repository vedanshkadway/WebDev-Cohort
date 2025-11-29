let arr = [1,2,4];

if(!Array.prototype.fill){
    //Fallback - Polyfill - Backup Function
    Array.prototype.fill = function(){
        //Write your own Fill Function
    }
}

//Agar Browser fill Function provide nhi krega toh custom wala function chalega
arr.fill();
