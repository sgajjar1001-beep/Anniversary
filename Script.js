// ❤️ SURPRISE MESSAGE + HEARTS
function showLove() {
  document.getElementById("loveMsg").style.display = "block";

  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

// ⏳ ANNIVERSARY DATE – 22 July 2025
const anniversaryDate = new Date(2025, 6, 22);

function updateCountdown() {
  const now = new Date();
  const diff = anniversaryDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "💖 आज ही हमारी Anniversary है 💖";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} दिन ${hours} घंटे ${minutes} मिनट ${seconds} सेकंड`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 📅 YEARLY CALENDAR REMINDER
const startDate = "20250722T090000";
const endDate   = "20250722T100000";

const calendarURL =
  `https://www.google.com/calendar/render?action=TEMPLATE` +
  `&text=Chirag ❤️ Shruti - Anniversary` +
  `&details=आज ही के दिन हम पहली बार मिले थे 💖` +
  `&dates=${startDate}/${endDate}` +
  `&recur=RRULE:FREQ=YEARLY`;

document.getElementById("calendarLink").href = calendarURL;

// 🎆 SPECIAL DAY CELEBRATION
function checkSpecialDay() {
  const today = new Date();
  if (today.getDate() === 22 && today.getMonth() === 6) {
    for (let i = 0; i < 40; i++) {
      let heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "0";
      heart.style.fontSize = "26px";
      heart.style.animation = "floatUp 5s linear";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }
  }
}

checkSpecialDay();

// Animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
