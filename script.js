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
// 💖 PHOTO POPUP FUNCTIONS
function openPopup(imgSrc, text) {for (let i = 0; i < 12; i++) {
  const h = document.createElement("div");
  h.innerHTML = "❤️";
  h.style.position = "fixed";
  h.style.left = Math.random() * 100 + "vw";
  h.style.top = Math.random() * 100 + "vh";
  h.style.fontSize = "18px";
  h.style.opacity = "0.8";
  h.style.zIndex = "10000";
  h.style.animation = "floatUp 3s linear";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 3000);
}
  document.getElementById("popupImg").src = imgSrc;
  document.getElementById("popupText").innerText = text;
  document.getElementById("photoPopup").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closePopup() {
  document.getElementById("photoPopup").style.display = "none";
  document.body.style.overflow = "auto";
}
