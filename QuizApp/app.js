const firebaseConfig = {
    apiKey: "AIzaSyAHF3D-TuDE_hYs_QvccuzHATS2g_LvQxg",
    authDomain: "bmj-quizapp-proj.firebaseapp.com",
    databaseURL: "https://bmj-quizapp-proj-default-rtdb.firebaseio.com",
    projectId: "bmj-quizapp-proj",
    storageBucket: "bmj-quizapp-proj.appspot.com",
    messagingSenderId: "401082225129",
    appId: "1:401082225129:web:5e0c8177362a6a8edf3b78"
  };

  // Initialize Firebase

  const app = firebase.initializeApp(firebaseConfig);
  console.log(app);

  var optionsClass = document.getElementsByClassName("option");
  var curDateTime = document.getElementById("date-time");
  var score = 0;
  var count = 0;
  let arrLength;
  var ques = document.getElementById("ques");
  
  app.database().ref('/').child('questionare').on("child_added", function(data) {
  
       arrLength = data.val().length;
       let sno  = 0;      
       let seq;
       ques.innerHTML = "Q1. "+data.val()[count].question;
       curDateTime.innerHTML = getCurPkDateTime();
       
    for (var i = 0; i < optionsClass.length; i++) {
          sno = ++sno;
          
          if (sno == 1) {
            seq = 'a'
          } else if (sno == 2) {
            seq = 'b'
          } else if (sno == 3) {
            seq = 'c'
          } else {
            seq = 'd'
          }

          optionsClass[i].innerHTML = "("+seq+")    "+data.val()[count].options[i];
    }
  })
  
  var options = document.getElementsByName("option");
  var score = 0;
  var count = 0;

  function calc(e) {
     app.database().ref('/').child('questionare').on("child_added", function(data) {
     for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
         if (i == data.val()[e].answer) {
           score = score + 10;
         }
         options[i].checked = false;
        }
      }
   })
  }
 
 function nextQuestion() {
  var cond = false;
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked == true) {
      calc(count);
      cond = true;
     }
   }   
    if (cond) {
      if (count < arrLength - 1) {
        count++;
        showQuestion(count);
    } else {
      var result = ((score/(arrLength*10))*100);
       
      if (result >= 60) {
        window.open("sucess.html");
      } else {
        window.open("fail.html")    
      }
   }   
  }
 }
function showQuestion(e) {
  app.database().ref('/').child('questionare').on("child_added", function(data) {
       let sno  = 0;   
       let seq;   
       ques.innerHTML = "Q"+(e+1)+". "+data.val()[e].question;
       
    for (var i = 0; i < optionsClass.length; i++) {
          sno = ++sno;
          if (sno == 1) {
            seq = 'a'
          } else if (sno == 2) {
            seq = 'b'
          } else if (sno == 3) {
            seq = 'c'
          } else {
            seq = 'd'
          }
          optionsClass[i].innerHTML = "("+seq+")    "+data.val()[e].options[i];
    }
  })
}



function addQuestionare() {

  var questionare = [
          {
            question:
               "What is the name of the capital of Pakistan?",
             answer: 1,
            options: [
              "Dehli",
              "Islamabad",
              "Washington",
              "Sydney",
            ],
          },
          {
            question: "Who is the founder of Pakistan?",
            answer: 3,
           options: ["Nehru", "Gandhi", "Imran Khan", "Quaid-e-Azam"],
         },
         {
          question: "What is the use of Database?",
          answer: 1,
         options: ["Chat", "Store Data", "Web Development", "Machine Learning"],
        },
        {
         question: "In Which year did Pakistan win the Cricket World Cup?",
         answer: 2,
         options: ["1975", "1987", "1992", "1996"],
       },
      {
        question: "Which is the Process of finding errors in Software Code?",
        answer: 0,
       options: ["Testing", "Interpreting", "Compiling", "Debugging"],
      },
     ]  

     app.database().ref('/').child('questionare').push(questionare);    
}

function getCurPkDateTime() {
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var date = today.getDate()+'-'+month[(today.getMonth())]+'-'+today.getFullYear();
  var dateTime = date+' '+daylist[day];
  return dateTime;
}