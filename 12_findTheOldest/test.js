const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(arrayOfPeople) {

    //function for finding ages of people
let currentYear=2024
let ageArray=[]
const findAge = function (person) {

    //if('yearOfDeath' in person) {   
let age = person.yearOfDeath - person.yearOfBirth
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
let oldestPersonIndex =   temp.indexOf(oldestAge)

 

//return the object(oldest person)
return arrayOfPeople[oldestPersonIndex]
};

console.log(findTheOldest(people))