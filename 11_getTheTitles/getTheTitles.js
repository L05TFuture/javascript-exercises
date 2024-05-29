const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(array) {

 let titleArray = []
 for (let i=0; i<array.length; i++){
    titleArray.push(books[i].title) 
 }
   
    
return titleArray
};

// Do not edit below this line
module.exports = getTheTitles;
