
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 const firebaseConfig = {
      apiKey: "AIzaSyADxyDI93NnsFVt7k8VbitPk4Tifyf1Ik8",
      authDomain: "kwitter-45583.firebaseapp.com",
      databaseURL: "https://kwitter-45583-default-rtdb.firebaseio.com",
      projectId: "kwitter-45583",
      storageBucket: "kwitter-45583.appspot.com",
      messagingSenderId: "458007304906",
      appId: "1:458007304906:web:ac14c6a722131d45c03233"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name -" + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;

      //End code
      });});}
      
 getData();  
 function redirectToRoomName(name)

 {
  console.log(name);
  localStorage.setItem("room_name" ,name);
  window.location = "kwitter_page.html";    
 }

function logout(){

      window.location="index.html";

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
}

