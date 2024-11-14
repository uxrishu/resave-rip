// Import Firebase functions as modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjb5lgiv9TJhZc7OpfWnEtbmWQiFUTR-E",
  authDomain: "reesave-6b96c.firebaseapp.com",
  projectId: "reesave-6b96c",
  storageBucket: "reesave-6b96c.firebasestorage.app",
  messagingSenderId: "274158477072",
  appId: "1:274158477072:web:5cdfc7ca54b3f8f39acf95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Sign-In function
function googleSignIn() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // Store user info in localStorage
      localStorage.setItem("userName", user.displayName);
      localStorage.setItem("userEmail", user.email);

      // Redirect to home.html
      window.location.href = "home.html";
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
}

// Attach Google Sign-In function to button
document
  .getElementById("googleSignInButton")
  .addEventListener("click", googleSignIn);
