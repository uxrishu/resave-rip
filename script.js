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

// // Define the signInWithGoogle function and expose it globally
// window.signInWithGoogle = function() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider)
//         .then((result) => {
//             const credential = firebase.auth.GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;
//             console.log('User signed in: ', user);
//         })
//         .catch((error) => {
//             console.error('Error signing in: ', error.message);
//         });
// };

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd1mqUJdXrj1HlVd-fAM-bbkUHLQBZKHs",
    authDomain: "resave-b3783.firebaseapp.com",
    projectId: "resave-b3783",
    storageBucket: "resave-b3783.appspot.com",
    messagingSenderId: "30739395015",
    appId: "1:30739395015:web:d00c9604654f471b90a9e2",
    measurementId: "G-RB3LLNRMT8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore(); // Initialize Firestore

// Define the signInWithGoogle function and expose it globally
window.signInWithGoogle = function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log('User signed in: ', user);
            document.getElementById('resourceForm').style.display = 'block'; // Show resource form after sign in
        })
        .catch((error) => {
            console.error('Error signing in: ', error.message);
        });
};

// Save resource function
window.saveResource = function() {
    const name = document.getElementById('resourceName').value;
    const url = document.getElementById('resourceUrl').value;
    const tags = document.getElementById('resourceTags').value.split(',').map(tag => tag.trim());

    // Save resource to Firestore
    db.collection('resources').add({
        name: name,
        url: url,
        tags: tags,
        userId: auth.currentUser.uid // Store the user's ID for privacy
    })
    .then(() => {
        console.log('Resource saved successfully!');
        // Clear input fields after saving
        document.getElementById('resourceName').value = '';
        document.getElementById('resourceUrl').value = '';
        document.getElementById('resourceTags').value = '';
    })
    .catch((error) => {
        console.error('Error saving resource: ', error);
    });
};
