const fibonacci = function(member) {
let firstNum = 1
let currentNum = 0
let prevNum = 0

if(member<0){return "OOPS"}
else{
for (i=member;i>0;i--){

if (currentNum==0){currentNum=firstNum}
else{
    let temp= ""
    temp = prevNum
prevNum =currentNum    
currentNum= currentNum + temp 
}
}

return currentNum}
};
// 1st= 0+1, 2nd = 1st(1)+0=1 , 3rd =2nd + 1st
//
// Do not edit below this line
module.exports = fibonacci;
