const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Carpetas de origen y destino
const carpetas = [
  './public',
  './src/assets'
];

async function procesarImagenes() {
  for (const carpeta of carpetas) {
    if (!fs.existsSync(carpeta)) continue;
    
    const archivos = fs.readdirSync(carpeta);
    
    for (const archivo of archivos) {
      const rutaCompleta = path.join(carpeta, archivo);
      const ext = path.extname(archivo).toLowerCase();
      
      // Procesamos solo .png y .jpg / .jpeg
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const nombreSinExt = path.basename(archivo, ext);
        const nuevaRuta = path.join(carpeta, `${nombreSinExt}.webp`);
        
        try {
          let procesador = sharp(rutaCompleta);
          
          // Filtro B&N para el fondo del Hero
          if (archivo.includes('manas-hero') || archivo.includes('manias-hero')) {
            procesador = procesador
              .grayscale()
              .linear(1.2, -(0.1 * 1.2));
            console.log(`Aplicando filtro B&N de fábrica a: ${archivo}`);
          }
          
          // 1. Guardamos el nuevo archivo WebP
          await procesador.toFile(nuevaRuta);
          console.log(`✓ Convertido con éxito: ${nuevaRuta}`);
          
          // 2. Eliminamos la imagen original de forma segura (.png, .jpg, .jpeg)
          fs.unlinkSync(rutaCompleta);
          console.log(`  Eliminado original: ${archivo}`);
          
        } catch (error) {
          console.error(`❌ Error al procesar ${archivo}:`, error);
        }
      }
    }
  }
}

procesarImagenes();