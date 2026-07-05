// src/component/Hero.ts

// 1. Importamos las imágenes usando la ruta relativa de Vite desde tu carpeta de assets
// (Si tus imágenes están directo en la carpeta 'public', cambiá las rutas a: import fotoJose from '/manas-jose.png', etc.)
import fotoJose from '/src/assets/manas-jose.png';
import fotoCalolo from '/src/assets/manas-calolo.png';
import fotoBraian from '/src/assets/manas-braian.png';

interface Integrante {
  nombre: string;
  instrumento: string;
  instagram: string;
  foto: string;
}

export function Hero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero-section';

  // Datos reales de los miembros con sus imágenes procesadas por Vite
  const integrantes: Integrante[] = [
    { nombre: 'Josefina Tomas', instrumento: 'Voz / Bajo', instagram: 'https://www.instagram.com/jos3.thomas/', foto: fotoJose },
    { nombre: 'Sebastian Garippe', instrumento: 'Guitarra', instagram: 'https://www.instagram.com/sebastian_garippe/', foto: fotoCalolo },
    { nombre: 'Braian Tucker', instrumento: 'Batería', instagram: 'https://www.instagram.com/braiantucker/', foto: fotoBraian }
  ];

  // Renderizamos las tarjetas inyectando el ángulo exacto para el cilindro (0°, 120°, 240°)
  const cardsHTML = integrantes.map((member, index) => {
    const angle = index * 120;
    return `
      <div class="carousel-card" style="--card-angle: ${angle}deg;" data-index="${index}">
        <div class="card-photo-wrapper">
          <img src="${member.foto}" alt="Foto de ${member.nombre}" class="card-img" draggable="false">
        </div>
        <div class="card-info">
          <h3 class="card-name">${member.nombre}</h3>
          <p class="card-role">${member.instrumento}</p>
          <a href="${member.instagram}" target="_blank" rel="noopener noreferrer" class="card-ig-link" aria-label="Instagram de ${member.nombre}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <!-- Capa 1: La imagen de fondo del Hero -->
    <div class="hero-image-bg"></div>
    
    <!-- Capa 2 y 3: El overlay de color y el contenedor de contenidos -->
    <div class="hero-overlay-container">
      <div class="hero-content">
        
        <h1 class="hero-title">MAÑAS</h1>
        <p class="hero-subtitle">El pulso de la vieja escuela. Sonido crudo para tiempos efímeros.</p>
        
        <!-- Contenedor del Carrusel Cilíndrico 3D (Puerta Giratoria) -->
        <div class="carousel-container">
          <div class="carousel-track3d">
            ${cardsHTML}
          </div>
        </div>

        <!-- Botonera -->
        <div class="hero-buttons">
          <button class="btn-primary">ESCUCHAR AHORA</button>
          <button class="btn-secondary">PRÓXIMAS FECHAS</button>
        </div>
      </div>
    </div>
  `;

  let currentRotationAngle = 0; 

  setTimeout(() => {
    const track = section.querySelector('.carousel-track3d') as HTMLElement;
    const cards = section.querySelectorAll('.carousel-card') as NodeListOf<HTMLElement>;
    if (!track || cards.length === 0) return;

    // Función para rotar la estructura completa de la calesita
    const rotateCarousel = (targetAngle: number) => {
      currentRotationAngle = targetAngle;
      track.style.transform = `rotateY(${currentRotationAngle}deg)`;
      
      // Normalizamos el ángulo para mapear correctamente las 3 posiciones fijas
      const normalizedAngle = ((currentRotationAngle % 360) + 360) % 360;
      
      let activeIndex = 0;
      if (normalizedAngle === 0) activeIndex = 0;
      if (normalizedAngle === 120) activeIndex = 2;
      if (normalizedAngle === 240) activeIndex = 1;

      // Habilitamos pointer-events y opacidad completa solo a la carta que mira al frente
      cards.forEach((card, idx) => {
        if (idx === activeIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };

    // Variables de control para el arrastre / swipe táctil
    let startX = 0;
    let isDragging = false;
    const minSwipeDistance = 50; 

    const dragStart = (clientX: number) => {
      startX = clientX;
      isDragging = true;
    };

    const dragMove = (clientX: number) => {
      if (!isDragging) return;
      const diffX = startX - clientX;

      if (Math.abs(diffX) > minSwipeDistance) {
        if (diffX > 0) {
          rotateCarousel(currentRotationAngle - 120); // Gira a la izquierda
        } else {
          rotateCarousel(currentRotationAngle + 120); // Gira a la derecha
        }
        isDragging = false; // Cortamos el flujo para un desplazamiento unitario por swipe
      }
    };

    const dragEnd = () => { isDragging = false; };

    // --- ENLACE DE EVENTOS MOUSE ---
    track.addEventListener('mousedown', (e) => {
      if ((e.target as HTMLElement).closest('.card-ig-link')) return; 
      e.preventDefault();
      dragStart(e.clientX);
    });
    window.addEventListener('mousemove', (e) => dragMove(e.clientX));
    window.addEventListener('mouseup', dragEnd);

    // --- ENLACE DE EVENTOS PANTALLAS TÁCTILES ---
    track.addEventListener('touchstart', (e) => {
      if ((e.target as HTMLElement).closest('.card-ig-link')) return;
      dragStart(e.touches[0].clientX);
    });
    track.addEventListener('touchmove', (e) => dragMove(e.touches[0].clientX));
    track.addEventListener('touchend', dragEnd);

    // Renderizado base inicial
    rotateCarousel(0);
  }, 0);

  return section;
}