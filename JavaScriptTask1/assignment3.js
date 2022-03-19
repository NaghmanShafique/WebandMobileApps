// Q1. Declare a variable called age & assign to it your age. Show your age in an alert box.
   
   var age;
   age = 43;
   alert("I am "+age+" years old.");

// Q2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//    Show his/her number of visits on your web page. For example: “You have visited this site N times”.   

    var noOfVisits = 0;
    noOfVisits = ++noOfVisits;
    alert("You have visited this site "+noOfVisits+" times");

// Q3. Declare a variable called birthYear & assign to it your birth year. 
//     Show the following message in your browser:    

     var birthYear;
     birthYear = 1978;
     document.write("My birth year is "+birthYear.toString()+"<br>");
     document.write("Data type of my declared variable is "+ typeof birthYear);

//  Q4. visitor visits an online clothing store www.xyzClothing.com . 
//       Write a script to store in variables the following information: 
//          a. Visitor’s name 
//         b. Product title 
//         c. Quantity i.e. 
//       how many products a visitor wants to order Show the following message in your browser:
//      “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.    

    var visitorName = "John Doe";
    var proTitle    = "T-Shirts(s)";
    var orderQty    = 5;
    var storeName   = "XYZ Clothing store";

    document.write(`<br><b>${visitorName}</b> ordered <b>${orderQty.toString()}</b> <b>${proTitle}</b> on ${storeName}`);