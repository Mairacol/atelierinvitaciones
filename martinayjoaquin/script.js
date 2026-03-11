function saveToCalendar() {
    const event = {
        title: "Boda Martina & Joaquín",
        location: "Four Seasons Hotel, Posadas 1086, Buenos Aires",
        description: "¡Los esperamos para celebrar nuestra unión!",
        start: "20260919T230000Z", // 20:00hs Arg es 23:00hs UTC
        end: "20260920T060000Z"
    };

    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleUrl, '_blank');
}

// Opcional: Loader del monograma
window.addEventListener('load', () => {
    const loader = document.querySelector('.monogram-loader');
    if(loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1500);
    }
});
// Bloquear scroll al cargar
document.body.classList.add('locked');

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    
    // Inicia la animación
    envelope.classList.add('open');
    
    // Libera el scroll de la invitación
    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 800);
}

// La función de Google Calendar que ya teníamos
function saveToCalendar() {
    const event = {
        title: "Boda Martina & Joaquín",
        location: "Four Seasons Hotel, Buenos Aires",
        description: "¡Los esperamos!",
        start: "20260919T230000Z",
        end: "20260920T060000Z"
    };
    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleUrl, '_blank');
}
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open');
    
    // Habilitar scroll después de que el sobre sube
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 1000);
}

// Bloquear scroll al inicio
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
});

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open');
    
    // Quitamos el bloqueo de scroll del body
    document.body.style.overflow = 'auto';
    
    // Opcional: Eliminar el sobre del DOM después de la animación para limpiar
    setTimeout(() => {
        envelope.style.display = 'none';
    }, 1200); 
}
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const mainWrapper = document.querySelector('.main-wrapper');

    // 1. Abrimos el sobre
    envelope.classList.add('open');

    // 2. Después de que el sobre empiece a subir, mostramos las cards
    setTimeout(() => {
        mainWrapper.classList.add('visible');
        document.body.style.overflow = 'auto'; // Habilitamos scroll
    }, 600); 

    // 3. Limpiamos el DOM para que el sobre no estorbe
    setTimeout(() => {
        envelope.style.display = 'none';
    }, 1500);
}