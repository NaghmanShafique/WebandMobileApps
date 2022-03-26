
//  Q1. Declare an empty array using JS literal notation to store student names in future.
    
    var students = [];
    
// Q2. Declare an empty array using JS object notation to store student names in future.

    var studentsArr = new Array();
   
//  Q3. Declare and initialize a strings array.
    
    var strArr = ['Karachi','Lahore'];
    
//  Q4. Declare and initialize a numbers array.
    var numArr = [1,2,3,4,5];
    
//  Q5. Declare and initialize a boolean array.
    
    var bolArr = [true,false];
    
//  Q6. Declare and initialize a mixed array.
    
    var mixArr = ['Karachi',1,true,'Lahore',2,false];
    
//  Q7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
    
    var qualArr = ['SSC','HSC','BCS','BS','BCOM','MS','M. Phil','PhD']

    document.write("<h1>Qualifications</h1>");
    document.write("<br>");
    
    for(var i = 0 ; i < qualArr.length; i++) {
       document.write(qualArr[i]);
       document.write("<br>");
    }

//  Q8. Write a program to store 3 student names in an array.Take another array to store score 
//      of these three students. Assume that total marks are 500 for each student, display the 
//      scores & percentages of students like:

     var studentsArr = ['Naghman','Zayyan','Shafique'];
     var marksArr    = [320,230,480];
     var totalMarks  = 500;
     
     document.write("<br>");

     for (var i=0 ; i < studentsArr.length ; i++) {
        var studentPer = (marksArr[i]/500)*100;
        
        document.write('Score of '+studentsArr[i]+' is '+marksArr[i]+'. Percentage: '+studentPer+'%');
        document.write("<br>");
     }

// Q 9. Initialize an array with color names. Display the array elements in your browser. 

     var colorsArr = ['Red','Blue','Green'];

//    a. Ask the user what color he/she wants to add to the beginning & add that color 
//       to the beginning of the array. Display the updated array in your browser.

     var userColorB = prompt('Enter you Color to add at the Begning:');
     
     colorsArr.unshift(userColorB)
     
     document.write("<br>");
     document.write(colorsArr);

//    b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
//    Display the updated array in your browser. 

     document.write("<br>");
     document.write("<br>");
     var userColorE = prompt('Enter you Color to add at the End:');
     colorsArr.push(userColorE)
     document.write(colorsArr);

//    c. Add two more color to the beginning of the array. Display the updated array in your browser. 
     
       document.write("<br>");
       document.write("<br>");
       colorsArr.splice(0,0,'Purple','Brown');
       document.write(colorsArr);

//    d. Delete the first color in the array. Display the updated array in your browser.        
      
      document.write("<br>");
      document.write("<br>");
      colorsArr.splice(0,1);
      document.write(colorsArr);

//    e. Delete the last color in the array. Display the updated array in your browser. 

      document.write("<br>");
      document.write("<br>");
      colorsArr.pop();
      document.write(colorsArr);

//    f. Ask the user at which index he/she wants to add a color & color name. Then add the color
//       to desired position/index. . Display the updated array in your browser.       

     document.write("<br>");
     document.write("<br>");
     var userPosition = prompt('Enter your Color Position:');
     var userColorP = prompt('Enter your Color Name to add at your given Position:');
     colorsArr.splice(userPosition,1,userColorP)
     document.write(colorsArr);

//    g. Ask the user at which index he/she wants to delete color(s) & how many colors 
//       he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. 
//       . Display the updated array in your browser.

     var userIndex = prompt('Enter your Index to delete Colors:');
     var userNoColors = prompt('Enter Number of colors to delete:');
     document.write("<br>");
     document.write("<br>");
     colorsArr.splice(userIndex,userNoColors)
     document.write(colorsArr);


//  Q10. Write a program to store student scores in an array & sort the array in ascending order
//       using Array’s sort method.

     var scorrArr = [320,230,480,120];
     document.write("<br>");
     document.write("<br>");
     document.write('Score of Students:'+scorrArr);
     document.write("<br>");
     document.write('Score of Students:'+scorrArr.sort());


//  Q11. Write a program to initialize an array with city names. Copy 3 array elements from cities 
//       array to selectedCities array.

     var citiesArr = ['Karachi','Lahore','Islamabad','Queta','Peshawar'];

     document.write("<br>");
     document.write("<br>");
     document.write('Cities List: ');
     document.write("<br>");
     document.write(citiesArr);
     
     var newCitiesArr = citiesArr.slice(2,4)
     document.write("<br>");
     document.write("<br>");
     document.write('Selected Cities List');
     document.write("<br>");
     document.write(newCitiesArr);

//  Q12. Write a program to create a single string from the below mentioned 
//        array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

     var myArr = ['This','is','my','cat'];

     document.write("<br>");
     document.write("<br>");
     document.write("Array");
     document.write("<br>");
     document.write(myArr);
     document.write("<br>");
     document.write("<br>");
     document.write("String");
     document.write("<br>");
     document.write(myArr.join(' '));

//  Q 13. Create a new array. Store values one by one in such a way that you can access the values 
//         in the order in which they were stored. (FIFO-First In First Out)     


    var gadgetArr = [];

    for (i = 0; i < 4 ; i++){
         myGadget = prompt("Enter Four Device One by One:")
         gadgetArr.push(myGadget);
    }
    document.write("<br>");
    document.write("<br>");
    for (i = 0; i < gadgetArr.length ; i++){
        document.write(gadgetArr[i]);
        document.write("<br>");
    }

// Q 14. Create a new array. Store values one by one in such a way that you can access the values 
//       in reverse order. (Last In-First Out)

    var newGadgetArr = [];

    for (i = 0; i < 4 ; i++){
         myNewGadget = prompt("Enter Four Device One by One:")
         newGadgetArr.push(myNewGadget);
    }
    document.write("<br>");
    document.write("<br>");
    for (i = (newGadgetArr.length-1); i >= 0 ; i--){
        document.write(newGadgetArr[i]);
        document.write("<br>");
    }