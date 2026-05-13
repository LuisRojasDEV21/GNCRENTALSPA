/* =========================================
   CONSTANTES GLOBALES GNC
   ========================================= */
const GNC_PHONE = '56985555741';
const GNC_LOGO  = '/wwwroot/images/logo.png';

/* =========================================
   FAVICON
   ========================================= */
const favicon = document.createElement('link');
favicon.rel   = 'icon';
favicon.type  = 'image/png';
favicon.href  = GNC_LOGO;
document.head.appendChild(favicon);

/* =========================================
   HELPER: asignar texto de forma segura
   ========================================= */
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
}

function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
}

/* =========================================
   1. COMPONENTE DE CABECERA (HEADER)
   ========================================= */
class GncHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-gnc">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center text-decoration-none" href="/" style="gap: 12px;">
                    <img src="${GNC_LOGO}" alt="Logo GNC" height="50"
                         style="border-radius: 4px; object-fit: contain;"
                         onerror="this.style.display='none'">
                    <span class="fuente-gnc fs-3 fw-bold mb-0 lh-1">
                        <span class="texto-azul">GNC</span> <span class="texto-naranja">RENTAL SPA</span>
                    </span>
                </a>
                <button class="navbar-toggler border-0" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir menú">
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

/* =========================================
   2. COMPONENTE DE PIE DE PÁGINA (FOOTER)
   ========================================= */
class GncFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="quienes-somos"
             class="container-fluid pt-2 pb-5 seccion-ancla"
             style="background-color: #E8E4D5; border-top: 4px solid #00AEEF; margin-bottom: -15px; position: relative; overflow: hidden;">

            <div class="container position-relative"
                 style="z-index: 1; padding-top: 40px; padding-bottom: 40px;">

                <div class="row g-4">

                    <!-- QUIÉNES SOMOS -->
                    <div class="col-12 col-lg-4">

                        <h6 class="texto-naranja titulo-columna">
                            QUIÉNES SOMOS
                        </h6>

                        <div class="d-flex align-items-center mb-3" style="gap: 15px;">

                            <img src="${GNC_LOGO}"
                                 alt="Logo GNC"
                                 style="height: 65px; border-radius: 4px; object-fit: contain;"
                                 onerror="this.style.display='none'">

                            <div>
                                <h2 class="display-6 fuente-gnc texto-oscuro mb-0 lh-1">
                                    GNC RENTAL
                                </h2>

                                <h2 class="display-6 fuente-gnc texto-azul mb-0 lh-1">
                                    SPA
                                </h2>
                            </div>

                        </div>

                        <p class="texto-oscuro pe-lg-3"
                           style="font-size: 0.95rem; line-height: 1.6; text-align: justify; opacity: 0.9;">

                            Fundada como Germán Núñez, GNC RENTAL SPA es una empresa familiar que respalda sus servicios con dos décadas de experiencia en Melipilla y la región. Lo que comenzó como transporte de maquinaria, hoy es una flota integral de arriendo de grúas horquilla, plataformas de izaje y servicio técnico. Nuestro sello se mantiene intacto: responsabilidad, puntualidad y el mejor equipo técnico en cada operación.

                        </p>

                        <div class="d-flex gap-3 mt-4">

                            <a href="https://www.facebook.com/share/1Gb1TsDZSL/"
                               target="_blank"
                               rel="noopener"
                               class="caja-icono text-decoration-none shadow-sm">

                                <i class="bi bi-facebook texto-azul fs-5"></i>

                            </a>

                            <a href="https://www.instagram.com/gncrental?igsh=dTNjN2lrMm9lajdu"
                               target="_blank"
                               rel="noopener"
                               class="caja-icono text-decoration-none shadow-sm">

                                <i class="bi bi-instagram texto-naranja fs-5"></i>

                            </a>

                        </div>

                    </div>

                    <!-- SERVICIOS -->
                    <div class="col-12 col-md-6 col-lg-4">

                        <h6 class="texto-naranja titulo-columna">
                            SERVICIOS
                        </h6>

                        <ul class="lista-servicios">

                            <li>
                                <a href="/#flota" class="servicio-link">
                                    <i class="bi bi-chevron-right"></i>
                                    Catálogo de Máquinas
                                </a>
                            </li>

                            <li>
                                <a href="/informacion/cursos" class="servicio-link">
                                    <i class="bi bi-chevron-right"></i>
                                    Cursos
                                </a>
                            </li>

                            <li>
                                <a href="/informacion/clientes" class="servicio-link">
                                    <i class="bi bi-chevron-right"></i>
                                    Portal Clientes
                                </a>
                            </li>

                        </ul>

                    </div>

                    <!-- CONTACTO -->
                    <div class="col-12 col-md-6 col-lg-4">

                        <h6 class="texto-naranja titulo-columna">
                            CENTRAL DE OPERACIONES
                        </h6>

                        <!-- DIRECCIÓN -->
                        <div class="d-flex mb-4">

                            <div class="caja-icono me-3 flex-shrink-0 shadow-sm">
                                <i class="bi bi-geo-alt-fill texto-azul fs-5"></i>
                            </div>

                            <div>

                                <h6 class="texto-naranja fw-bold mb-1"
                                    style="font-size: 0.85rem; letter-spacing: 1px;">

                                    CASA MATRIZ

                                </h6>
                                <a href="https://maps.app.goo.gl/KUUf5Spqvk9JyQ196" 
                                   target="_blank" 
                                   rel="noopener" 
                                   class="mb-0 texto-oscuro fw-bold fs-6 text-decoration-none d-block gnc-transition"
                                   onmouseover="this.classList.replace('texto-oscuro', 'texto-naranja')"
                                   onmouseout="this.classList.replace('texto-naranja', 'texto-oscuro')">
                                    Vicuña Mackenna #031, Melipilla, Chile <i class="bi bi-box-arrow-up-right ms-1" style="font-size: 0.8rem; color: var(--color-azul);"></i>
                                </a>

                            </div>

                        </div>

                        <!-- TELÉFONO -->
                        <div class="d-flex mb-4">

                            <div class="caja-icono me-3 flex-shrink-0 shadow-sm">
                                <i class="bi bi-telephone-fill texto-naranja fs-5"></i>
                            </div>

                            <div>

                                <h6 class="texto-naranja fw-bold mb-1"
                                    style="font-size: 0.85rem; letter-spacing: 1px;">

                                    LÍNEA DIRECTA

                                </h6>

                                <p class="mb-2 texto-oscuro fw-bold fs-6">
                                    +56 9 8555 5741
                                </p>

                                <div class="d-flex flex-wrap gap-2">

                                    <a href="tel:+${GNC_PHONE}"
                                       class="gnc-call-contact-link text-uppercase">

                                        <i class="bi bi-telephone-fill"></i>
                                        Llamar Ahora

                                    </a>

                                    <a href="https://wa.me/${GNC_PHONE}"
                                       target="_blank"
                                       rel="noopener"
                                       class="gnc-wa-contact-link text-uppercase">

                                        <i class="bi bi-whatsapp"></i>
                                        Chat WhatsApp

                                    </a>

                                </div>

                            </div>

                        </div>

                        <!-- EMAIL -->
                        <div class="d-flex">

                            <div class="caja-icono me-3 flex-shrink-0 shadow-sm">
                                <i class="bi bi-envelope-fill texto-manzana fs-5"></i>
                            </div>

                            <div>

                                <h6 class="texto-naranja fw-bold mb-1"
                                    style="font-size: 0.85rem; letter-spacing: 1px;">

                                    CONSULTAS TÉCNICAS

                                </h6>

                                <a href="mailto:german_ncabrera@hotmail.es"
                                   class="texto-oscuro fw-bold text-decoration-none">

                                    german_ncabrera@hotmail.es

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        `;
    }
}

/* =========================================
   REGISTRAR COMPONENTES WEB
   ========================================= */
customElements.define('gnc-header', GncHeader);
customElements.define('gnc-footer', GncFooter);

/* =========================================
   3. LÓGICA DEL CARRUSEL DE FLOTA
   ========================================= */
document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carousel');
    if (!carrusel) return; // Salir si no hay carrusel en la página

    carrusel.addEventListener('slid.bs.carousel', function (event) {
        const item = event.relatedTarget;
        if (!item) return;

        // Textos principales
        setHTML('info-titulo',    item.getAttribute('data-titulo')    || '');
        setText('info-subtitulo', item.getAttribute('data-subtitulo') || '');
        setText('info-desc',      item.getAttribute('data-desc')      || '');

        // Especificaciones técnicas
        setText('info-marca',    item.getAttribute('data-marca')    || 'Consulte');
        setText('info-motor',    item.getAttribute('data-motor')    || 'Consulte');
        setText('info-capacidad',item.getAttribute('data-capacidad')|| 'Consulte');
        setText('info-mastil',   item.getAttribute('data-mastil')   || 'N/A');

        // Enlace de WhatsApp dinámico
        const btnWa = document.getElementById('btn-wa');
        if (btnWa) {
            const maquina  = item.getAttribute('data-wa') || 'Maquinaria';
            const mensaje  = encodeURIComponent(`Hola, vengo de su página web. Me interesa cotizar: ${maquina}`);
            btnWa.href = `https://wa.me/${GNC_PHONE}?text=${mensaje}`;
        }
    });
});