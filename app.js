function joinMission() {
    incrementGlobal();
    alert("You are the upgrade. Action recorded globally.");
}

setInterval(() => {
    document.getElementById("anxiety").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("purpose").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("connection").innerText = Math.floor(Math.random()*100) + "%";
}, 5000);

// PWA Install Logic
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.classList.remove('hidden');
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installBtn.classList.add('hidden');
        }
        deferredPrompt = null;
    }
});
