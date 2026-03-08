document.addEventListener("DOMContentLoaded", () => {

    const musicBtn = document.querySelector(".music-btn");
    const bgMusic = document.getElementById("bgMusic");
    const scene = document.getElementById("envelopeScene");
    const seal = document.getElementById("sealBtn");
    const invitation = document.getElementById("invitation");
    const cover = document.getElementById("cover");

    // 1. Función para controlar el play/pause y la clase visual
    const toggleMusic = () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.classList.add("pause");
        } else {
            bgMusic.pause();
            musicBtn.classList.remove("pause");
        }
    };

    // 2. Evento del botón de música (el que ya tenías)
    if (musicBtn && bgMusic) {
        musicBtn.addEventListener("click", toggleMusic);
    }

    // 3. Evento del Sello (Abrir invitación + Iniciar Música)
    if (seal && scene && invitation && cover) {
        seal.addEventListener("click", () => {
            
            // --- NUEVO: Inicia la música al abrir el sobre ---
            if (bgMusic.paused) {
                bgMusic.play()
                    .then(() => musicBtn.classList.add("pause"))
                    .catch(error => console.log("El navegador bloqueó el audio inicial:", error));
            }

            scene.classList.add("open");

            setTimeout(() => {
                cover.style.opacity = "0";
                invitation.style.opacity = "1";

                setTimeout(() => {
                    cover.style.display = "none";
                }, 1000);
            }, 1100);
        });
    }
});