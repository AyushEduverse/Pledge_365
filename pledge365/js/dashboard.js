// pledge365-app/js/dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem("pledgeCurrentUser"));

  // Populate welcome section
  document.getElementById("username").textContent = userData.name || "User";

  // Populate profile section
  document.getElementById("userName").textContent = userData.name || "N/A";
  document.getElementById("userEmail").textContent = userData.email || "N/A";
  document.getElementById("userJoinDate").textContent = userData.joinDate || "N/A";

  // Update tree count
  document.getElementById("treeCount").textContent = userData.trees !== undefined ? userData.trees : 0;

  // 2. Dummy adopted tree data (later can be fetched from storage/server)
  const adoptedTrees = [
    {
      location: "Delhi University Campus",
      date: "2025-07-05",
      image: "assets/tree-placeholder.png",
      status: "Growing"
    },
    {
      location: "Eco Park, Lucknow",
      date: "2025-06-21",
      image: "assets/tree-placeholder.png",
      status: "Healthy"
    },
    {
      location: "Sector 62, Noida",
      date: "2025-07-01",
      image: "assets/tree-placeholder.png",
      status: "Monitored"
    }
  ];

  // 3. Render each tree card into the DOM
  const treeContainer = document.getElementById("treeContainer");

  adoptedTrees.forEach(tree => {
    const card = document.createElement("div");
    card.className = "tree-card";
    card.innerHTML = `
      <img src="${tree.image}" alt="Tree Image" />
      <div class="tree-info">
        <h4>${tree.location}</h4>
        <p>Adopted on: ${tree.date}</p>
        <span class="tree-status">${tree.status}</span>
      </div>
    `;
    treeContainer.appendChild(card);
  });

  // 4. Logout handler
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("pledgeCurrentUser");
    alert("Logged out successfully.");
    window.location.href = "login.html";
  });
});
