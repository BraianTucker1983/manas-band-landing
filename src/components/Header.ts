export function Header(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'main-header';

  header.innerHTML = `
    <div class="header-container">
      <div class="logo">[ LOGO ]</div>
      <nav class="nav-links">
        <a href="#musica" class="nav-item">Música</a>
        <a href="#fechas" class="nav-item">Fechas</a>        
      </nav>
    </div>
  `;

  return header;
}