// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("pledgeUsers")) || [];

    // Check if email already registered
    const exists = users.find(user => user.email === email);
    if (exists) {
      alert("This email is already registered.");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      joinDate: new Date().toISOString().split("T")[0],
      trees: 0
    };

    users.push(newUser);
    localStorage.setItem("pledgeUsers", JSON.stringify(users));
    localStorage.setItem("pledgeCurrentUser", JSON.stringify(newUser));

    // Redirect
    window.location.href = "dashboard.html";
  });
});
