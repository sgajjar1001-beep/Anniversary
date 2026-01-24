document.addEventListener("DOMContentLoaded", function () {

  // 💝 SURPRISE FUNCTION (GLOBAL)
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

  // 💍 Engagement Date (LOCAL TIME)
  const engagementDate = new Date(2025, 6, 22, 0, 0, 0); // 22 July 2025

  function updateCounter() {
    const el = document.getElementById("countdown");
    if (!el) return;

    const now = new Date();

    let years = now.getFullYear() - engagementDate.getFullYear();
    let months = now.getMonth() - engagementDate.getMonth();
    let days = now.getDate() - engagementDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalMonths = years * 12 + months;

    const lastAnniv = new Date(
      engagementDate.getFullYear(),
      engagementDate.getMonth() + totalMonths,
      engagementDate.getDate()
    );

    let diffMs = now - lastAnniv;

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    diffMs %= (1000 * 60 * 60);

    const minutes = Math.floor(diffMs / (1000 * 60));
    diffMs %= (1000 * 60);

    const seconds = Math.floor(diffMs / 1000);

    el.innerHTML = `
      💖 Engagement से <br>
      <b>${totalMonths}</b> महीने 
      <b>${days}</b> दिन <br>
      <b>${hours}</b> घंटे 
      <b>${minutes}</b> मिनट 
      <b>${seconds}</b> सेकंड हो चुके हैं 💍✨
    `;
  }

  updateCounter();
  setInterval(updateCounter, 1000);

});
/* 💖 PHOTO POPUP MODAL */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  animation: fadeIn 0.4s ease;
}

.popup img {
  max-width: 85%;
  max-height: 60%;
  border-radius: 20px;
  animation: zoomIn 0.4s ease;
}

.popup p {
  margin-top: 20px;
  color: white;
  font-size: 18px;
  text-align: center;
  padding: 0 20px;
  line-height: 1.6;
  white-space: pre-line;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 35px;
  color: white;
  cursor: pointer;
}

/* ✨ Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  from { transform: scale(0.7); }
  to { transform: scale(1); }
}
