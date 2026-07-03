// Importamos los componentes
import './style.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Info } from './components/Info';
import { Footer } from './components/Footer';

// Función principal que renderiza la aplicación
function main() {
    const app = document.getElementById('app');

    if (!app) {
        console.error("No se encontró el elemento contenedor con id 'app'.");
        return;
    }

    // Limpiamos el contenedor por si acaso
    app.innerHTML = '';

    // Inyectamos los componentes en orden secuencial
    app.appendChild(Header());
    app.appendChild(Hero());
    app.appendChild(Info());
    app.appendChild(Footer());
}

// Escuchamos a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', main);