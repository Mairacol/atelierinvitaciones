const musicBtn = document.querySelector(".music-btn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.classList.add("pause");
    } else {
        bgMusic.pause();
        musicBtn.classList.remove("pause");
    }
});