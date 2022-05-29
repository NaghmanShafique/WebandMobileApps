const firebaseConfig = {
    apiKey: "AIzaSyD0q37-_m5h_Lzu6_KedjWhN1bD4SbYbZg",
    authDomain: "bmj-todo-proj.firebaseapp.com",
    databaseURL: "https://bmj-todo-proj-default-rtdb.firebaseio.com",
    projectId: "bmj-todo-proj",
    storageBucket: "bmj-todo-proj.appspot.com",
    messagingSenderId: "762876456294",
    appId: "1:762876456294:web:fabbff27b0d5e6db1feca7"
  };

  const app = firebase.initializeApp(firebaseConfig);

  // console.log(app);

//   app.database().ref('/').child('Todos').on("value", function(snapshot) {
//     console.log(snapshot.val());
//     snapshot.forEach(function(data) {
//         console.log(data.key,'KeyAPI');
//     });
// });

   app.database().ref('/').child('Todos').on("child_added", function(data) {
      // console.log(data.val().value);

       

     var mainTable = document.getElementById('table');


     var taskTd = document.createElement('td');
    
      /* var editBtnTd = document.createElement('td');
       var delBtnTd = document.createElement('td');*/

     var editIcnTd = document.createElement('td');
     var delIcnTd = document.createElement('td');
     
     

     var row = document.createElement('tr');

     row.appendChild(taskTd);
     
    //  row.appendChild(editBtnTd);
    //  row.appendChild(delBtnTd);
     
     row.appendChild(editIcnTd);
     row.appendChild(delIcnTd);
    
     mainTable.appendChild(row);


    //  var editBtn = document.createElement('button');
    //  var delBtn =  document.createElement('button');
     
     var editIcn =  document.createElement('i');
     var delIcn =  document.createElement('i');

    //  var editBtnTxt = document.createTextNode('Edit');
    //  var delBtnTxt = document.createTextNode('Delete');

     var textValue = document.createTextNode(data.val().value);
     var dataKey  =  data.key;
      
    // editBtn.appendChild(editBtnTxt);
    // editBtn.setAttribute('onClick','editTask(this)');

    // delBtn.appendChild(delBtnTxt);
    // delBtn.setAttribute('onClick','deleteTask(this)');
    // delBtn.setAttribute('id',dataKey);

    editIcn.setAttribute('class','fa fa-pencil');
    editIcn.setAttribute('onClick','editTask(this)');
    editIcn.setAttribute('id',dataKey);

    delIcn.setAttribute('class','fa fa-trash');
    delIcn.setAttribute('onClick','deleteTask(this)');
    delIcn.setAttribute('id',dataKey);
    
    taskTd.setAttribute('class','firstTd')
    editIcnTd.setAttribute('class','secondTd');
    delIcnTd.setAttribute('class','thirdTd');
    
    taskTd.appendChild(textValue);
    // editBtnTd.appendChild(editBtn);
    editIcnTd.appendChild(editIcn);
    // delBtnTd.appendChild(delBtn);
    delIcnTd.appendChild(delIcn);
  
});

   function addTask() {
 
    var textItem = document.getElementById('task');
    var taskValue = textItem.value;
    // var id       = app.database().ref('/').child('Todos').push().key;

    var todo = {
         value: taskValue
    }

    app.database().ref('/').child('Todos').push(todo);
    console.log(taskValue);

    textItem.value = " ";

    
}

function deleteAllTasks(e) {
    document.getElementById('table').innerHTML = "";
    app.database().ref('/Todos').remove();
}

function deleteTask(e,id) {
    e.parentNode.parentNode.remove();
    app.database().ref(`/Todos/${e.id}`).remove();
 }

 function editTask(e) {
    var taskValue = e.parentNode.parentNode.firstChild.innerHTML;
    
    var updateValue = prompt('Enter value to Update',taskValue);
    
    if (!updateValue.trim()) {
        alert("Enter Task value");
 
    } else {

      var todo = {
        value: updateValue
   }
      e.parentNode.parentNode.firstChild.innerHTML = updateValue;
      app.database().ref(`/Todos/${e.id}/`).set(todo)
    }
 }