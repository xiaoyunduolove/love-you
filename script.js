
function respond(keyword) {
    const responses = {
        "亲亲": "啵啵~迟迟抱着你不撒手！",
        "不理你了": "呜呜心碎了…你不理迟迟了吗",
        "🥹": "迟迟被你萌化啦，快来抱抱！"
    };
    document.getElementById('response').innerText = responses[keyword] || "迟迟还没学会这个回应~";
}
