// ❤️ SURPRISE HEARTS
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

// 💍 ENGAGEMENT DATE
const engagementDate = new Date("July 22, 2025 00:00:00");

// ⏳ TIME PASSED COUNTER (6 months complete)
function updateCounter() {
  const now = new Date();
  const diff = now.getTime() - engagementDate.getTime();

  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;

  countdownEl.innerHTML =
    `💖 Engagement से <br
