let arr = [2,3,4,5];
let avaerage = function(score){
    let sum = 0;
for (let i = 0; i < arr.length; i ++){
    sum += arr[i];
    }
    return sum;
}

console.log(avaerage(arr));