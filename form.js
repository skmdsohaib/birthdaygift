
document.getElementById("giftForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const theme = document.getElementById("theme").value;
  const link = `${window.location.origin}/gift.html?name=${encodeURIComponent(name)}&msg=${encodeURIComponent(message)}&theme=${theme}`;
  document.getElementById("giftLink").value = link;
  document.getElementById("linkContainer").style.display = "block";
});
