// js/login.js

console.log("Login page loaded");

document.addEventListener("DOMContentLoaded", () => {
  // Handle login form submission
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("pledgeUsers")) || [];
    const matchedUser = users.find(user => user.email === email && user.password === password);

    if (!matchedUser) {
      alert("Invalid email or password.");
      return;
    }

    localStorage.setItem("pledgeCurrentUser", JSON.stringify(matchedUser));

    window.location.href = "dashboard.html";
  });
});
