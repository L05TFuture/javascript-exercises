const removePunctuation = function(str){
tempArray = str.split(/[^a-zA-Z0-9]+/)
str = tempArray.join("")    
return str
}

const palindromes = function (str) {
str = removePunctuation(str)
str = str.toLowerCase()
let array = str.split("")
let reverseword = ''
for (i=0; i<array.length; i++)
    {
        reverseword+=array[array.length-1-i]
    }   
return reverseword==str
};

//need to find a way to remove and add back in the punctuation for the return statement? or just ignore punctuation 

// Do not edit below this line
module.exports = palindromes;
