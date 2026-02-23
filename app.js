function joinMission() {
    alert("You are the upgrade.");
}

setInterval(() => {
    document.getElementById("anxiety").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("purpose").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("connection").innerText = Math.floor(Math.random()*100) + "%";
}, 5000);

// Install shortcut without layout change
let deferredPrompt;
const installLink = document.getElementById('installLink');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installLink.classList.remove('hidden');
});

installLink?.addEventListener('click', (e) => {
    e.preventDefault();
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt = null;
    }
});
