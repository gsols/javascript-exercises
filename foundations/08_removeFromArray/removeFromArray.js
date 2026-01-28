const removeFromArray = function(arr, a) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === Args){
            arr.splice(i, 1);
            i--; // Adjust index after removal
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
