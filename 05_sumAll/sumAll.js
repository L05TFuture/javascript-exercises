const isNumber = function(a)
{
return typeof a === "number"
}

const sumAll = function(firstnum,lastnum) {
let sum = 0

 if(firstnum<0 || lastnum<0|| !isNumber(firstnum)|| !isNumber(lastnum)){
    sum = 'ERROR'
    return sum
}
else if (firstnum<=lastnum){
for (let i=firstnum; i<=lastnum; i++){
sum += Number(i)
}return sum
}

else if (firstnum>lastnum){   
for (let i=lastnum; i<=firstnum; i++){
sum += Number(i)
}    return sum
}


    
};

// Do not edit below this line
module.exports = sumAll;
