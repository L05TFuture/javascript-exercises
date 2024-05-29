const reverseString = function(string) {
let array = string.split("")
let reversed = ""
for(let i= 1; i<=array.length; i++){
    reversed += array[array.length-i]
}
return reversed
};

// Do not edit below this line
module.exports = reverseString;
