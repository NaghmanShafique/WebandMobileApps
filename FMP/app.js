const firebaseConfig = {
    apiKey: "AIzaSyAGTMrUjGM2gBYuEPmw9_VucjvyQmn0fCk",
    authDomain: "bmj-fmp-proj.firebaseapp.com",
    databaseURL: "https://bmj-fmp-proj-default-rtdb.firebaseio.com",
    projectId: "bmj-fmp-proj",
    storageBucket: "bmj-fmp-proj.appspot.com",
    messagingSenderId: "997097445090",
    appId: "1:997097445090:web:6fb8dad21def757509b0bb"
  };
  
   // Initialize Firebase

   const app = firebase.initializeApp(firebaseConfig);

   console.log(app);


         var menuItems = document.getElementById("menuItems");
         menuItems.style.maxHeight = "0px";

         function menuToggle() {
             if (menuItems.style.maxHeight == "0px") {

                menuItems.style.maxHeight = "400px";
             } 
             else {
                menuItems.style.maxHeight = "0px";
             }

         }
