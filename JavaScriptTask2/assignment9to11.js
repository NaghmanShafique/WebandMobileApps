// Q1. Write a program to take “city” name as input from user. If user enters “Karachi”, 
//     welcome the user like this: “Welcome to city of lights”

var myCity = prompt("Enter the city name: ");

if (myCity === 'Karachi') {
    alert("Welcome to city of lights.");
}

// Q2. Write a program to take “gender” as input from user. If the user is male, 
// give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var inputGender = prompt("Enter your gender: ");

if (inputGender.toUpperCase() === 'MALE') {
    alert('Good Morning Sir.')
} else if (inputGender.toUpperCase() === 'FEMALE') {
    alert('Good Morning Ma’am');
}


// Q3. Write a program to take input color of road traffic signal from the 
//     user & show the message according to this table:

var signalColour = prompt("Enter road signal colour:")

if (signalColour.toUpperCase() === 'RED') {
    alert('Must Stop');
} else if (signalColour.toUpperCase() === 'YELLOW') {
    alert('Ready to move');
} else if (signalColour.toUpperCase() === 'GREEN') {
    alert('Move now');
}   

// Q4. Write a program to take input remaining fuel in car (in litres) from user.
//     If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = +prompt('Enter the remaining fuel in car:');

if (fuel < 0.25) {
    alert('Please refill the fuel in you car');
}

// Q5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

//   a) Condition is true output is generated.

   var a = 4; 
   if (++a === 5){ 
       alert("given condition for variable a is true");
   }

//    b. Condition is not true output not generated.
    
     var b = 82; 
     if (b++ === 83){ 
         alert("given condition for variable b is true"); 
     }

//  c. Condition 2 and 4 is ture.
    
    var c = 12; 
     if (c++ === 13) {
          alert("condition 1 is true");
     }
     if (c === 13) { 
         alert("condition 2 is true"); 
     } if (++c < 14) { 
         alert("condition 3 is true"); 
     } if(c === 14) { 
         alert("condition 4 is true");
     }   

    //  d. Condition is true ouput is generated.
    
    var materialCost = 20000; 
    var laborCost = 2000; 
    var totalCost = materialCost + laborCost; 
    
    if (totalCost === laborCost + materialCost) { 
        alert("The cost equals"); 
    }    

    // e. For Ture condtion output is generated.
     
    if (true) { 
        alert("True"); 
    } 
    if (false) { 
        alert("False"); 
    }

    // f. Condition is true as car is lesser then cat.
    
    if ("car" < "cat") { 
        alert("car is smaller than cat"); 
    }

// Q6. Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. Take percentage & compute grade as per 
// following table:

var totalMarks = +prompt("Enter your Total Marks :")
var marksObtained = +prompt("Enter your Obtained Marks :");
var per     = (marksObtained/totalMarks)*100;
var grade;
var remarks;

if (per >= 80) {
    grade = 'A-One';
    remarks = 'Excellent';
} else if (per>=70 && per <=79) {
    grade = 'A';
    remarks = 'Good';
} else if (per > 60 && per <= 69) {
    grade = 'B';
    remarks = 'You need to improve';
} else if (per <=59) {
    grade = 'Fail';
    remarks = 'Sorry';
}
document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("Total marks: "+totalMarks);
document.write("<br>");
document.write("Marks obtaineds: "+marksObtained);
document.write("<br>");
document.write("Percentage: "+per+"%");
document.write("<br>");
document.write("Grade: "+grade);
document.write("<br>");
document.write("Remarks: "+remarks);

// Q7. Guess Game
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
//  a. If user guesses the same number, show “Bingo! Correct answer”. 
//  b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var myNum = 8;
var userNum = +prompt("Enter you Number:");

if (myNum == userNum) {
    alert("Bingo ! Correct answer.");
} 
else if (myNum == (userNum+1)) {
     alert("Close enough to the correct answer");
}


// Q8. Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3.

var myNum = +prompt("Enter you Number:");

var myResult = myNum%3;

if (myResult === 0) {
    alert("You number is divisible by 3");
}

// Q9. Write a program that checks whether the given input is an even number or an odd number.

var myNum = +prompt("Enter you Number:");

var myResult = myNum%2;

if (myResult === 0) {
    alert("Your number is Even");
} else {
    alert("Your number is Odd");
}

// Q10. Write a program that takes temperature as input and shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.” 
//  b. T > 30 then “The Weather today is Normal.” 
//  c. T > 20 then “Today’s Weather is cool.” 
//  d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt("Enter the Temperature:");

if (temp > 40) {
    alert("It is too hot outside.");
} else if(temp > 30 && temp <= 40) {
    alert("The Weather today is Normal.");
} else if(temp > 20 && temp <= 30) {
    alert("Today's Weather is cool.");
} else if(temp > 10 && temp <= 20) {
    alert("OMG! Today’s weather is so Cool.");   
}    

// Q11. Write a program to create a calculator for +,-,*, / & % using if statements. 
// Take the following input: 
//  a. First number 
//  b. Second number 
//  c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

var firstNum = +prompt("Enter first Number:");
var secondNum = +prompt("Enter first Number:");
var myOperation = prompt("Select you operation (+, -, *, /, %):");
var myResult = 0;

if (myOperation === "+") {
    myResult = firstNum + secondNum;
    alert(myResult);
} else if (myOperation === "-") {
    myResult = firstNum - secondNum;
    alert(myResult);
} else if (myOperation === "*") {
    myResult = firstNum * secondNum; 
    alert(myResult);  
} else if (myOperation === "/") {
    myResult = firstNum / secondNum;
    alert(myResult);
} else if (myOperation === "%") {
    myResult = firstNum % secondNum; 
    alert(myResult);       
}    