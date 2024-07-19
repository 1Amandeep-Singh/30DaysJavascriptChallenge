//Activity 1: Object Creation and Access

//Task 1: Create an object representing a book with properties like title, authorm and year, and log the object to the console
const book = {
  title: "SinghWithSign",
  author: "Akali Baba Amandeep Singh",
  year: "1111",
};
console.log(book);

//Task 2: Access and log the title and author properties of the book bookect
console.log(
  "Title of the book object: " +
    book.title +
    "\n" +
    "Author of the book object: " +
    book.author
);

//Activity 1 end

//Activity 2: Objects methods

//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getobjtitleandauthor = function () {
  return `${book.title} by ${book.author}`;
};
console.log(book.getobjtitleandauthor());
console.log(book);

//Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.
book.updateval = function (val) {
  this.year = val;
};
book.updateval(48);
console.log(book);
//Activity 2 end

//Activity 3: Nested Objects

//Task 5: Created a nested object representing a library with properties like name and books (an array of book objects), and log the object to the console
const library = {
  name: "Book Store",
  books: [
    {
      title: "The Monk who sold his ferrari",
      author: "Robin Sharma",
      year: "2k19",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert kiyosaki",
      year: "1997",
    },
    {
      title: "Never last anything",
      author: "Robin Sharma",
      year: "2k19",
    },
    {
      title: "Everything is fake",
      author: "Robin Sharma",
      year: "2k19",
    },
    {
      title: "Time never stay the same",
      author: "Robin Sharma",
      year: "2k19",
    },
  ],
};
console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library
console.log(library.name);
for (let i = 0; i < library.books.length; i++)
  console.log(library.books[i].title);

//Activity 3 end

//Activity 4: The this keyword

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method
const lib = {
    name: "Book Store",
    books: [
      {
        title: "The Monk who sold his ferrari",
        author: "Robin Sharma",
        year: "2k19",
        gettitleandyear: function() {
            return`${this.title}  (${this.year})`;
        }
      },
      {
        title: "Rich Dad Poor Dad",
        author: "Robert kiyosaki",
        year: "1997",
         gettitleandyear: function() {
            return`${this.title}  (${this.year})`;
        }
      },
      {
        title: "Never last anything",
        author: "Robin Sharma",
        year: "2k19",
         gettitleandyear: function() {
            return`${this.title}  (${this.year})`;
        }
      },
      {
        title: "Everything is fake",
        author: "Robin Sharma",
        year: "2k19",
         gettitleandyear: function() {
            return`${this.title}  (${this.year})`;
        }
      },
      {
        title: "Time never stay the same",
        author: "Robin Sharma",
        year: "2k19",
         gettitleandyear: function() {
            return`${this.title}  (${this.year})`;
        }
      }
    ]
  };
  
  for(let i=0;i<lib.books.length;i++)
    console.log(lib.books[i].gettitleandyear())
  
//Activity 4 end

//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value
for(const property in lib){
    if(lib.hasOwnProperty(property))
    console.log("for..in loop : " +`${property}: ${lib[property]}`)
}

//Task 9: Use Object.keys and Objects.values methods to log all the keys and values of the book object
lib.books.forEach((book, index) => {
    console.log(`Book ${index + 1} Properties:`);
    
    // Get all keys and values of the book object
    const keys = Object.keys(book);
    const values = Object.values(book);
    
    // Log all keys and values
    keys.forEach((key, i) => {
        console.log(`${key}: ${values[i]}`);
    });
});
//Activity 5 end
