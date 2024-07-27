//Activity 1: Class Definition

//Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class
//and log the greeting message

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetmessage() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static getGenericGreeting() {
    return "Hello, this is a generic greeting from the Person class.";
  }

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter for full name
  set fullName(name) {
    const [first, last] = name.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

//create an instance of the Person class
const person = new Person("Aman", 1);

//log the greeting message
console.log(person.greetmessage());

//Task 2: Add a method to the Person class that updates the age property and logs the updated age
Person.prototype.updateAge = function (newage) {
  this.age = newage;
  console.log(`Updated Age: ${this.age}`);
};

person.updateAge(96);

//Activity 1 end

//Activity 2: Class Inheritance

//Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID.
//Create an instance of the Student class and log the student ID
class Student extends Person {
  static studentCount = 0; // Static property to keep track of the number of students

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++; // Increment the static property each time a new instance is created
  }
  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }

  static getStudentCount() {
    return `Total number of students: ${Student.studentCount}`;
  }
}

//Create an instance of the student class
const student = new Student("Deep", 1, "A1");

console.log(student.getStudentId());

//Task 4: Override the greeting method in the Student class to include the Student ID in the message.
//Log the overridden greeting message

Student.prototype.greetmessage = function () {
  return `Student name is: ${this.name} and Student ID: ${this.studentId}`;
};

console.log(student.greetmessage());

//Activity 2 end

//Activity 3: Static Methods and Properties

//Task 5: Add a static method to the Person class that returns a generic greeting message.
//Call this static method without creating an instance of the class and log the message

// Call the static method without creating an instance of the class
console.log(Person.getGenericGreeting());

//Task 6: Add a static property to the Student class to keep track of the number created.
//Increment this property in the constructor and log the total number of students

// Create instances of the Student class
const student1 = new Student("Aman", 20, "S12345");
const student2 = new Student("Deep", 22, "S12346");
const student3 = new Student("Singh", 21, "S12347");

// Log the total number of students
console.log(Student.getStudentCount());

//Activity 3 end

//Activity 4: Getters and Setters

//Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property).
//Create an instance and log the full name using the getter

// Create an instance of the Person class
const personname = new Person("Amandeep", "Singh", 30);

// Log the full name using the getter
console.log(personname.fullName); // Output: John Doe

//Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName).
//Update the name using the setter and log the updated full name

// Update the name using the setter
personname.fullName = "Khalsa Aman";

// Log the updated full name using the getter
console.log(personname.fullName); // Output: Jane Smith

//Activity 5: Private Fields (Optional)

//Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.
//Ensure that the balance can only be updated through these methods

class Account {
  #balance; //private field
  constructor() {
    this.#balance = 0;
  }

  //Method to deposit money into account
  depositMoney(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited : ${amount}. New Balance: ${this.#balance}`);
    } else console.log("Enter valid amount.");
  }

  //Method to withdraw money from the account
  withdrawMoney(amount) {
    if (amount > 0) {
      if (amount <= this.#balance)
        console.log(
          `Withdraw amount: ${amount}. Balance amount: ${this.#balance}`
        );
      else console.log("Insufficient balance.");
    } else console.log("Withdraw Failed");
  }

  balanceInfo(){
    return this.#balance;
  }
}

const myaccount = new Account(193);
myaccount.withdrawMoney(200);

//Task 10: Create an instance of the Account class and test the deposit and withdraw methods,
//logging the balance after each operation

console.log(`Current balance: ${myaccount.balanceInfo()}`);

//Acitivity 5 end
