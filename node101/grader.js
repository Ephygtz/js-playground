//a function called average accepting 1 parameter that should be an array
let average = function(arr){
    //checking if the param is an array and is not empty
    if(Array.isArray(arr) && arr.length != 0){
        //variables to store the sum & average of array items
        let sum = 0;
        
        //looping through the array items
        for(let i = 0; i < arr.length; i ++){
            //checking if any array items are not integers
            if(!isNaN(arr[i])){
                //calculating the sum
                sum += arr[i];
            }else{
                //exit function if any array items are not numbers
                return "one array item is not a number!";
            }
        }
        //calculating the average
        let avg = sum / arr.length; 
         
         //return average rounded to the nearest whole number
         return Math.round(avg);
    }else{
        return "Not an array and/or array is empty!";
    }
}

let test1 = average([2]);
console.log(test1);