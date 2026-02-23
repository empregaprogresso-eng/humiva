function joinMission() {
    alert("You are the upgrade.");
}

setInterval(() => {
    document.getElementById("anxiety").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("purpose").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("connection").innerText = Math.floor(Math.random()*100) + "%";
}, 5000);

// PWA Install Logic
let deferredPrompt;

const installBtnHeader = document.getElementById('installBtnHeader');
const installBtnHero = document.getElementById('installBtnHero');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtnHeader.classList.remove('hidden');
    installBtnHero.classList.remove('hidden');
});

function triggerInstall() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt = null;
    }
}

installBtnHeader?.addEventListener('click', triggerInstall);
installBtnHero?.addEventListener('click', triggerInstall);
