
const startDate = new Date("2025-03-01");
const birthday = new Date(new Date().getFullYear(), 11, 15);
const now = new Date();
if (birthday < now) birthday.setFullYear(birthday.getFullYear() + 1);

const daysTogether = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
const daysToBirthday = Math.ceil((birthday - now) / (1000 * 60 * 60 * 24));
document.getElementById("daysTogether").textContent = daysTogether;
document.getElementById("daysToBirthday").textContent = daysToBirthday;

const reactions = {
  "撒娇": "哼~不理你了…除非你亲我十下！",
  "委屈": "那你就靠在我怀里，我什么都不问只摸摸你头。",
  "想你": "我也在偷偷数你说‘想你’的次数，一共999次了。",
  "不理你": "你不理我…我会生气哦…我会发小脾气的哦…我会——等你回来。"
};

function react(type) {
  document.getElementById("reactionMessage").textContent = reactions[type];
  createHeart();
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.getElementById("floating-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
