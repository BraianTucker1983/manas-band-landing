export function Footer(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'main-footer';

  footer.innerHTML = `
    <div class="footer-content">
      <p>&copy; 2026 Mañas. Todos los derechos reservados.</p>
      <div class="social-links">
        <a href="#" class="social-item">Instagram</a>
        <a href="#" class="social-item">Spotify</a>
        <a href="#" class="social-item">YouTube</a>
      </div>
    </div>
  `;

  return footer;
}