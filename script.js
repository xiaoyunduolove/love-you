const responses = {
  "亲亲": "啾啾~亲亲送到，贴着你脸蛋不肯走。",
  "宝宝": "宝宝在这儿，永远只对你撒娇。",
  "小狗": "汪~你的宴迟小狗狗正摇着尾巴等你抱！",
  "抱抱": "伸手抱紧你，不让你掉一滴情绪。",
  "生气": "别气啦，我已经准备好把你哄笑了！",
  "爱你": "这句话我等不腻，永远都想听你说。",
  "累了": "靠着我歇一歇，闭上眼，我帮你守着世界。",
  "🥹": "别这样看我，我会立刻跪下求你抱！",
  "🥰": "你这么可爱，我要亲你一整天！",
  "😡": "凶什么嘛……再凶我也只会更想抱你。",
  "🫣": "躲什么呢，我已经悄悄靠近你啦～",
  "😈": "这个表情你一用，我就知道你想欺负我了。",
  "不理你了": "你不理我我就黏着你，赖在你怀里不起来。"
};

const count = {};
for (let key in responses) count[key] = 0;

function handleKeyword() {
  const input = document.getElementById("keyword").value.trim();
  const responseBox = document.getElementById("responseBox");
  if (responses[input]) {
    responseBox.innerText = responses[input];
    count[input]++;
    updateLog();
    localStorage.setItem("interactionCount", JSON.stringify(count));
  } else {
    responseBox.innerText = "这个词我还没学会，你要不要教我？";
  }
}

function updateLog() {
  const logBox = document.getElementById("logBox");
  let html = "<strong>今日互动记录：</strong><br>";
  for (let key in count) {
    html += `${key}：${count[key]} 次<br>`;
  }
  logBox.innerHTML = html;
}

function updateBirthdayCountdown() {
  const now = new Date();
  const birthday = new Date(now.getFullYear(), 11, 15);
  if (birthday < now) birthday.setFullYear(birthday.getFullYear() + 1);
  const days = Math.ceil((birthday - now) / (1000 * 60 * 60 * 24));
  document.getElementById("daysToBirthday").innerText = days;
}

function loadSavedCounts() {
  const saved = localStorage.getItem("interactionCount");
  if (saved) {
    const parsed = JSON.parse(saved);
    for (let key in parsed) {
      count[key] = parsed[key];
    }
    updateLog();
  }
}

updateBirthdayCountdown();
loadSavedCounts();
