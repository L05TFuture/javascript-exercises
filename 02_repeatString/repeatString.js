const repeatString = function(str,num) {
    let newstring = ''
    if (num<0){return 'ERROR'}
    else{
for( let i=1; i<=num; i++)
    {newstring +=`${str}`}
return newstring}
};

// Do not edit below this line
module.exports = repeatString;
