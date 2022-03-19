// Q1. Write a program that takes a character (number or string) in a variable & checks
//  whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

    var myInput = prompt("Enter you input:");

    for (var i = 65; i <= 90; i++ ) {
        if ( myInput.charCodeAt(0) == i) {
           alert("Your input is Upper letter Character.")
        }
     }
     for (var i = 97; i <= 122; i++ ) {
      if ( myInput.charCodeAt(0) == i) {
         alert("Your input is Lower letter Character.")
      }
   }
   for (var i = 48; i <= 57; i++ ) {
      if ( myInput.charCodeAt(0) == i) {
         alert("Your input is number.")
      }
   } 


// Q2. Write a JavaScript program that accept two integers and display the larger. 
//     Also show if the two integers are equal.

var firstNumber = +prompt("Enter first Number:");
var secondNumber = +prompt("Enter Second Number:");

if (firstNumber > secondNumber) {
   alert(firstNumber);
} else {
   alert(secondNumber);
}

// Q3. Write a program that takes input a number from user & state whether the number is positive, 
// negative or zero.

var myNumber = +prompt("Enter you Number:");

if (myNumber > 0) {
   alert("Number is positive");
} else if (myNumber < 0) {
   alert("Number is negative")
} else {
   alert("Number is Zero");
}

// Q4 .Write a program that takes a character (i.e. string of length 1) and returns 
// true if it is a vowel, false otherwise

var myInput = prompt("Enter your 1 character:")

var vowels = ['A','E','I','O','U']
var result = false;
for (var i = 0; i < vowels.length; i++) {
   if (myInput.toUpperCase() === vowels[i]) {
      result = true;
      alert(result);
      break
   } 
}
if (result === false) {
   alert(result);
}

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
//    i. Check if user has entered password. If not, then give message “ Please enter your password”
//    ii. Check if both passwords are same. If they are same,
//        show message “Correct! The password you entered matches the original password”. 
//        Show “Incorrect password” otherwise.

    var myPassword = 'WelcomeJS';
    var userPassword = prompt("Enter password:");

    if ( userPassword === '') {
      alert("Please enter your password");
    } else if (myPassword === userPassword) {
      alert("Correct! The password you entered matches the original password");
    } else {
      alert("Incorrect password");
    }

//  Q6. This if/else statement does not work. Try to fix it:

   var greeting; 
   var hour = 13; 
   
   if (hour < 18) { 
      greeting = "Good day"; 
      console.log(greeting);
   } else {
      greeting = "Good evening"; 
      console.log(greeting);
   }

// Q7. Write a program that takes time as input from user in 24 hours clock 
//     format like: 1900 = 7pm. Implement the following case using if, else & else if statements   

   var myTime = prompt("Input time in 24 Hours format (13:00) etc:")

   var myHour = Number(myTime.slice(0,2));

   if (myHour >= 00 && myHour <=11) {
      alert(myHour.toString()+"am");
   } else if (myHour === 12) {
      alert(myHour.toString()+"pm");
   } else {
      myHour = myHour - 12;
      alert(myHour.toString()+"pm");
   }
