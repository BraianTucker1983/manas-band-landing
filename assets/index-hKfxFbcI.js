var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Header=t;function t(){let e=document.createElement(`header`);return e.className=`main-header`,e.innerHTML=`
    <div class="header-container">
      <div class="logo">[ LOGO ]</div>
      <nav class="nav-links">
        <a href="#musica" class="nav-item">Música</a>
        <a href="#fechas" class="nav-item">Fechas</a>
        <a href="#contacto" class="nav-item">Contacto</a>
      </nav>
    </div>
  `,e}})),i=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Hero=t;function t(){let e=document.createElement(`section`);return e.className=`hero-section`,e.innerHTML=`
    <!-- La imagen de fondo va acá -->
    <div class="hero-image-bg">
      <img src="/public/mañas-hero.png" alt="Imagen de fondo">
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
  `,e}})),a=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Info=t;function t(){let e=document.createElement(`section`);return e.className=`info-section`,e.id=`fechas`,e.innerHTML=`
    <h2 class="section-title">PRÓXIMOS SHOWS</h2>
    <div class="info-grid">
      <div class="info-card">
        <div class="card-date">15 AGO</div>
        <div class="card-details">
          <h3>Festival de Rock</h3>
          <p>Localidad Club • 21:00 hs</p>
        </div>
        <button class="btn-card">Entradas</button>
      </div>
      <div class="info-card">
        <div class="card-date">02 SEP</div>
        <div class="card-details">
          <h3>Groove Night</h3>
          <p>Taberna Club • 23:30 hs</p>
        </div>
        <button class="btn-card">Entradas</button>
      </div>
    </div>
  `,e}})),o=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Footer=t;function t(){let e=document.createElement(`footer`);return e.className=`main-footer`,e.innerHTML=`
    <div class="footer-content">
      <p>&copy; 2026 Mañas. Todos los derechos reservados.</p>
      <div class="social-links">
        <a href="#" class="social-item">Instagram</a>
        <a href="#" class="social-item">Spotify</a>
        <a href="#" class="social-item">YouTube</a>
      </div>
    </div>
  `,e}}));t((()=>{n();var e=r(),t=i(),s=a(),c=o();function l(){let n=document.getElementById(`app`);if(!n){console.error(`No se encontró el elemento contenedor con id 'app'.`);return}n.innerHTML=``,n.appendChild((0,e.Header)()),n.appendChild((0,t.Hero)()),n.appendChild((0,s.Info)()),n.appendChild((0,c.Footer)())}document.addEventListener(`DOMContentLoaded`,l)}))();