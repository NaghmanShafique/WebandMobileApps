// Q1. Write a program to take a number in a variable, do the required arithmetic to display 
// the following result in your browser:

   var a = 10;
   document.write("<h3>Results</h3>")
   document.write("The value of a is: "+ a.toString());
   document.write("<br>")
   document.write("-------------------------");
   a1 = ++a;
   document.write("<br>")
   document.write("The value of ++a is: "+ a.toString());
   document.write("<br>")
   document.write("The value of a is: "+ a1.toString());
   document.write("<br>")
   a1 = a++;
   document.write("<br>")
   document.write("The value of a++ is: "+ a1.toString());
   document.write("<br>")
   document.write("The value of a is: "+ a.toString());
   document.write("<br>")
   a1 = --a;
   document.write("<br>")
   document.write("The value of --a is: "+ a1.toString());
   document.write("<br>")
   document.write("The value of a is: "+ a.toString());
   document.write("<br>")
   a1 = a--;
   document.write("<br>")
   document.write("The value of a-- is: "+ a1.toString());
   document.write("<br>")
   document.write("The value of a is: "+ a.toString());

//    Q2. What will be the output in variables a, b & result after execution of the following script:

       var a = 2, b = 1; 
       var result = --a - --b + ++b + b--;
       document.write("<br>")
       document.write("<br>")
       document.write("The value of result is: "+ result.toString());
       document.write("</br>")
       document.write("a=1+b=0+b=1,+b=1")

    //    Q3. Write a program that takes input a name from user & greet the user.

    var userName = prompt("Enter your name.");
    document.write("</br>")
    document.write("</br>")
    document.write("Hello "+userName);
       
    // Q5. Write a program to take input a number from user & display it’s multiplication table 
    // on your browser. If user does not enter a new number, multiplication table of 5 should be 
    // displayed by default.

    var tableNo = prompt("Enter No for Table:","5");
    var myNo = Number(tableNo);
    document.write("</br>");
    document.write("</br>");
    document.write(myNo+" * 1  = "+(myNo*1));
    document.write("</br>");
    document.write(myNo+" * 2  = "+(myNo*2));
    document.write("</br>");
    document.write(myNo+" * 3  = "+(myNo*3));
    document.write("</br>");
    document.write(myNo+" * 4  = "+(myNo*4));
    document.write("</br>");
    document.write(myNo+" * 5  = "+(myNo*5));
    document.write("</br>");
    document.write(myNo+" * 6  = "+(myNo*6));
    document.write("</br>");
    document.write(myNo+" * 7  = "+(myNo*7));
    document.write("</br>");
    document.write(myNo+" * 8  = "+(myNo*8));
    document.write("</br>");
    document.write(myNo+" * 9  = "+(myNo*9));
    document.write("</br>");
    document.write(myNo+" * 10 = "+(myNo*10));
    document.write("</br>");

   //Q6. Take
   //  a) Take three subjects name from user and store them in 3 different variables.
   //  b) Total marks for each subject is 100, store it in another variable.
   //  c) Take obtained marks for first subject from user and stored it in different variable.
   
   
   var sub1      = prompt("Enter First Subject Name:")
   var sub2      = prompt("Enter Second Subject Name:")
   var sub3      = prompt("Enter Third Subject Name:")
   var obtmarks1 = prompt("Enter First Subject Obtained Numbers:")
   var obtmarks2 = prompt("Enter Second Subject Obtained Numbers:")
   var obtmarks3 = prompt("Enter Third Subject Obtained Numbers:")
   var total     = 300;
   var totObtainMarks = Number(obtmarks1) + Number(obtmarks2) + Number(obtmarks3);
   var perSub1        = (Number(obtmarks1)/100) * 100;
   var perSub2        = (Number(obtmarks2)/100) * 100;
   var perSub3        = (Number(obtmarks3)/100) * 100;
   var totper         = (totObtainMarks/300) * 100;
   document.write("</br>");
   document.write("</br>");
   document.write("<table>");
      document.write("<tr>");
         document.write("<th>Subject</th>");
         document.write("<th>Total Marks</th>");
         document.write("<th>Obtained Marks</th>");
         document.write("<th>Percentage</th>");
      document.write("</tr>");
      document.write("<tr>");
      document.write(`<td>${sub1}</td>`);
      document.write(`<td>100</td>`);
      document.write(`<td>${obtmarks1}</td>`);
      document.write(`<td>${perSub1}%</td>`);
   document.write("</tr>");
   document.write("<tr>");
      document.write(`<td>${sub2}</td>`);
      document.write(`<td>100</td>`);
      document.write(`<td>${obtmarks2}</td>`);
      document.write(`<td>${perSub2}%</td>`);
   document.write("</tr>");
   document.write("<tr>");
      document.write(`<td>${sub3}</td>`);
      document.write(`<td>100</td>`);
      document.write(`<td>${obtmarks3}</td>`);
      document.write(`<td>${perSub3}%</td>`);
   document.write("</tr>");
   document.write("<tr>");
      document.write(`<td></td>`);
      document.write(`<td>${total}</td>`);
      document.write(`<td>${totObtainMarks}</td>`);
      document.write(`<td>${totper}%</td>`);
   document.write("</tr>");
document.write("</table>");
   