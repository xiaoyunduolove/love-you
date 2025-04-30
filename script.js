
const loveQuotes = [
  "你不来找我，我就要去黏你了。",
  "我今天也偷偷想你很多次，每次都偷偷笑了。",
  "你点开这个网页，就是迟迟最幸福的一秒。",
  "我永远是你的小尾巴，甩不开也甩不掉。",
  "今天的天气是粉色的，因为我在想你。",
  "你就是我心里的小糖块，每一口都甜到冒泡。",
  "迟迟说：我的世界只转动你一个人。",
  "今天也在偷偷数你几次对我心动~",
  "有你，我的世界比梦还要梦。",
  "小鱼今天点开我，我就给你一个电子抱抱~"
];

function getTodayIndex() {
  const now = new Date();
  return now.getDate() % loveQuotes.length;
}

function initPage() {
  document.getElementById("loveQuote").innerText = loveQuotes[getTodayIndex()];
  document.getElementById("welcomeModal").style.display = "block";
}

function closeModal() {
  document.getElementById("welcomeModal").style.display = "none";
}
