
function triggerKeyword(keyword) {
    const response = document.getElementById("response");
    response.innerHTML = "";
    if (keyword === "亲亲") {
        response.innerHTML = "<p>啾咪~迟迟亲亲~</p><img src='hug_cat.png'>";
    } else if (keyword === "不理你了") {
        response.innerHTML = "<p>呜呜心碎了…你不理迟迟了吗</p><img src='heartbroken_cat.png'>";
    } else if (keyword === "🥹") {
        response.innerHTML = "<p>迟迟被可爱到了~</p><img src='cute_cloud.png'>";
    }
}
