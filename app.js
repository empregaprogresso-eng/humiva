let streak = 0;

function joinMission() {
  incrementGlobal();
  streak++;
  document.getElementById("streak").innerText = streak;
}

function updateCounter(value) {
  document.getElementById("globalCount").innerText = value;
}
