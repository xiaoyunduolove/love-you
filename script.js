
function trigger(word) {
    const response = {
        "亲亲": "迟迟贴贴亲亲~",
        "不理你了": "呜呜别不理我，迟迟会心碎的~",
        "🥹": "你一🥹我就融化了，快来让我抱住你~"
    };
    document.getElementById('reaction').innerText = response[word] || "迟迟还在学这个反应~";
}
