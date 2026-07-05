export function Info(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'info-section';
  section.id = 'fechas';

  section.innerHTML = `
    <h2 class="section-title">PRÓXIMOS SHOWS</h2>
    <div class="info-grid">
      <div class="info-card">
        <div class="card-date">25 JUL</div>
        <div class="card-details">
          <h3>Tomacco</h3>
          <p>Pueblo San Jose • 23:50 hs</p>
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
  `;

  return section;
}