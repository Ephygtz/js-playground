let same = [1,1,1,1,1];
let diff = [1,2,3,4,5];

function isUniform(array){
    if(!Array.isArray(array)){
        console.log("Enter an array");
    }else{
        let test = array[0];
        for(let i = 1; i >= array.length; i++){
            if(test === array[i]){
                return true;
            }
            return false;
        }
    }
    
}

isUniform(same);
isUniform(diff);