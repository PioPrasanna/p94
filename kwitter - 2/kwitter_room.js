// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD385vbDk9f2cYpbVJWAQhtiBHbsVn_-KI",
      authDomain: "kwitter-4812a.firebaseapp.com",
      projectId: "kwitter-4812a",
      storageBucket: "kwitter-4812a.appspot.com",
      messagingSenderId: "602028580275",
      appId: "1:602028580275:web:bea7038b0925cb5ebb3fc6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
