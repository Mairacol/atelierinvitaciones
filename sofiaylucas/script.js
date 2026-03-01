document.addEventListener('DOMContentLoaded', () => {

    // 1. ELIMINAR LOADER
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 1000);
        }, 2200);
    });

    // 2. CUSTOM CURSOR
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });

    // 3. REVEAL SCROLL
    // En tu sección 3. REVEAL SCROLL, cambia solo el threshold:
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 }); // 0.2 hace que espere un poquito más antes de aparecer

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
function sendRSVP() {
    const name = document.getElementById('guest-name').value;
    const phone = "5491133166984"; // Tu número aquí

    if (name.trim() === "") {
        alert("Por favor, ingresa tu nombre completo.");
        return;
    }

    // Usamos texto plano y negritas, que WhatsApp lee perfecto en cualquier celular
    const message = encodeURIComponent(
        `CONFIRMACIÓN DE ASISTENCIA\n` +
        `---------------------------\n\n` +
        `Hola! Confirmo mi lugar para la boda de:\n` +
        `*SOFÍA & LUCAS*\n\n` +
        `*Invitado:* ${name}\n` +
        `*Fecha:* 19.12.2026\n\n` +
        `¡Ahí estaremos!`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}