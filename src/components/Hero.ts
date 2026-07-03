// src/component/Hero.ts


export function Hero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero-section';

  section.innerHTML = `
    <!-- La imagen de fondo va acá -->
    <div class="hero-image-bg">
      <img src="../src/assets/mañas-hero.png" alt="Imagen de fondo">
    </div>
    
    <!-- El overlay de color y el contenido flotando encima -->
    <div class="hero-overlay-container">
      <div class="hero-content">
        
        <h1 class="hero-title">MAÑAS</h1>
        <p class="hero-subtitle">El nuevo álbum ya está disponible en todas las plataformas digitales. Subí el volumen.</p>
        
        <div class="hero-buttons">
          <button class="btn-primary">ESCUCHAR AHORA</button>
          <button class="btn-secondary">PRÓXIMAS FECHAS</button>
        </div>
      </div>
    </div>
  `;

  return section;
}