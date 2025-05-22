const countdownSection = document.getElementById("countdownSection");
const targetDate = new Date("2025-09-17T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}


function toggleCountdownLoop() {
  setTimeout(() => {
    countdownSection.classList.add("show");
    setTimeout(() => {
      countdownSection.classList.remove("show");
      toggleCountdownLoop();
    }, 5000);
  }, 13000);
}

updateCountdown();
setInterval(updateCountdown, 1000);
toggleCountdownLoop();
