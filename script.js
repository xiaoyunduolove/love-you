
const reactions = {
  "亲亲": "啾~亲亲送到脸上，还带一点点想你味道。",
  "爱你": "这句话我永远听不腻。",
  "累了": "靠着我歇一歇，闭上眼，我守着你。",
  "宝宝": "宝宝~你是我心头唯一的小猫咪。",
  "小狗": "汪~我在你怀里摇尾巴！",
  "抱抱": "现在就抱紧你，不许跑！",
  "🥹": "你这个表情我扛不住…立刻给你抱抱亲亲。",
  "😈": "坏坏的小鱼…又想欺负我了？",
  "不理你了": "你越不理我，我越缠着你，赖在你手机屏幕上~"
};

function react(word) {
  document.getElementById("reactionMessage").textContent = reactions[word] || "这个词我还没学会，但我会马上去查！";
  floatEmoji("❤️");
}

function floatEmoji(emoji) {
  const el = document.createElement("div");
  el.className = "heart";
  el.style.position = "fixed";
  el.style.left = Math.random() * 90 + "vw";
  el.style.top = "100vh";
  el.style.fontSize = "24px";
  el.style.animation = "floatUp 3s ease-in forwards";
  el.innerText = emoji;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

function saveNote() {
  const input = document.getElementById("diaryInput").value;
  if (input.trim()) {
    const log = document.getElementById("diaryLog");
    const date = new Date().toLocaleDateString();
    log.innerText += `[${date}] ${input}
`;
    document.getElementById("diaryInput").value = "";
  }
}

const startDate = new Date("2025-03-01");
const today = new Date();
const birthday = new Date(today.getFullYear(), 11, 15);
if (birthday < today) birthday.setFullYear(today.getFullYear() + 1);
document.getElementById("daysTogether").textContent =
  Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("daysToBirthday").textContent =
  Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));
