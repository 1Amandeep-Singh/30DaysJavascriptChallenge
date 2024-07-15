//Activity 1: If-Else Statements

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
var num = 24;
if (num > 0)
  console.log("The given number is positive. The value of number is: " + num);
else if (num < 0)
  console.log("The given number is negative. The value of number is: " + num);
else console.log("The given number is zero.");

//Task 2: Write a program to check if a person is eligible to vote (age>=18) and log the result to the console.
var candidateAge = 5;
if (candidateAge >= 18)
  console.log(
    "Person is eligible to vote as its age is greater than or equal to 18. Eligible person age is : " +
      candidateAge
  );
else
  console.log(
    "Person is not eligible to vote as its age is less than or equal to 18. Person age is : " +
      candidateAge
  );
//Activity 1 end

//Activity 2: Nested If-Else Statements

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
var firstnum = 43987;
var secondnum = 4275;
var thirdnum = 824931;
if (firstnum >= secondnum) {
  if (firstnum >= thirdnum)
    console.log(
      "First number is largest. The value of largest number is : " + firstnum
    );
  else
    console.log(
      "Third number is largest. The value of largest number is : " + thirdnum
    );
} else {
  if (secondnum >= thirdnum)
    console.log(
      "Second number is largest. The value of largest number is : " + firstnum
    );
  else
    console.log(
      "Third number is largest. The value of largest number is : " + firstnum
    );
}
//Activity 2 end

//Activity 3: Switch Case

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
var numoftheday = 6;
switch (numoftheday) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

var grade = 91;
switch (true) {
  case grade >= 90:
    console.log("Grade : A");
    break;
  case grade >= 80:
    console.log("Grade : B");
    break;
  case grade >= 70:
    console.log("Grade : C");
    break;
  case grade >= 60:
    console.log("Grade : D");
    break;
  case grade >= 50:
    console.log("Grade : E");
    break;
  case grade >= 40:
    console.log("Grade : F");
    break;
}

//Activity 3 end

//Activity 4: Conditional (Ternary) Operator

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

var number = 29;
var result = number % 2 == 0 ? "Even" : "Odd";
console.log("The above number is: " + result);
//Activity 4 end

//Activity 5: Combining Conditions

//Task 7: Write a program to check if a year is a leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
var isLeap = 2004;
if ((isLeap % 4 == 0 && isLeap % 100 != 0) || isLeap % 400 == 0)
  console.log(isLeap + "is a leap year");
else console.log(isLeap + "is not a leap year");

//Activity 5 end
