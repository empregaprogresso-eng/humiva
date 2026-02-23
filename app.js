function joinMission() {
    incrementGlobal();
    alert("You are the upgrade. Action recorded globally.");
}

setInterval(() => {
    document.getElementById("anxiety").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("purpose").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("connection").innerText = Math.floor(Math.random()*100) + "%";
}, 5000);
