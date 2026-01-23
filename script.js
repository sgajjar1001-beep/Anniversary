document.addEventListener("DOMContentLoaded", function () {

  // 💝 SURPRISE FUNCTION
  window.showLove = function () {
    const msg = document.getElementById("loveMsg");
    if (msg) msg.style.display = "block";

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "0";
      heart.style.fontSize = "22px";
      heart.style.animation = "floatUp 4s linear";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }
  };

  // 💍 ENGAGEMENT DATE
  const engagementDate = new Date("July 22, 2025 00:00:00");

  // ⏳ TIME PASSED COUNTER
  function updateCounter() {
    const el = document.getElementById("countdown");
    if (!el) return;

    const now = new Date();
    const diff = now - engagementDate;

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;

    el.innerHTML =
      `💖 Engagement से <br>
       <b>${months}</b> महीने 
       <b>${days}</b> दिन पूरे हो चुके हैं 💍✨`;
  }

  updateCounter();
  setInterval(updateCounter, 1000);

  // 📅 CALENDAR REMINDER LINK
  const calendarBtn = document.getElementById("calendarLink");
  if (calendarBtn) {
    calendarBtn.href =
      "https://www.google.com/calendar/render?action=TEMPLATE" +
      "&text=Chirag ❤️ Shruti - Engagement" +
      "&details=22 July 2025 – हमारी Engagement 💍" +
      "&dates=20250722T090000/20250722T100000" +
      "&recur=RRULE:FREQ=YEARLY";
  }

  // 💫 HEART ANIMATION STYLE
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes floatUp {
      from { transform: translateY(0); opacity: 1; }
      to { transform: translateY(-100vh); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

});
