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
        <style>
            /* ══════════════════════════════════════
               FOOTER BASE (desktop — sin cambios)
            ══════════════════════════════════════ */
            .gnc-footer-wrap {
                background-color: #E8E4D5;
                border-top: 4px solid #00AEEF;
                position: relative;
                overflow: hidden;
            }

            .gnc-footer-inner {
                max-width: 1200px;
                margin: 0 auto;
                padding: 48px 24px 40px;
            }

            .gnc-footer-grid {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 40px;
            }

            .gnc-footer-brand {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 14px;
            }

            .gnc-footer-brand img {
                height: 54px;
                border-radius: 4px;
                object-fit: contain;
            }

            .gnc-footer-brand-name {
                font-size: 1.45rem;
                line-height: 1.1;
                font-weight: 700;
            }

            .gnc-footer-desc {
                font-size: 0.88rem;
                line-height: 1.7;
                text-align: justify;
                opacity: 0.85;
                margin-bottom: 14px;
            }

            .gnc-footer-social { display: flex; gap: 8px; }

            .gnc-footer-col-center {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .gnc-footer-col-center > div {
                width: 100%;
                max-width: 200px;
            }

            .gnc-contact-row {
                display: flex;
                gap: 12px;
                align-items: flex-start;
                margin-bottom: 16px;
            }

            .gnc-contact-row .caja-icono { flex-shrink: 0; }

            .gnc-email-link {
                font-size: 0.88rem;
                font-weight: bold;
                text-decoration: none;
                word-break: break-all;
                overflow-wrap: anywhere;
            }

            .gnc-btn-group {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 6px;
            }

            /* ocultar el layout móvil en desktop */
            .gnc-footer-mobile { display: none; }

            /* ══════════════════════════════════════
               MÓVIL  ≤ 575px  — DISEÑO NUEVO
            ══════════════════════════════════════ */
            @media (max-width: 575px) {

                /* Ocultar layout desktop */
                .gnc-footer-desktop { display: none !important; }

                /* Mostrar layout móvil */
                .gnc-footer-mobile {
                    display: block;
                    padding: 28px 18px 24px;
                }

                /* -- Logo + nombre -- */
                .gnc-m-brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 18px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid rgba(0,0,0,0.12);
                }

                .gnc-m-brand img {
                    height: 42px;
                    border-radius: 4px;
                    object-fit: contain;
                }

                .gnc-m-brand-name {
                    font-size: 1.2rem;
                    font-weight: 700;
                    line-height: 1.1;
                }

                /* -- Botones de contacto rápido -- */
                .gnc-m-cta {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                    margin-bottom: 20px;
                }

                .gnc-m-cta a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    padding: 11px 8px;
                    border-radius: 8px;
                    font-size: 0.82rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                .gnc-m-cta-call {
                    background: transparent;
                    border: 2px solid var(--color-naranja, #E8732A);
                    color: var(--color-naranja, #E8732A) !important;
                }

                .gnc-m-cta-wa {
                    background: transparent;
                    border: 2px solid #25D366;
                    color: #25D366 !important;
                }

                /* -- Info rápida (dirección + email) -- */
                .gnc-m-info {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-bottom: 20px;
                    padding-bottom: 18px;
                    border-bottom: 1px solid rgba(0,0,0,0.12);
                }

                .gnc-m-info-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.85rem;
                }

                .gnc-m-info-row i {
                    font-size: 1rem;
                    margin-top: 2px;
                    flex-shrink: 0;
                }

                .gnc-m-info-row a {
                    color: inherit;
                    text-decoration: none;
                    word-break: break-all;
                    font-weight: 600;
                }

                /* -- Links de servicios en fila -- */
                .gnc-m-services {
                    margin-bottom: 20px;
                    padding-bottom: 18px;
                    border-bottom: 1px solid rgba(0,0,0,0.12);
                }

                .gnc-m-services-title {
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    margin-bottom: 10px;
                }

                .gnc-m-services-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .gnc-m-services-links a {
                    font-size: 0.82rem;
                    font-weight: 600;
                    text-decoration: none;
                    padding: 5px 12px;
                    border-radius: 20px;
                    border: 1.5px solid rgba(0,0,0,0.15);
                    color: inherit;
                    transition: all 0.2s;
                }

                .gnc-m-services-links a:hover {
                    border-color: var(--color-naranja, #E8732A);
                    color: var(--color-naranja, #E8732A);
                }

                /* -- Redes sociales -- */
                .gnc-m-social {
                    display: flex;
                    gap: 8px;
                }
            }

            /* Tablet: 2 columnas (entre 576 y 991px) */
            @media (min-width: 576px) and (max-width: 991px) {
                .gnc-footer-grid {
                    grid-template-columns: 1fr 1fr;
                    gap: 32px;
                }
                .gnc-footer-col-ops { grid-column: 1 / -1; }
                .gnc-footer-col-center { align-items: flex-start; }
                .gnc-footer-col-center > div { max-width: 100%; }
            }
        </style>

        <div id="quienes-somos" class="gnc-footer-wrap seccion-ancla">

            <!-- ══ DESKTOP / TABLET (sin cambios) ══ -->
            <div class="gnc-footer-inner gnc-footer-desktop">
                <div class="gnc-footer-grid">

                    <!-- QUIÉNES SOMOS -->
                    <div>
                        <h6 class="texto-naranja titulo-columna">QUIÉNES SOMOS</h6>
                        <div class="gnc-footer-brand">
                            <img src="${GNC_LOGO}" alt="Logo GNC" onerror="this.style.display='none'">
                            <div class="gnc-footer-brand-name fuente-gnc texto-naranja">GNC RENTAL<br>SPA</div>
                        </div>
                        <p class="texto-oscuro gnc-footer-desc">
                            Empresa familiar con dos décadas de experiencia en Melipilla y la región. Flota integral de arriendo de grúas horquilla, plataformas de izaje y servicio técnico. Responsabilidad, puntualidad y el mejor equipo técnico en cada operación.
                        </p>
                        <div class="gnc-footer-social">
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
                    <div class="gnc-footer-col-center">
                        <div>
                            <h6 class="texto-naranja titulo-columna">SERVICIOS</h6>
                            <ul class="lista-servicios">
                                <li><a href="/#flota" class="servicio-link"><i class="bi bi-chevron-right"></i>Catálogo de Máquinas</a></li>
                                <li><a href="/informacion/cursos" class="servicio-link"><i class="bi bi-chevron-right"></i>Cursos</a></li>
                                <li><a href="/informacion/clientes" class="servicio-link"><i class="bi bi-chevron-right"></i>Portal Clientes</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- OPERACIONES -->
                    <div class="gnc-footer-col-ops">
                        <h6 class="texto-naranja titulo-columna">CENTRAL DE OPERACIONES</h6>
                        <div class="gnc-contact-row">
                            <div class="caja-icono shadow-sm"><i class="bi bi-geo-alt-fill texto-azul fs-5"></i></div>
                            <div>
                                <p class="texto-naranja fw-bold mb-1" style="font-size:0.8rem;letter-spacing:1px;">CASA MATRIZ</p>
                                <a href="https://maps.app.goo.gl/KUUf5Spqvk9JyQ196" target="_blank" rel="noopener"
                                   class="texto-oscuro fw-bold text-decoration-none gnc-transition" style="font-size:0.9rem;"
                                   onmouseover="this.classList.replace('texto-oscuro','texto-naranja')"
                                   onmouseout="this.classList.replace('texto-naranja','texto-oscuro')">
                                    Vicuña Mackenna #031, Melipilla, Chile
                                    <i class="bi bi-box-arrow-up-right ms-1" style="font-size:0.75rem;color:var(--color-azul);"></i>
                                </a>
                            </div>
                        </div>
                        <div class="gnc-contact-row">
                            <div class="caja-icono shadow-sm"><i class="bi bi-telephone-fill texto-naranja fs-5"></i></div>
                            <div>
                                <p class="texto-naranja fw-bold mb-1" style="font-size:0.8rem;letter-spacing:1px;">LÍNEA DIRECTA</p>
                                <p class="texto-oscuro fw-bold mb-0" style="font-size:1rem;">+56 9 8555 5741</p>
                                <div class="gnc-btn-group">
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
                        <div class="gnc-contact-row">
                            <div class="caja-icono shadow-sm"><i class="bi bi-envelope-fill texto-manzana fs-5"></i></div>
                            <div style="min-width:0;overflow:hidden;">
                                <p class="texto-naranja fw-bold mb-1" style="font-size:0.8rem;letter-spacing:1px;">CONSULTAS TÉCNICAS</p>
                                <a href="mailto:german_ncabrera@hotmail.es" class="texto-oscuro gnc-email-link">
                                    german_ncabrera@hotmail.es
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- ══ MÓVIL — DISEÑO COMPACTO ══ -->
            <div class="gnc-footer-mobile">

                <!-- Logo + nombre -->
                <div class="gnc-m-brand">
                    <img src="${GNC_LOGO}" alt="Logo GNC" onerror="this.style.display='none'">
                    <div class="gnc-m-brand-name fuente-gnc texto-naranja">GNC RENTAL SPA</div>
                </div>

                <!-- Botones CTA rápidos -->
                <div class="gnc-m-cta">
                    <a href="tel:+${GNC_PHONE}" class="gnc-m-cta-call">
                        <i class="bi bi-telephone-fill"></i> Llamar
                    </a>
                    <a href="https://wa.me/${GNC_PHONE}" target="_blank" rel="noopener" class="gnc-m-cta-wa">
                        <i class="bi bi-whatsapp"></i> WhatsApp
                    </a>
                </div>

                <!-- Dirección + Email -->
                <div class="gnc-m-info">
                    <div class="gnc-m-info-row">
                        <i class="bi bi-geo-alt-fill texto-azul"></i>
                        <a href="https://maps.app.goo.gl/KUUf5Spqvk9JyQ196" target="_blank" rel="noopener" class="texto-oscuro">
                            Vicuña Mackenna #031, Melipilla
                            <i class="bi bi-box-arrow-up-right ms-1" style="font-size:0.7rem;color:var(--color-azul);"></i>
                        </a>
                    </div>
                    <div class="gnc-m-info-row">
                        <i class="bi bi-envelope-fill texto-manzana"></i>
                        <a href="mailto:german_ncabrera@hotmail.es" class="texto-oscuro">
                            german_ncabrera@hotmail.es
                        </a>
                    </div>
                </div>

                <!-- Servicios como pills -->
                <div class="gnc-m-services">
                    <p class="gnc-m-services-title texto-naranja mb-0">SERVICIOS</p>
                    <div class="gnc-m-services-links">
                        <a href="/#flota" class="texto-oscuro">Catálogo</a>
                        <a href="/informacion/cursos" class="texto-oscuro">Cursos</a>
                        <a href="/informacion/clientes" class="texto-oscuro">Portal Clientes</a>
                    </div>
                </div>

                <!-- Redes sociales -->
                <div class="gnc-m-social">
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