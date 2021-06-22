//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ Name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message +"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - "+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firbase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout()
{
   localStorage.removeItem("room_name", room_name);
   localStorage.removeItem("user_name", user_name);
   window.location="index.html";
}

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
