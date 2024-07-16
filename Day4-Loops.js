//Activity 1: For Loop

//Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task 2: write a program to print the multipliction table of 5 using for a loop
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

//Activity 1 end

//Activity 2: While Loop

//Task 3: Write a program to calculate the sum of numbers from 1 to 100 using a while.
let sum = 0;
let num = 1;
while (num <= 100) {
  sum += num;
  num++;
}
console.log("The sum of number from 1 to 100 is: " + sum);

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let number=10;
while(number>=1){
    console.log(number);
    number--;
}

//Activity 2 end

//Activity3: Do... While Loop

//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i=1;
do{
    console.log(i);
    i++;
}while(i<=5)


//Task 6: Write a program to calculate the factorial of a number using a do...while loop
let result=1;
let factorialnum = 5;
if(factorialnum<0) console.log("Invalid value");
do{
    if(factorialnum<0) break;
    if(factorialnum == 0) break;
    result *= factorialnum;
    factorialnum--;
}while(factorialnum>0);
console.log(result);
//Activity 3 end

//Activity 4: Nested Loops

//Task 7: Write a program to print a pattern using nested for loops.
//*
//* *
//* * *
//* * * *
//* * * * *
for(let i=0;i<5;i++){
    let pattern = '';
    for(let j=0;j<i+1;j++){
        pattern+= '* '
    }
    console.log(pattern);
}

//Acitivity 5: Loop Control Statements

//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let i=1;i<=10;i++){
    if(i==7) break;
    console.log(i);
}

//Activity 5 end
