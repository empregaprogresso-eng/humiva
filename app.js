function joinMission() {
  alert("Welcome to the mission! You are the upgrade.");
}

function openAuth() {
  document.getElementById("authModal").classList.remove("hidden");
}

function closeAuth() {
  document.getElementById("authModal").classList.add("hidden");
}

setInterval(() => {
  document.getElementById("anxiety").innerText = Math.floor(Math.random()*100) + "%";
  document.getElementById("purpose").innerText = Math.floor(Math.random()*100) + "%";
  document.getElementById("connection").innerText = Math.floor(Math.random()*100) + "%";
}, 5000);
