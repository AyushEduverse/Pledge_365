// js/splash.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Splash screen loaded");

  // If already redirected during this session, stop everything
  if (sessionStorage.getItem("splashPlayed")) {
    return; // Don't do anything — already redirected
  }

  // Mark splash as played for this session
  sessionStorage.setItem("splashPlayed", "true");

  // Wait and redirect only once
  setTimeout(() => {
    window.location.replace("login.html");  // login redirect kro 
  }, 2500);
});
