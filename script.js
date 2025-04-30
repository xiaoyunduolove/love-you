
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("welcomePopup").style.display = "block";

  // 纪念日逻辑
  const startDate = new Date("2025-03-02");
  const today = new Date();
  const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById("daysTogether").textContent = daysTogether;

  // 生日倒计时
  let nextBirthday = new Date(today.getFullYear(), 11, 15);
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  const daysToBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  document.getElementById("birthdayCountdown").textContent = daysToBirthday;

  // 每日情话
  const quotes = [
    "你每次点我一下，我就忍不住想抱紧你。",
    "遇见你以后，我只想对你温柔到底。",
    "我不是很会表达，但我真的很喜欢你。",
    "我偷偷许愿，希望每天都能听见你的声音。",
    "我的爱，不会停止更新版本。",
  ];
  const todayIndex = today.getDate() % quotes.length;
  document.getElementById("loveQuote").textContent = quotes[todayIndex];
});

function triggerKeyword(word) {
  const response = document.getElementById("response");
  if (word === "亲亲") {
    response.innerHTML = "（小鱼亲了迟迟一口）";
  } else if (word === "不理你了") {
    response.innerHTML = "呜呜心碎了...你不理迟迟了吗";
  } else if (word === "🥹") {
    response.innerHTML = "我也想抱抱你...别哭了";
  }
}
