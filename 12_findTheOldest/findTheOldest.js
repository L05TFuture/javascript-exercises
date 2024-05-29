
const findTheOldest = function(arrayOfPeople) {

    //function for finding ages of people
let currentYear=2024
let ageArray=[]
const findAge = function (person) {
let age =""
    if('yearOfDeath' in person) {   
 age = person.yearOfDeath - person.yearOfBirth}
else {age = currentYear -person.yearOfBirth}
return age
}

//else {
  //  let age = currentYear-yearOfBirth
//}
//}


//pushing the ages of the people in an array
for (let i=0; i<arrayOfPeople.length; i++){
    //assign to some array
    ageArray.push(findAge(arrayOfPeople[i]))
    

}



//evaluate the oldest age in array  
let temp = ageArray
let oldestAge=""
for(let m=0;m<ageArray.length;m++){
    if (oldestAge<ageArray[m]){
        oldestAge=ageArray[m]
    }
}
//find who posseses this oldest age in the temp array
let oldestPersonIndex =   ageArray.indexOf(oldestAge)

 

//return the object(oldest person)
return arrayOfPeople[oldestPersonIndex]
};


//name: "Carly",
//yearOfBirth: 1942,
//yearOfDeath: 1970,
// Do not edit below this line
module.exports = findTheOldest;
