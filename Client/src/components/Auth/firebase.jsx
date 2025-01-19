import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

//Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase services:

/*<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAjtPeXz6FMFiTPAph7GT_A7tBvTzXZNqE",
    authDomain: "campushub-15a25.firebaseapp.com",
    projectId: "campushub-15a25",
    storageBucket: "campushub-15a25.firebasestorage.app",
    messagingSenderId: "738674354297",
    appId: "1:738674354297:web:6ba1bbb930af5933ee8ca8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>*/
