'use strict';


const isChecked = false,
    isClose = true;

console.log(isChecked || isClose);


let arr = [1,6,3,15,16,34,21];

arr.sort(testSort);

function testSort(a,b){
    return(a-b);
}

console.log(arr);