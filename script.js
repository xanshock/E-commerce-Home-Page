function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }

const countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  if (timeRemaining >= 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
// final version 
