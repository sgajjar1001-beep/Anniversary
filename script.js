document.addEventListener("DOMContentLoaded", function () {

  /* 💝 SURPRISE */
  const surpriseBtn = document.getElementById("surpriseBtn");
  const loveMsg = document.getElementById("loveMsg");

  surpriseBtn.addEventListener("click", function () {
    loveMsg.style.display = "block";

    for (let i = 0; i < 15; i++) {
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

  /* ⏳ COUNTDOWN (MOBILE SAFE) */
  const engagementDate = new Date(2025, 6, 22, 0, 0, 0);
  const countdownEl = document.getElementById("countdown");

  function updateCounter() {
    const now = new Date();

    let months =
      (now.getFullYear() - engagementDate.getFullYear()) * 12 +
      (now.getMonth() - engagementDate.getMonth());

    let tempDate = new Date(
      engagementDate.getFullYear(),
      engagementDate.getMonth() + months,
      engagementDate.getDate()
    );

    if (now < tempDate) {
      months--;
      tempDate = new Date(
        engagementDate.getFullYear(),
        engagementDate.getMonth() + months,
        engagementDate.getDate()
      );
    }

    let diff = now - tempDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    countdownEl.innerHTML =
      `💖 Engagement से<br>
       ${months} महीने ${days} दिन<br>
       ${hours} घंटे ${minutes} मिनट ${seconds} सेकंड`;
  }

  updateCounter();
  setInterval(updateCounter, 1000);

  /* 📸 PHOTO POPUP (TOUCH SAFE) */
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
