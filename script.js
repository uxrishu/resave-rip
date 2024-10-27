// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //     apiKey: "AIzaSyBd1mqUJdXrj1HlVd-fAM-bbkUHLQBZKHs",
// //     authDomain: "resave-b3783.firebaseapp.com",
// //     projectId: "resave-b3783",
// //     storageBucket: "resave-b3783.appspot.com",
// //     messagingSenderId: "30739395015",
// //     appId: "1:30739395015:web:d00c9604654f471b90a9e2",
// //     measurementId: "G-RB3LLNRMT8"
// // };

// // // Initialize Firebase
// // const app = firebase.initializeApp(firebaseConfig);
// // const auth = firebase.auth();

// // // Define the signInWithGoogle function and expose it globally
// // window.signInWithGoogle = function() {
// //     const provider = new firebase.auth.GoogleAuthProvider();
// //     auth.signInWithPopup(provider)
// //         .then((result) => {
// //             const credential = firebase.auth.GoogleAuthProvider.credentialFromResult(result);
// //             const token = credential.accessToken;
// //             const user = result.user;
// //             console.log('User signed in: ', user);
// //         })
// //         .catch((error) => {
// //             console.error('Error signing in: ', error.message);
// //         });
// // };

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBd1mqUJdXrj1HlVd-fAM-bbkUHLQBZKHs",
//     authDomain: "resave-b3783.firebaseapp.com",
//     projectId: "resave-b3783",
//     storageBucket: "resave-b3783.appspot.com",
//     messagingSenderId: "30739395015",
//     appId: "1:30739395015:web:d00c9604654f471b90a9e2",
//     measurementId: "G-RB3LLNRMT8"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebase.firestore(); // Initialize Firestore

// // Define the signInWithGoogle function and expose it globally
// window.signInWithGoogle = function() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider)
//         .then((result) => {
//             const user = result.user;
//             console.log('User signed in: ', user);
//             document.getElementById('resourceForm').style.display = 'block'; // Show resource form after sign in
//         })
//         .catch((error) => {
//             console.error('Error signing in: ', error.message);
//         });
// };

// // Save resource function
// window.saveResource = function() {
//     const name = document.getElementById('resourceName').value;
//     const url = document.getElementById('resourceUrl').value;
//     const tags = document.getElementById('resourceTags').value.split(',').map(tag => tag.trim());

//     // Save resource to Firestore
//     db.collection('resources').add({
//         name: name,
//         url: url,
//         tags: tags,
//         userId: auth.currentUser.uid // Store the user's ID for privacy
//     })
//     .then(() => {
//         console.log('Resource saved successfully!');
//         // Clear input fields after saving
//         document.getElementById('resourceName').value = '';
//         document.getElementById('resourceUrl').value = '';
//         document.getElementById('resourceTags').value = '';
//     })
//     .catch((error) => {
//         console.error('Error saving resource: ', error);
//     });
// };



// auth2 is initialized with gapi.auth2.init() and a user is signed in.

// if (auth2.isSignedIn.get()) {
//     var profile = auth2.currentUser.get().getBasicProfile();
//     console.log('ID: ' + profile.getId());
//     console.log('Full Name: ' + profile.getName());
//     console.log('Given Name: ' + profile.getGivenName());
//     console.log('Family Name: ' + profile.getFamilyName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail());
//   }

function onSignin(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You have logged out");
      $(".g-signin2").css("display", "block");
      $(".data").css("display", "none");
    });
  }

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdb0pE8Ux_e-quvD02ORA7pWuqdTd3Qt4",
    authDomain: "resave-b3783.firebaseapp.com",
    projectId: "resave-b3783",
    storageBucket: "resave-b3783.appspot.com",
    messagingSenderId: "30739395015",
    appId: "1:30739395015:web:d00c9604654f471b90a9e2",
    measurementId: "G-RB3LLNRMT8"
  };