// Q1. Write a program that take two numbers & add them in a new variable. 
//     Show the result in your browser.

var num1 = +prompt("Enter First Number:");
var num2 = +prompt("Enter Second Number:");
var result = num1 + num2;
document.write("Sum of "+num1+" and "+num2+" is "+result);
document.write("<br>");
document.write("<br>");


// Q2. Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = +prompt("Enter First Number:");
var num2 = +prompt("Enter Second Number:");
var subresult = num1 - num2;
var mulresult = num1 * num2;
var divresult = num1 / num2;
var modresult = num1 % num2;
document.write("Substraction of "+num1+" and "+num2+" is "+subresult);
document.write("<br>")
document.write("Multiplication of "+num1+" and "+num2+" is "+mulresult);
document.write("<br>")
document.write("Division of "+num1+" and "+num2+" is "+divresult);
document.write("<br>")
document.write("Modulus of "+num1+" and "+num2+" is "+modresult);
document.write("<br>")

// Q3. Do the following using JS Mathematic Expressions 
//  a. Declare a variable. 
//  b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//  c. Initialize the variable with some number. 
//  d. Show the value of variable in your browser like “Initial value: 5”.
//  e. Increment the variable. 
//  f. Show the value of variable in your browser like “Value after increment is: 6”. 
//  g. Add 7 to the variable.
//  h. Show the value of variable in your browser like “Value after addition is: 13”. 
//  i. Decrement the variable. 
//  j. Show the value of variable in your browser like “Value after decrement is: 12”. 
//  k. Show the remainder after dividing the variable’s value by 3.
//  l. Output : “The remainder is : 0”.

var myNum;
document.write("Value after variable declaration is "+myNum);
document.write("<br>");
myNum = +prompt("Enter value to initialize variable:");
document.write("Initial Value: "+myNum);
document.write("<br>");
var myNum = ++myNum;
document.write("Value after increment is: "+(myNum));
document.write("<br>");
myNum = myNum+7;
document.write("Value after addition is: "+(myNum));
document.write("<br>");
var myNum = --myNum;
document.write("Value after decrement is: "+(myNum));
document.write("<br>");
var myNum = myNum%3;
document.write("The remainder is: "+(myNum));

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & 
//   calculate the cost of buying 5 tickets

var ticketPrice = 600;
var noOfTickets = 5
var ticketCost  = ticketPrice * noOfTickets;
document.write("<br>");
document.write("<br>");
document.write("Total Cost to buy "+noOfTickets+" tickets to a movie is "+ticketCost+" PKR");

// Q5. Write a script to display multiplication table of any number in your browser

var myNum = +prompt("Enter number for Table: ")
document.write("<br>");
document.write("<br>");
document.write("Table of "+myNum);
document.write("<br>");

for (var i = 1;i < 11; i++) {
    document.write("<br>");
    document.write(myNum+" * "+i+" = "+(myNum*i));
}


// Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var myCelcius = +prompt("Eneter you number Celcius: ");
var myFh = +prompt("Eneter you number Celcius: ");
var celcius = (myFh - 32) * (5/9);
var fh      = (myCelcius * 9/5) + 32;

document.write("<br>");
document.write("<br>");
document.write(myCelcius+"C is "+fh+"F");
document.write("<br>");
document.write(myFh+"F is "+celcius+"C");

// Q7. Write a program to implement checkout process of a shopping cart system for an 
// e-commerce website. Store the following in variables
//  a. Price of item 1 
//  b. Price of item 2 
//  c. Ordered quantity of item 1 
//  d. Ordered Quantity of item 2 
//  e. Shipping charges

var priceItem1 = 650;
var priceItem2 = 100;
var ordQty1    = 3;
var ordQty2    = 7;
var ShipCharges = 100; 
var totalCost   = (priceItem1*ordQty1) + (priceItem2*ordQty2) + ShipCharges;

document.write("<br>");
document.write("<br>");
document.write("<h1>Shopping Cart </h1>")
document.write("<br>");
document.write("<br>");
document.write("Price of Item 1 is "+priceItem1);
document.write("<br>");
document.write("Quantity of Item 1 is "+ordQty1);
document.write("<br>");
document.write("Price of Item 2 is "+priceItem2);
document.write("<br>");
document.write("Quantity of Item 2 is "+ordQty2);
document.write("<br>");
document.write("Shipping Charges "+ShipCharges);
document.write("<br>");
document.write("<br>");
document.write("Total cost of order is "+totalCost);

// Q8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser

var totalMarks = +prompt("Enter your Total Marks :")
var marksObtained = +prompt("Enter your Obtained Marks :");
var per     = (marksObtained/totalMarks)*100;

document.write("<br>");
document.write("<br>");
document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("Total marks: "+totalMarks);
document.write("<br>");
document.write("Marks obtaineds: "+marksObtained);
document.write("<br>");
document.write("Percentage: "+per+"%");


// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total 
// currency to Pakistani Rupees. Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var toPkr = (10*104.80) + (25*28);

document.write("<br>");
document.write("<br>");
document.write("<h1>Currency in PKR</h1>");
document.write("<br>");
document.write("Total currency in PKR: "+toPkr);

// Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
//  a. Add 5 
//  b. Multiply by 10 
//  c. Divide the result by 2 Perform all calculations in a single expression

document.write("<br>");
document.write("<br>");

var myNum = 15;
var myCal = (((myNum + 5) * 10) / 2)
document.write("<br>");
document.write("Result of my Calculation is: "+myCal);

// Q11. The Age Calculator: Forgot how old someone is? Calculate it! 
//      a. Store the current year in a variable. 
//      b. Store their birth year in a variable. 
//      c. Calculate their 2 possible ages based on the stored values.

document.write("<br>");
document.write("<br>");

var curYear = 2022;
var birthYear = 1978;
var myAge =curYear - birthYear;
document.write("<h1>Age Calculater</h1>");
document.write("<br>");
document.write("Current year: "+curYear);
document.write("<br>");
document.write("Birth year: "+birthYear);
document.write("<br>");
document.write("Your age is: "+myAge);


// Q12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, 
// and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var pivalue = 3.142;
var radius  = +prompt("Enter your number: ")
var circum = 2* pivalue * radius;
var area   = pivalue * radius * radius;

document.write("<br>");
document.write("<br>");

document.write("<h1>The Geometrizer</h1>");
document.write("<br>");
document.write("Radius of a circle is :"+radius)
document.write("<br>");
document.write("The Circumference is :"+circum)
document.write("<br>");
document.write("The area is :"+area)


// Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your 
// favorite snack is? Wonder no more. 
//  a. Store your favorite snack into a variable 
//  b. Store your current age into a variable. 
//  c. Store a maximum age into a variable. 
//  d. Store an estimated amount per day (as a number). 
//  e. Calculate how many would you eat total for the rest of your life.


var mySnack = "Choclate Chip";
var curAge  = 15;
var maxAge  = 65;
var perDay  = 3;
var reqStock = ((maxAge - curAge) * 365) * perDay;

document.write("<br>");
document.write("<br>");

document.write("<h1>The Life Time Supply Calculator</h1>");
document.write("<br>");
document.write("Favourite Snack :"+mySnack)
document.write("<br>");
document.write("Current Age:"+curAge)
document.write("<br>");
document.write("Estimated maximum age:"+maxAge)
document.write("<br>");
document.write("Amount of snack per day:"+perDay)
document.write("<br>");
document.write("You will need " +reqStock+" "+mySnack+" to last you until the ripe old age of "+maxAge);