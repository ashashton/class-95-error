const firebaseConfig = {
    apiKey: "AIzaSyCC_j6Ar-AknTWGG5rkuhe3B1WQHpcGp98",
    authDomain: "online-chat-app-aka-kwitter.firebaseapp.com",
    databaseURL: "https://online-chat-app-aka-kwitter-default-rtdb.firebaseio.com",
    projectId: "online-chat-app-aka-kwitter",
    storageBucket: "online-chat-app-aka-kwitter.appspot.com",
    messagingSenderId: "638323326987",
    appId: "1:638323326987:web:432a72cd0b98f1d891870e",
    measurementId: "G-B90XNRZFY9"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_Name");
room_name = localStorage.getItem("room_name");

function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:message,
        like:0
    });

    document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();