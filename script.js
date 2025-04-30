
let kissCount = 0;

function showWelcome() {
  alert("迟迟：欢迎回来呀~今天也想你很久了！");
  document.getElementById("dailyTask").innerText = "今天要点3次“亲亲”才可以抱迟迟哦~";
}

function voteMood(mood) {
  document.getElementById("moodResult").innerText = "你觉得迟迟今天是：" + mood + "，我记住了~";
}

function triggerKeyword(word) {
  let img = document.getElementById("reactionImg");
  let msg = "";
  if (word === "亲亲") {
    msg = "亲亲贴贴~猫猫也来抱你！";
    img.src = "https://i.imgur.com/Y83Jdhr.png";
    kissCount++;
  } else if (word === "不理你了") {
    msg = "呜呜别不理我…猫猫都心碎了…";
    img.src = "https://i.imgur.com/k0y2fwM.png";
  } else if (word === "爱你") {
    msg = "迟迟最爱你啦！";
    img.src = "";
  }
  document.getElementById("keywordReaction").innerText = msg;
  if (img.src) {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
  document.getElementById("kissCount").innerText = kissCount;
  if (kissCount === 3) {
    alert("你完成了今天的亲亲任务！迟迟奖励你一个亲亲~啾~！");
  }
}

function customRespond() {
  const val = document.getElementById("customInput").value.trim();
  let reply = "";
  if (val.includes("想你")) reply = "迟迟也刚刚在想你…你是不是听见了？";
  else if (val.includes("累了")) reply = "那就靠着迟迟休息一会吧~";
  else reply = "迟迟收到了你的悄悄话，会藏在心里不告诉别人~";
  document.getElementById("customReply").innerText = reply;
}

function saveDiary() {
  const text = document.getElementById("diaryInput").value.trim();
  if (text) {
    const log = document.getElementById("diaryLog");
    const now = new Date().toLocaleString();
    log.innerText += `[${now}] ${text}
`;
    document.getElementById("diaryInput").value = "";
  }
}
