// gift.js — handles loading name/message from URL + confetti + typewriter
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = decodeURIComponent(params.get("name") || "Friend");
  const msg = decodeURIComponent(params.get("msg") || "Wishing you a fantastic year ahead!");

  document.getElementById("name").textContent = name;

  // Typewriter effect for the message
  let i = 0;
  function typeWriter() {
    if (i < msg.length) {
      document.getElementById("msg").textContent += msg.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

  // 🎊 Confetti animation after short delay
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 1000);
});
