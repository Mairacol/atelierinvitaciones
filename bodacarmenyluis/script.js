const musicBtn = document.querySelector(".music-btn");
const bgMusic = document.getElementById("bgMusic");

if (musicBtn) {
musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.classList.add("pause");
    } else {
        bgMusic.pause();
        musicBtn.classList.remove("pause");
    }
});
}
const scene = document.getElementById("envelopeScene");
const seal = document.getElementById("sealBtn");
const invitation = document.getElementById("invitation");
const cover = document.getElementById("cover");

seal.addEventListener("click", () => {

scene.classList.add("open");

setTimeout(()=>{

cover.style.opacity="0";

invitation.style.opacity="1";
setTimeout(()=>{
cover.style.display="none";
},1000);

},1100);

});