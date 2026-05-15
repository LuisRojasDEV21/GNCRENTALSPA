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
                        <span class="texto-naranja">GNC RENTAL SPA</span>
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
            class="container-fluid seccion-ancla"
            style="background-color: #E8E4D5; border-top: 4px solid #00AEEF; position: relative; overflow: hidden;">

            <div class="container" style="padding-top: 50px; padding-bottom: 50px; padding-left: 40px; padding-right: 40px;">
                <div class="row g-4">

                    <!-- QUIÉNES SOMOS -->
                    <div class="col-12 col-lg-4">

                        <h6 class="texto-naranja titulo-columna">QUIÉNES SOMOS</h6>

                        <div class="d-flex align-items-center mb-3" style="gap: 14px;">
                            <img src="${GNC_LOGO}" alt="Logo GNC"
                                 style="height: 60px; border-radius: 4px; object-fit: contain;"
                                 onerror="this.style.display='none'">
                            <div>
                                <h2 class="fuente-gnc texto-naranja mb-0 lh-1" style="font-size:1.6rem;">GNC RENTAL</h2>
                            <h2 class="fuente-gnc texto-naranja mb-0 lh-1" style="font-size:1.6rem;">SPA</h2>
                            </div>
                        </div>

                        <p class="texto-oscuro pe-lg-3" style="font-size: 0.92rem; line-height: 1.7; text-align: justify; opacity: 0.85;">
                            Empresa familiar con dos décadas de experiencia en Melipilla y la región. Flota integral de arriendo de grúas horquilla, plataformas de izaje y servicio técnico. Responsabilidad, puntualidad y el mejor equipo técnico en cada operación.
                        </p>

                        <div class="d-flex gap-2 mt-3">
                            <a href="https://www.facebook.com/share/1Gb1TsDZSL/" target="_blank" rel="noopener"
                               class="caja-icono text-decoration-none shadow-sm">
                                <i class="bi bi-facebook texto-azul fs-5"></i>
                            </a>
                            <a href="https://www.instagram.com/gncrental?igsh=dTNjN2lrMm9lajdu" target="_blank" rel="noopener"
                               class="caja-icono text-decoration-none shadow-sm">
                                <i class="bi bi-instagram texto-naranja fs-5"></i>
                            </a>
                        </div>

                    </div>

                    <!-- SERVICIOS -->
                    <div class="col-12 col-lg-4 d-flex flex-column align-items-center">

                        <div style="width: 100%; max-width: 220px;">
                            <h6 class="texto-naranja titulo-columna">SERVICIOS</h6>
                            <ul class="lista-servicios">
                                <li>
                                    <a href="/#flota" class="servicio-link">
                                        <i class="bi bi-chevron-right"></i>Catálogo de Máquinas
                                    </a>
                                </li>
                                <li>
                                    <a href="/informacion/cursos" class="servicio-link">
                                        <i class="bi bi-chevron-right"></i>Cursos
                                    </a>
                                </li>
                                <li>
                                    <a href="/informacion/clientes" class="servicio-link">
                                        <i class="bi bi-chevron-right"></i>Portal Clientes
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <!-- CONTACTO -->
                    <div class="col-12 col-lg-4">

                        <h6 class="texto-naranja titulo-columna">CENTRAL DE OPERACIONES</h6>

                        <!-- DIRECCIÓN -->
                        <div class="d-flex mb-3" style="gap:14px; align-items:flex-start;">
                            <div class="caja-icono flex-shrink-0 shadow-sm">
                                <i class="bi bi-geo-alt-fill texto-azul fs-5"></i>
                            </div>
                            <div>
                                <p class="texto-naranja fw-bold mb-1" style="font-size:0.8rem; letter-spacing:1px;">CASA MATRIZ</p>
                                <a href="https://maps.app.goo.gl/KUUf5Spqvk9JyQ196" target="_blank" rel="noopener"
                                   class="texto-oscuro fw-bold text-decoration-none gnc-transition" style="font-size:0.92rem;"
                                   onmouseover="this.classList.replace('texto-oscuro','texto-naranja')"
                                   onmouseout="this.classList.replace('texto-naranja','texto-oscuro')">
                                    Vicuña Mackenna #031, Melipilla, Chile
                                    <i class="bi bi-box-arrow-up-right ms-1" style="font-size:0.75rem; color:var(--color-azul);"></i>
                                </a>
                            </div>
                        </div>

                        <!-- TELÉFONO -->
                        <div class="d-flex mb-3" style="gap:14px; align-items:flex-start;">
                            <div class="caja-icono flex-shrink-0 shadow-sm">
                                <i class="bi bi-telephone-fill texto-naranja fs-5"></i>
                            </div>
                            <div>
                                <p class="texto-naranja fw-bold mb-1" style="font-size:0.8rem; letter-spacing:1px;">LÍNEA DIRECTA</p>
                                <p class="texto-oscuro fw-bold mb-2" style="font-size:1rem;">+56 9 8555 5741</p>
                                <div class="d-flex flex-wrap gap-2">
                                    <a href="tel:+${GNC_PHONE}" class="gnc-call-contact-link text-uppercase">
                                        <i class="bi bi-telephone-fill"></i> Llamar Ahora
                                    </a>
                                    <a href="https://wa.me/${GNC_PHONE}" target="_blank" rel="noopener"
                                       class="gnc-wa-contact-link text-uppercase">
                                        <i class="bi bi-whatsapp"></i> Chat WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- EMAIL -->
                        <div class="d-flex" style="gap:14px; align-items:flex-start;">
                            <div class="caja-icono flex-shrink-0 shadow-sm">
                                <i class="bi bi-envelope-fill texto-manzana fs-5"></i>
                            </div>
                            <div>
                                <p class="texto-naranja fw-bold mb-1" style="font-size:0.8rem; letter-spacing:1px;">CONSULTAS TÉCNICAS</p>
                                <a href="mailto:german_ncabrera@hotmail.es"
                                   class="texto-oscuro fw-bold text-decoration-none" style="font-size:0.92rem;">
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

class GncFooterSimple extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid py-3" style="background-color: #E8E4D5; border-top: 2px solid #00AEEF;">
            <div class="container text-center">
                <p class="mb-1 texto-oscuro fw-bold" style="font-size: 0.88rem; opacity: 0.8;">
                    &copy; 2026. GNC RENTAL SPA — Todos los derechos reservados.
                </p>
                <p class="mb-0 texto-oscuro" style="font-size: 0.82rem; opacity: 0.6;">
                    <a href="/clientesdatos" class="texto-azul fw-bold text-decoration-none">Política de datos de clientes</a>
                    <span class="mx-2 d-none d-sm-inline">|</span>
                    <br class="d-sm-none">
                    Desarrollado por:
                    <a href="mailto:lu.rojaespi@gmail.com" class="texto-naranja fw-bold text-decoration-none">lu.rojaespi@gmail.com</a>
                </p>
            </div>
        </div>
        `;
    }
}

customElements.define('gnc-header', GncHeader);
customElements.define('gnc-footer', GncFooter);
customElements.define('gnc-footer-simple', GncFooterSimple);

/* ... y de aquí para abajo sigue tu código del carrusel ... */

/* IMPORTANTE: Si tenías código del carrusel aquí abajo, déjalo tal cual. Solo reemplaza hasta la línea de arriba. */
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