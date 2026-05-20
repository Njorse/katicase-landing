/**
 * KATI CASE - Landing Page Brain
 * Completo y Funcional para Revisión Académica
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CONFIGURACIÓN INICIAL DE WHATSAPP ---
    // IMPORTANTE: Cambia este número por tu número real de WhatsApp con código de país.
    // Ejemplo para Perú: "51987654321" (sin +)
    const myNumber = "51900000000"; 

    // --- 2. EFECTO DE NAVBAR AL HACER SCROLL ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. MENÚ MÓVIL (Hamburguesa) ---
    // (Implementación básica para responsive)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('nav-active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Cerrar el menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
    }

    // --- 4. REDIRECCIÓN INTELIGENTE DE PRODUCTOS A WHATSAPP ---
    // Esta es la parte "bacán" que automatiza la venta.
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Buscamos el nombre del producto en la misma tarjeta
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = productCard.querySelector('.price-tag').innerText;
            
            // Creamos un mensaje personalizado
            const message = `Hola Kati Case! 💖 Quiero pedir el producto: *${productName}* (${productPrice}). ¿Tienen stock disponible?`;
            
            // Codificar el mensaje para URL
            const whatsappUrl = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
            
            // Redirigir en una nueva pestaña
            window.open(whatsappUrl, '_blank');
        });
    });

    // --- 5. ANIMACIONES DE REVELACIÓN (Scroll Reveal) ---
    // Esto hace que los productos aparezcan suavemente al bajar.
    const observerOptions = {
        threshold: 0.1
    };

    // PRIMER OBSERVADOR (Para el Hero y Ventajas)
    const observerInline = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.filter = "blur(0)";
            } else {
                // ¡MAGIA AÑADIDA! Regresamos los elementos a su estado oculto al subir
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateY(40px)";
                entry.target.style.filter = "blur(10px)";
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que queremos animar
    const elementsToAnimate = [
        ...document.querySelectorAll('.advantage-item'),
        ...document.querySelectorAll('.product-card'),
        ...document.querySelectorAll('.testimonial-item')
    ];
    
    const heroText = document.querySelector('.hero-text');
    const heroVisual = document.querySelector('.hero-visual');
    if(heroText) elementsToAnimate.push(heroText);
    if(heroVisual) elementsToAnimate.push(heroVisual);

    // Aplicamos los estilos iniciales y el observador
    elementsToAnimate.forEach((p) => {
        p.style.opacity = "0";
        p.style.transform = "translateY(40px)";
        // Removí el 'delay' matemático para que la animación infinita sea fluida y no se atasque al subir rápido
        p.style.transition = `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`;
        p.style.filter = "blur(10px)";
        observerInline.observe(p);
    });

    // Mensaje de éxito en consola (para que el profe vea que corre el JS)
    console.log("-----------------------------------------");
    console.log(" Kati Case Landing Page - Engine Started ");
    console.log("-----------------------------------------");
});


// ES PARA CAMBIAR PRODUCTOS Y AUMENTAR

const productos = [
    { id: 1, nombre: "Titanium Pink", precio: 39, original: 60, img: "img/2.jpg" },
    { id: 2, nombre: "Dark Carbon", precio: 45, original: 70, img: "img/3.jpg" },
    { id: 3, nombre: "Ocean Glass", precio: 35, original: 65, img: "img/4.jpg" },
    { id: 4, nombre: "Luxury Gold", precio: 49, original: 80, img: "img/2.jpg" },
    { id: 5, nombre: "Matte Black", precio: 29, original: 55, img: "img/3.jpg" },
    { id: 6, nombre: "Cloud Blue", precio: 35, original: 60, img: "img/4.jpg" },
    { id: 7, nombre: "Ruby Edition", precio: 42, original: 75, img: "img/2.jpg" },
    { id: 8, nombre: "Urban Camo", precio: 38, original: 65, img: "img/3.jpg" },
    { id: 9, nombre: "Crystal Clear", precio: 25, original: 50, img: "img/4.jpg" },
    { id: 10, nombre: "Ghost White", precio: 34, original: 60, img: "img/2.jpg" },
    { id: 11, nombre: "Cyber Purple", precio: 45, original: 70, img: "img/3.jpg" },
    { id: 12, nombre: "Emerald Pro", precio: 48, original: 75, img: "img/4.jpg" }
];

const grid = document.getElementById('grid-productos');

// Verificamos que el contenedor exista para evitar errores
if(grid) {
    // Esta función dibuja los 12 productos sin repetir código
    productos.forEach(p => {
        grid.innerHTML += `
            <div class="sale-card">
                <div class="sale-tag">TOP ${p.id}</div>
                <div class="sale-img"><img src="${p.img}" alt="${p.nombre}"></div>
                <div class="sale-info">
                    <h3>${p.nombre}</h3>
                    <div class="price-box">
                        <span class="old-price">S/ ${p.original}</span>
                        <span class="new-price">S/ ${p.precio}</span>
                    </div>
                    <a href="https://wa.me/51935030796?text=Hola!%20Quiero%20el%20${p.nombre}%20(TOP%20${p.id})" 
                       target="_blank" class="btn-primary-sm">RECLAMAR</a>
                </div>
            </div>
        `;
    });
}


// VIDEOS DE TIK TOK
// Lista de tus videos (Asegúrate de subirlos a tu hosting o carpeta)
const misVideos = [
    "1.mp4", "2.mp4", "3.mp4", 
    "4.mp4", "5.mp4", "6.mp4",
    "7.mp4", "8.mp4", "9.mp4"
];

const videoWall = document.getElementById('video-wall');

if(videoWall) {
    misVideos.forEach(vid => {
        videoWall.innerHTML += `
            <div class="video-card-loop">
                <video autoplay muted loop playsinline>
                    <source src="videos/${vid}" type="video/mp4">
                    Tu navegador no soporta video.
                </video>
                <div class="video-glow"></div>
            </div>
        `;
    });
}


// prueva scroll (SEGUNDO OBSERVADOR - CORREGIDO PARA QUE SEA CONSTANTE)
const observerClass = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // ¡LA OTRA PARTE DE LA MAGIA! Quita la clase .visible cuando sales de la pantalla
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

// Le damos 500 milisegundos para que las tarjetas de JS terminen de pintarse en el HTML antes de observarlas.
setTimeout(() => {
    document.querySelectorAll('.sale-card, .video-card-loop').forEach(el => observerClass.observe(el));
}, 500);

// --- FUNCIONALIDAD DE LA MINI GALERÍA DEL HERO ---
function changeHeroImage(element) {
    // 1. Cambiamos la imagen grande por la que se hizo clic
    const mainImg = document.getElementById('main-hero-img');
    mainImg.style.opacity = 0; // Efecto de desvanecimiento
    
    setTimeout(() => {
        mainImg.src = element.src;
        mainImg.style.opacity = 1;
    }, 200);

    // 2. Quitamos la clase 'active' de todas las miniaturas
    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(thumb => thumb.classList.remove('active'));

    // 3. Le ponemos la clase 'active' a la miniatura que tocamos
    element.classList.add('active');
}
// ==========================================================================
// FUNCIONES PARA EL CHAT DE VOZ INTEGRADO
// ==========================================================================
let historialChat = [];
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");

function toggleChatModal() {
    const modal = document.getElementById('chat-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    if (modal.style.display === 'block' && historialChat.length === 0) {
        // Inicializar saludo si es la primera vez
        const saludoInicial = "¡Hola! 💎 Bienvenid@ a Kati Case Elite. ¿Qué modelo de celular tienes hoy para buscarte la case de lujo perfecta? ✨";
        historialChat.push({ "role": "assistant", "content": saludoInicial });
        addMessageToUI(saludoInicial, false);
    }
}

function addMessageToUI(text, isUser) {
    const div = document.createElement("div");
    div.className = `bubble ${isUser ? 'bubble-user' : 'bubble-ai'}`;
    
    if (isUser) {
        div.innerHTML = `👤 ${text}`;
    } else {
        div.innerHTML = `
            <img src="chat voz/kati_confused.gif" style="width: 35px; height: 35px; border-radius: 50%; margin-right: 12px; vertical-align: middle; border: 1px solid #f21d41; box-shadow: 0 0 10px #f21d41;">
            ${text}
        `;
    }
    
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessageToUI(text, true);
    userInput.value = "";
    
    historialChat.push({ "role": "user", "content": text });

    const typingDiv = document.createElement("div");
    typingDiv.className = "bubble bubble-ai";
    typingDiv.id = "typing-indicator";
    typingDiv.innerHTML = `
        <img src="chat voz/kati_confused.gif" style="width: 35px; height: 35px; border-radius: 50%; margin-right: 12px; vertical-align: middle; border: 1px solid #f21d41;">
        <span style="font-family: monospace; letter-spacing: 1px;">Kati está pensando...</span>
    `;
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    try {
        const response = await fetch("http://127.0.0.1:8080/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ historial: historialChat.slice(-6) })
        });

        const data = await response.json();
        
        const indicator = document.getElementById("typing-indicator");
        if (indicator) indicator.remove();
        
        addMessageToUI(data.respuesta, false);
        historialChat.push({ "role": "assistant", "content": data.respuesta });

        hablarTexto(data.respuesta);

    } catch (error) {
        const indicator = document.getElementById("typing-indicator");
        if (indicator) indicator.remove();
        addMessageToUI("Uy, mi vida. Hubo un error de conexión. ¿Puedes intentar de nuevo? 💔", false);
        console.error(error);
    }
}

function handleKeyPress(e) {
    if (e.key === "Enter") sendMessage();
}

let recognition;
const micBtn = document.getElementById("mic-btn");

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'es-PE';

    recognition.onstart = function() {
        micBtn.classList.add("mic-active");
        userInput.placeholder = "Escuchando... 🎧";
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
        sendMessage();
    };

    recognition.onerror = function(event) {
        micBtn.classList.remove("mic-active");
        userInput.placeholder = "¿Qué modelo buscas hoy? ✨";
    };

    recognition.onend = function() {
        micBtn.classList.remove("mic-active");
        userInput.placeholder = "¿Qué modelo buscas hoy? ✨";
    };
} else {
    if (micBtn) micBtn.style.display = "none";
}

function toggleMic() {
    if (recognition) {
        try {
            recognition.start();
        } catch (e) {
            console.log("El reconocimiento ya estaba activo");
        }
    } else {
        alert("Tu navegador no soporta el micrófono. Usa Google Chrome.");
    }
}

function hablarTexto(texto) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const textoLimpio = texto.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

        const locucion = new SpeechSynthesisUtterance(textoLimpio);
        locucion.lang = 'es-MX';
        locucion.rate = 1.0;
        locucion.pitch = 1.2;
        
        window.speechSynthesis.speak(locucion);
    }
}