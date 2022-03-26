// Q1. 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var mulDieArr1 = [[],[],[]];
// document.write(mulDieArr1);


//  Q2. Declare and initialize a multidimensional array representing the following matrix:

var mulDieArr2 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for (i = 0; i < mulDieArr2.length; i++) {
    var innerArrayLength = mulDieArr2[i].length;
    for (let j = 0; j < innerArrayLength; j++) {
        document.write(mulDieArr2[i][j]+' ');   
    }
    document.write("<br>");
}

// Q3. Write a program to print numeric counting from 1 to 10.

var myNumArr = [1,2,3,4,5,6,7,8,9,10];
    document.write("<br>");
for (i = 0; i < myNumArr.length; i++) {
    document.write(myNumArr[i])
    document.write("<br>");
}

// Q4. Write a program to print multiplication table of any number using for loop. 
//     Table number & length should be taken as an input from user.

  myTable = prompt("Enter a number to show its multiplication table:");
  noForTable = prompt("Enter a length for multiplication table:")

  document.write("<br>");
  document.write("<br>");
  document.write("Multiplication Table of "+myTable);
  document.write("<br>");
  document.write("Length "+noForTable);
  document.write("<br>");
  

  var tableArr = []
  for (i = 0; i <= noForTable ; i++){
    tableArr.push(i);
  }
  document.write("<br>");

  for (i = 1; i < tableArr.length; i++) {
    
    document.write(myTable+" * "+tableArr[i]+" = "+i*myTable);
    document.write("<br>");
   }

// Q5. Write a program to print items of the following array using for loop:

   var fruitsArr = ['apple', 'banana', 'mango', 'orange', 'strawberry']
   document.write("<br>");

   for (i = 0; i < fruitsArr.length; i++){
    document.write(fruitsArr[i]);
    document.write("<br>");
   }
   document.write("<br>");
   for (i = 0; i < fruitsArr.length; i++){
    document.write("Element at index "+i+" is "+fruitsArr[i]);
    document.write("<br>");
   }

    
// Q6. Generate the following series in your browser. See example output.

    var myArrNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//  a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
      
      document.write("<br>");
      document.write("<b>Counting</b>");
      document.write("<br>");
      document.write("<br>");
      for (i = 1; i < 16; i++) {
          document.write(myArrNum[i]+',');
      }

//  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 

      document.write("<br>");
      document.write("<br>");
      document.write("<b>Reverse Counting</b>");
      document.write("<br>");
      document.write("<br>");
      for (i = 10; i > 0; i--) {
          document.write(myArrNum[i]+',');
      }
//  c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 

      document.write("<br>");
      document.write("<br>");
      document.write("<b>Even</b>");
      document.write("<br>");
      document.write("<br>");
      for (i = 0; i <= 20; i++) {
          if (i===0) {
            document.write(myArrNum[i]+',');
          }
          else if ((i%2) === 0) {
             document.write(myArrNum[i]+',');
          }   
      }
//  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 

      document.write("<br>");
      document.write("<br>");
      document.write("<b>Odd</b>");
      document.write("<br>");
      document.write("<br>");
      for (i = 0; i <= 20; i++) {
          
        if ((i%2) !== 0) {
             document.write(myArrNum[i]+',');
          }   
      }
//  e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

        document.write("<br>");
        document.write("<br>");
        document.write("<b>Series</b>");
        document.write("<br>");
        document.write("<br>");
        for (i = 0; i <= 20; i++) {
            if (i===0) {
            document.write('');
            }
            else if ((i%2) === 0) {
            document.write(myArrNum[i]+'k,');
            }   
        }


//  Q7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program 
//      to enable “search by user input” in an array. 
//      After searching, prompt the user whether the given item is found in the list or not. Example :    

        var myItems = ['cake','apple pie','cookie','chips','patties'];
        var userItem = prompt("Welcome to My Backery. What do you want to oder Sir/Maam");
        
        var isfound = 'no';
        document.write("<br>");
        document.write("<br>");
        for (i = 0; i<myItems.length;i++) {
            if (userItem === myItems[i]) {
                
                document.write(myItems[i]+ " is <b>available</b> at index "+i+" in out backey");
                document.write("<br>");
                isfound = 'yes'; 
            }
        }
        if (isfound === 'no') {
            document.write("We are sorry. "+userItem+" is <b>not available</b> in our backey.")

        }

// Q8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].  

        var mySortNumArr = [24, 53, 78, 91, 12];
        var sortNumArr  = mySortNumArr.sort();
        var indexnum = (mySortNumArr.length)-1
        document.write("<br>");
        document.write("Array Items:"+mySortNumArr);
        document.write("<br>");
        document.write("<br>");
        document.write("The Largest Number is "+sortNumArr[indexnum]);


//  Q9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]  


        var mySortNumArr2 = [24, 53, 78, 91, 12];
        var sortNumArr2  = mySortNumArr2.sort();
        document.write("<br>");
        document.write("<br>");
        document.write("Array Items:"+mySortNumArr2);
        document.write("<br>");
        document.write("<br>");
        document.write("The Smallest Number is "+sortNumArr2[0]);

// Q10. Write a program to print multiples of 5 ranging 1 to 100. 

    var myArrNum10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var myNewNumArr10 = [];

  for (i=0; i < myArrNum10.length;i++){
    myNewNumArr10.push(myArrNum10[i]*5);
  }
        document.write("<br>");
        document.write("<br>");
        document.write(myNewNumArr10);

