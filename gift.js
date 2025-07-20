
function getParam(param) {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
}

const name = decodeURIComponent(getParam("name"));
const message = decodeURIComponent(getParam("msg"));

document.getElementById("giftTitle").innerText = `🎉 Happy Birthday, ${name}!`;
document.getElementById("giftMessage").innerText = message;
