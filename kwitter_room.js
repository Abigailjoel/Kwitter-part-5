    // Your web app's Firebase configuration
  var firebaseConfig = {
   apiKey: "AIzaSyCXnvIflFT_oQWmGWotpzaI0uDzRhu-MBI",
   authDomain: "kwitter-main-e9b88.firebaseapp.com",
   databaseURL: "https://kwitter-main-e9b88-default-rtdb.firebaseio.com",
   projectId: "kwitter-main-e9b88",
   storageBucket: "kwitter-main-e9b88.appspot.com",
   messagingSenderId: "82868354215",
   appId: "1:82868354215:web:d5cb0782a26f47f1de2f82"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
   });
   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout()
{
   localStorage.removeItem("room_name", room_name);
   localStorage.removeItem("user_name", user_name);
   window.location="index.html";
}