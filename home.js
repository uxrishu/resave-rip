// Display user's name in welcome message
document.addEventListener("DOMContentLoaded", () => {
  const userName = localStorage.getItem("userName");
  if (userName) {
    document.getElementById("userName").textContent = userName;
  } else {
    // If no user info is found, redirect to index.html
    window.location.href = "index.html";
  }
});

// Logout function
document.getElementById("logoutButton").addEventListener("click", () => {
  // Clear user data from localStorage
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

  // Redirect to index.html
  window.location.href = "index.html";
});
