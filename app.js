
function joinMission() {
  alert("You are the upgrade.");
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

installBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (deferredPrompt) {
    deferredPrompt.prompt();
  } else {
    alert("Use browser menu > Add to Home Screen");
  }
});
