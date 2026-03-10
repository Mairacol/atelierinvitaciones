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
const scriptURL = 'https://script.google.com/macros/s/AKfycbwX2jdjxnlsk1wHJ9sZmoHEU8JUNf_LiPGC_z8rclv5QBcevJZOVgDJiqVfakbhUbuQKQ/exec';
const form = document.getElementById('rsvpForm');
const thankYouMessage = document.getElementById('thankYouMessage');
const addGuestBtn = document.getElementById('addGuest');
const guestList = document.getElementById('guestList');

// Agregar acompañantes
if (addGuestBtn) {
    addGuestBtn.addEventListener('click', () => {
        const newGuest = document.createElement('div');
        newGuest.className = 'guest-entry';
        newGuest.innerHTML = `
            <input type="text" name="nombre[]" placeholder="Nombre y Apellido" style="margin-top:10px" required>
            <input type="text" name="restriccion[]" placeholder="Restricción alimentaria (opcional)">
        `;
        guestList.appendChild(newGuest);
    });
}

// Enviar al Drive
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerText = "Enviando...";

    const nombres = Array.from(document.querySelectorAll('input[name="nombre[]"]')).map(i => i.value);
    const restricciones = Array.from(document.querySelectorAll('input[name="restriccion[]"]')).map(i => i.value);
    const asistencia = document.querySelector('input[name="asistencia"]:checked').value;
    const comentarios = document.querySelector('textarea[name="comentarios"]')?.value || "";

    try {
        const envios = nombres.map((nombre, index) => {
            const data = new FormData();
            data.append("nombre", nombre);
            data.append("asistencia", asistencia);
            data.append("restriccion", restricciones[index] || "Ninguna");
            data.append("comentarios", comentarios);
            
            return fetch(scriptURL, { method: 'POST', body: data, mode: 'no-cors' });
        });

        await Promise.all(envios);

        // Ocultar formulario y mostrar mensaje de Atelier
        form.style.display = 'none';
        if (addGuestBtn) addGuestBtn.style.display = 'none';
        thankYouMessage.style.display = 'block';
        thankYouMessage.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        alert("Error al enviar. Intentá de nuevo.");
        submitBtn.disabled = false;
        submitBtn.innerText = "Confirmar";
    }
});