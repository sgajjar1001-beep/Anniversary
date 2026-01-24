document.addEventListener("DOMContentLoaded", function () {

  /* 💝 SURPRISE */
  const surpriseBtn = document.getElementById("surpriseBtn");
  const loveMsg = document.getElementById("loveMsg");

  surpriseBtn.addEventListener("click", function () {
    loveMsg.style.display = "block";

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
  });

  /* ⏳ LIVE COUNTER */
  const engagementDate = new Date(2025, 6, 22, 0, 0, 0);
  const countdownEl = document.getElementById("countdown");

  function updateCounter() {
    const now = new Date();

    let y = now.getFullYear() - engagementDate.getFullYear();
    let m = now.getMonth() - engagementDate.getMonth();
    let d = now.getDate() - engagementDate.getDate();

    if (d < 0) {
      m--;
      d += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (m < 0) {
      y--;
      m += 12;
    }

    const totalMonths = y * 12 + m;
    const lastDate = new Date(
      engagementDate.getFullYear(),
      engagementDate.getMonth() + totalMonths,
      engagementDate.getDate()
    );

    let diff = now - lastDate;
    const h = Math.floor(diff / 3600000);
    diff %= 3600000;
    const min = Math.floor(diff / 60000);
    diff %= 60000;
    const s = Math.floor(diff / 1000);

    countdownEl.innerHTML =
      `💖 Engagement से<br>
       ${totalMonths} महीने ${d} दिन<br>
       ${h} घंटे ${min} मिनट ${s} सेकंड`;
  }

  updateCounter();
  setInterval(updateCounter, 1000);

  /* 📸 PHOTO POPUP */
  const popup = document.getElementById("photoPopup");
  const popupImg = document.getElementById("popupImg");
  const popupText = document.getElementById("popupText");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
      popupImg.src = card.dataset.img;
      popupText.innerText = card.dataset.text;
      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });

});
