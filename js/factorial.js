exports.factorial = function(num) {
    // need to multiple all the number from 1 to num 
    let arrayOfNum = [];

    for(let i = 1; i <= num; i++){
        arrayOfNum.push(i);
    }
    // output is the product of all that number up to num
    let newArrOfNum = 1
    for(let i = 0; i < arrayOfNum.length; i++){
        newArrOfNum = newArrOfNum * arrayOfNum[i] 
    }
return newArrOfNum
};


