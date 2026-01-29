const removeFromArray = function(arr, ...Args) {
    for(let i = 0; i < arr.length; i++){
        if(Args.includes(arr[i])){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
