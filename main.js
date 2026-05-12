(function () {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = '/wwwroot/images/logo.png'; // Ruta de tu logo
    document.head.appendChild(favicon);
})();
class GncHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-gnc">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center text-decoration-none" href="/" style="gap: 12px;">
                    <img src="/wwwroot/images/logo.png" alt="Logo GNC" height="50" style="border-radius: 4px; object-fit: contain;">
                    <span class="fuente-gnc fs-3 fw-bold mb-0 lh-1">
                        <span class="texto-azul">GNC</span> <span class="texto-naranja">RENTAL SPA</span>
                    </span>
                </a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-3">
                        <li class="nav-item"><a class="nav-link gnc-link" href="/#inicio">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link gnc-link" href="/#flota">Flota</a></li>
                        <li class="nav-item"><a class="nav-link gnc-link" href="/#quienes-somos">Quiénes Somos</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}

// =========================================
// 2. COMPONENTE DE PIE DE PÁGINA (FOOTER)
// =========================================
class GncFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="quienes-somos" class="container-fluid py-5 seccion-ancla" style="background-color: #E8E4D5; border-top: 5px solid #00AEEF; margin-bottom: -15px; position: relative; overflow: hidden;">
            <div class="container position-relative" style="z-index: 1; padding-top: 40px; padding-bottom: 40px;">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5">
                        <h6 class="texto-naranja titulo-columna">QUIÉNES SOMOS</h6>
                        <div class="d-flex align-items-center mb-4" style="gap: 15px;">
                            <img src="/wwwroot/images/logo.png" alt="Logo GNC" style="height: 65px; border-radius: 4px; object-fit: contain;">
                            <div>
                                <h2 class="display-6 fuente-gnc texto-oscuro mb-0 lh-1">GNC RENTAL</h2>
                                <h2 class="display-6 fuente-gnc texto-azul mb-0 lh-1">SPA</h2>
                            </div>
                        </div>
                        <div class="d-flex gap-3 mt-4">
                            <a href="https://www.facebook.com/share/1Gb1TsDZSL/" target="_blank" class="caja-icono text-decoration-none shadow-sm"><i class="bi bi-facebook texto-azul fs-5"></i></a>
                            <a href="https://www.instagram.com/gncrental?igsh=dTNjN2lrMm9lajdu" target="_blank" class="caja-icono text-decoration-none shadow-sm"><i class="bi bi-instagram texto-naranja fs-5"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-5">
                        <h6 class="texto-naranja titulo-columna">SERVICIOS</h6>
                        <ul class="lista-servicios">
                            <li><a href="/#flota" class="servicio-link"><i class="bi bi-chevron-right"></i> Catálogo de Maquinas</a></li>
                            <li><a href="/informacion/curso" class="servicio-link"><i class="bi bi-chevron-right"></i> Curso</a></li>
                            <li><a href="/informacion/clientes" class="servicio-link"><i class="bi bi-chevron-right"></i> Portal Clientes</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <h6 class="texto-naranja titulo-columna">CENTRAL DE OPERACIONES</h6>
                        <div class="d-flex mb-4">
                            <div class="caja-icono me-3 flex-shrink-0 shadow-sm"><i class="bi bi-geo-alt-fill texto-azul fs-5"></i></div>
                            <div>
                                <h6 class="texto-naranja fw-bold mb-1" style="font-size: 0.85rem; letter-spacing: 1px;">CASA MATRIZ</h6>
                                <p class="mb-0 texto-oscuro fw-bold fs-6">Vicuña Mackenna #031, Melipilla, Chile</p>
                            </div>
                        </div>
                        <div class="d-flex mb-4">
                            <div class="caja-icono me-3 flex-shrink-0 shadow-sm"><i class="bi bi-telephone-fill texto-naranja fs-5"></i></div>
                            <div>
                                <h6 class="texto-naranja fw-bold mb-1" style="font-size: 0.85rem; letter-spacing: 1px;">LÍNEA DIRECTA</h6>
                                <p class="mb-2 texto-oscuro fw-bold fs-6">+56 9 8555 5741</p>
                                <div class="d-flex flex-row flex-wrap gap-2 align-items-start">
                                    <a href="tel:+56985555741" class="gnc-call-contact-link text-uppercase"><i class="bi bi-telephone-fill"></i> Llamar Ahora</a>
                                    <a href="https://wa.me/56985555741" target="_blank" class="gnc-wa-contact-link text-uppercase"><i class="bi bi-whatsapp"></i> Chat WhatsApp</a>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="caja-icono me-3 flex-shrink-0 shadow-sm"><i class="bi bi-envelope-fill texto-manzana fs-5"></i></div>
                            <div>
                                <h6 class="texto-naranja fw-bold mb-1" style="font-size: 0.85rem; letter-spacing: 1px;">CONSULTAS TÉCNICAS</h6>
                                <a href="mailto:german_ncabrera@hotmail.es" class="texto-oscuro fw-bold text-decoration-none">german_ncabrera@hotmail.es</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

// Registrar Componentes
customElements.define('gnc-header', GncHeader);
customElements.define('gnc-footer', GncFooter);

// =========================================
// 3. LÓGICA GLOBAL DE ACTUALIZACIÓN DE FLOTA
// =========================================
document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carousel');

    if (carrusel) {
        carrusel.addEventListener('slid.bs.carousel', function (event) {
            const itemActivo = event.relatedTarget;

            // 1. Actualizar Textos Principales
            const titulo = document.getElementById('info-titulo');
            if (titulo) titulo.innerHTML = itemActivo.getAttribute('data-titulo') || '';

            const subtitulo = document.getElementById('info-subtitulo');
            if (subtitulo) subtitulo.innerText = itemActivo.getAttribute('data-subtitulo') || '';

            const desc = document.getElementById('info-desc');
            if (desc) desc.innerText = itemActivo.getAttribute('data-desc') || '';

            // 2. Actualizar Tabla de Especificaciones
            const marca = document.getElementById('info-marca');
            if (marca) marca.innerText = itemActivo.getAttribute('data-marca') || 'Consulte';

            const motor = document.getElementById('info-motor');
            if (motor) motor.innerText = itemActivo.getAttribute('data-motor') || 'Consulte';

            const capacidad = document.getElementById('info-capacidad');
            if (capacidad) capacidad.innerText = itemActivo.getAttribute('data-capacidad') || 'Consulte';

            // Mástil (solo para Grúas Horquilla)
            const mastil = document.getElementById('info-mastil');
            if (mastil) {
                mastil.innerText = itemActivo.getAttribute('data-mastil') || 'N/A';
            }

            // 3. Actualizar Enlace de WhatsApp
            const btnWa = document.getElementById('btn-wa');
            if (btnWa) {
                const maquinaWa = itemActivo.getAttribute('data-wa') || 'Maquinaria';
                const textoWa = encodeURIComponent(`Hola, vengo de su página web. Me interesa cotizar: ${maquinaWa}`);
                btnWa.href = `https://wa.me/56985555741?text=${textoWa}`;
            }
        });
    }
});