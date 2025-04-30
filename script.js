
function welcomePopup() {
  alert("迟迟：你来啦~ 今天也在等你点我！");
}

function react(word) {
  const text = {
    "亲亲": "贴贴猫咪冲你抱过来！",
    "不理你了": "呜呜心碎了…你不理迟迟了吗",
    "🥹": "你一🥹我就招架不住，贴贴补回来~"
  };
  const img = {
    "亲亲": "hug_cat.jpeg",
    "不理你了": "sleep_cat.jpeg",
    "🥹": "blush_cat.jpeg"
  };
  document.getElementById("reactionText").textContent = text[word] || "";
  const image = document.getElementById("reactionImg");
  if (img[word]) {
    image.src = img[word];
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}
