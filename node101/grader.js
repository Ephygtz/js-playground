//a function called average accepting 1 parameter that should be an array
let average = function(score){
    //checking if the param is an array and is not empty
    if(Array.isArray(score) && score.length != 0){
        //variables to store the sum & average of array items
        let sum = 0;
        let avg = 0;
        //looping through the array items
        for(let i = 0; i < score.length; i ++){
            //checking if any array items are not integers
            if(!isNaN(score[i])){
                //calculating the sum
                sum += score[i];
            }else{
                //exit function if any array items are not numbers
                return "one array item is not a number";
            }
        }
        //calculating the average
         avg = sum / score.length;
         //return average rounded to the nearest whole number
         return Math.round(avg);
    }
}

let test1 = average([2,4,6,7]);
console.log(test1);