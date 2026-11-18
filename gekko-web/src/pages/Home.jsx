import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cogolloLight from '../assets/cogollo_light.jpeg';
import cogolloDark from '../assets/cogollo_dark.jpeg';
import fotoVertical from '../assets/2.jpeg';
import fotoHorizontal from '../assets/1.jpeg';
import './Home.css';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isShowcasePaused, setIsShowcasePaused] = useState(false);
  const { hash } = useLocation();

  const heroSlides = [
    {
      loteTag: 'REGISTRO MACRO BOTÁNICO',
      title: 'Cuban Affair • Flor Terapéutica (Lote #04)',
      thc: '24.2%',
      cbd: '< 0.8%',
      terp: 'Mirceno+',
      imgLight: cogolloLight,
      imgDark: cogolloDark,
      alt: 'Flor de cannabis macro Cuban Affair'
    },
    {
      loteTag: 'LOTE #07 • FITOTERAPIA CÍTRICA',
      title: 'Tropi Tangie • Flor Terapéutica (Lote #07)',
      thc: '21.8%',
      cbd: '1.2%',
      terp: 'Limoneno+',
      imgLight: fotoHorizontal,
      imgDark: fotoHorizontal,
      alt: 'Cultivo indoor Tropi Tangie'
    },
    {
      loteTag: 'LOTE #09 • RESERVA ORGÁNICA',
      title: 'Kush Medicinal • Reserva CABA (Lote #09)',
      thc: '19.5%',
      cbd: '2.4%',
      terp: 'Linalool+',
      imgLight: fotoVertical,
      imgDark: fotoVertical,
      alt: 'Sala de cultivo Kush Medicinal'
    }
  ];

  // Auto-advance hero showcase carousel every 4.5s (respects reduced motion & hover/focus pause)
  useEffect(() => {
    if (isShowcasePaused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length, isShowcasePaused]);

  // Fallback for mutually exclusive <details name="faq-gekko"> if unsupported
  useEffect(() => {
    if (Object.hasOwn(HTMLDetailsElement.prototype, 'name')) return;
    const onToggle = (event) => {
      const details = event.target;
      if (!(details instanceof HTMLDetailsElement) || !details.open || !details.hasAttribute('name')) return;
      const name = CSS.escape(details.getAttribute('name'));
      for (const other of document.querySelectorAll(`details[name="${name}"]`)) {
        if (other !== details) other.open = false;
      }
    };
    document.addEventListener('toggle', onToggle, { capture: true });
    return () => document.removeEventListener('toggle', onToggle, { capture: true });
  }, []);

  // 1. Scroll suave según Hash
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [hash]);

  // 2. Animación de Entrada Web Animations API (WAAPI)
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const easeOutExpo = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const animations = [];

    const trackingDot = document.getElementById('trackingDot');
    const eyebrowLabel = document.getElementById('eyebrowLabel');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const heroSummary = document.getElementById('heroSummary');
    const heroCta = document.getElementById('heroCta');
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    if (trackingDot) {
      animations.push(trackingDot.animate([
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        { clipPath: 'circle(100% at 50% 50%)', opacity: 1 }
      ], { duration: 500, delay: 200, easing: 'ease-out', fill: 'backwards' }));
    }

    if (eyebrowLabel) {
      animations.push(eyebrowLabel.animate([
        { transform: 'translateX(-12px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 }
      ], { duration: 600, delay: 280, easing: easeOutExpo, fill: 'backwards' }));
    }

    if (line1) {
      animations.push(line1.animate([
        { transform: 'translateY(110%)' },
        { transform: 'translateY(0%)' }
      ], { duration: 850, delay: 380, easing: easeOutExpo, fill: 'backwards' }));
    }

    if (line2) {
      animations.push(line2.animate([
        { transform: 'translateY(110%)' },
        { transform: 'translateY(0%)' }
      ], { duration: 850, delay: 500, easing: easeOutExpo, fill: 'backwards' }));
    }

    if (heroSummary) {
      animations.push(heroSummary.animate([
        { transform: 'translateY(24px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ], { duration: 750, delay: 650, easing: easeOutExpo, fill: 'backwards' }));
    }

    if (heroCta) {
      animations.push(heroCta.animate([
        { transform: 'translateY(20px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ], { duration: 700, delay: 780, easing: easeOutExpo, fill: 'backwards' }));
    }

    [card1, card2, card3].forEach((card, index) => {
      if (card) {
        animations.push(card.animate([
          { transform: 'translateY(38px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ], { duration: 800, delay: 600 + (index * 130), easing: easeOutExpo, fill: 'backwards' }));
      }
    });

    return () => {
      animations.forEach(anim => anim.cancel());
    };
  }, []);

  const faqs = [
    {
      num: '1',
      title: '¿ES LEGAL LO QUE HACEN?',
      content: 'Sí. Gekko funciona como una Asociación Civil vinculada a la salud bajo el marco de la Ley 27.350 y el programa REPROCANN. El acceso es exclusivo para miembros registrados y aprobados.'
    },
    {
      num: '2',
      title: '¿NECESITO TENER REPROCANN?',
      content: 'Sí, es un requisito legal excluyente contar con la credencial del REPROCANN vigente y vincularse formalmente a nuestra Asociación Civil para acceder al cultivo colaborativo.'
    },
    {
      num: '3',
      title: '¿QUÉ ES EL REPROCANN?',
      content: 'Es el Registro del Programa de Cannabis del Ministerio de Salud, que autoriza el cultivo controlado y el acceso a derivados para fines medicinales, terapéuticos y paliativos.'
    },
    {
      num: '4',
      title: '¿QUIÉNES PUEDEN INSCRIBIRSE?',
      content: 'Cualquier persona que cuente con indicación médica y haya completado el trámite oficial en la plataforma del Ministerio de Salud a través de un profesional vinculado.'
    },
    {
      num: '5',
      title: '¿VENDEN AL PÚBLICO EN GENERAL?',
      content: 'No. Gekko no es un dispensario comercial ni un growshop. Operamos estrictamente a puertas cerradas proveyendo fitoterapia de alta calidad únicamente a nuestros socios activos.'
    },
    {
      num: '6',
      title: '¿HACEN ENVÍOS?',
      content: 'Sí. Para garantizar la trazabilidad y discreción, la logística es gestionada directamente por nosotros con entregas seguras y exclusivas dentro del ámbito de CABA.'
    }
  ];

  const currentSlide = heroSlides[activeSlide];

  return (
    <main>
      {/* SECTION 1: HERO */}
      <section className="hero-stage" id="heroStage">
        <section className="content-stage">
          <div className="copy-zone">
            <div className="eyebrow-pill" id="eyebrowBadge">
              <span className="amber-dot" id="trackingDot"></span>
              <span className="eyebrow-text" id="eyebrowLabel">ASOCIACIÓN CIVIL • REPROCANN</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line-mask">
                <span className="title-line" id="line1">Bienestar integral.</span>
              </span>
              <span className="title-line-mask">
                <span className="title-line hero-title-accent" id="line2">Cultivo responsable.</span>
              </span>
            </h1>

            <p className="hero-summary" id="heroSummary">
              Desarrollamos fitoterapia botánica estandarizada de máxima pureza, con trazabilidad analítica por lote y acompañamiento integral bajo la Ley Nacional 27.350. Exclusivo para socios en CABA.
            </p>

            <div className="hero-cta-row" id="heroCta">
              <Link to="/asociarse" className="pill-btn pill-primary hero-cta">
                Solicitar Admisión
              </Link>
              <a href="#asociacion" className="pill-btn pill-secondary hero-cta-secondary">
                Conocer el Club ↗
              </a>
            </div>

            <div className="hero-trust-strip">
              <span>✓ Ley 27.350</span>
              <span>✓ Trazabilidad por Lote</span>
              <span>✓ Entrega Segura CABA</span>
            </div>
          </div>

          <section
            className="hero-showcase-zone"
            aria-roledescription="carousel"
            aria-label="Vitrina Botánica"
            onMouseEnter={() => setIsShowcasePaused(true)}
            onMouseLeave={() => setIsShowcasePaused(false)}
            onFocusCapture={() => setIsShowcasePaused(true)}
            onBlurCapture={() => setIsShowcasePaused(false)}
          >
            <div className="hero-showcase-card" id="card1">
              <img
                className="showcase-bg-img light-only"
                src={currentSlide.imgLight}
                alt={currentSlide.alt}
                fetchPriority="high"
              />
              <img
                className="showcase-bg-img dark-only"
                src={currentSlide.imgDark}
                alt={currentSlide.alt}
                fetchPriority="high"
              />

              <div className="showcase-top-bar">
                <span className="showcase-pill">● {currentSlide.loteTag}</span>
                <div className="showcase-carousel-ctrl">
                  <button
                    type="button"
                    aria-label="Lote anterior"
                    onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  >
                    ‹
                  </button>
                  <div className="showcase-dots" role="group" aria-label="Seleccionar lote">
                    {heroSlides.map((slide, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`s-dot ${idx === activeSlide ? 'active' : ''}`}
                        aria-label={`Ver ${slide.title}`}
                        aria-current={idx === activeSlide ? 'true' : undefined}
                        onClick={() => setActiveSlide(idx)}
                      />
                    ))}
                  </div>
                  <span className="showcase-counter" aria-live="polite">
                    0{activeSlide + 1}/0{heroSlides.length}
                  </span>
                  <button
                    type="button"
                    aria-label="Siguiente lote"
                    onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="showcase-specs-overlay">
                <h2 className="showcase-title">{currentSlide.title}</h2>
                <div className="showcase-metrics-row">
                  <div className="showcase-metric">
                    <span className="metric-val metric-amber">{currentSlide.thc}</span>
                    <span className="metric-lbl">POTENCIA THC</span>
                  </div>
                  <div className="showcase-metric">
                    <span className="metric-val">{currentSlide.cbd}</span>
                    <span className="metric-lbl">RATIO CBD</span>
                  </div>
                  <div className="showcase-metric">
                    <span className="metric-val metric-emerald">{currentSlide.terp}</span>
                    <span className="metric-lbl">TERPENOS</span>
                  </div>
                </div>
                <Link to="/geneticas" className="showcase-link">
                  VER ANÁLISIS CROMATOGRÁFICO DE LOTE ↗
                </Link>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* SECTION 2: NUESTROS PILARES DE EXCELENCIA */}
      <section className="pillars-section" id="asociacion">
        <header className="pillars-header">
          <div className="section-eyebrow-plain">NUESTROS PILARES DE EXCELENCIA</div>
          <h2 className="pillars-title">Medicina botánica con trazabilidad médica y cultivo sustentable</h2>
        </header>

        <div className="pillars-grid">
          <article className="pillar-card">
            <span className="pillar-tag">01 • CULTIVO AEROPÓNICO</span>
            <h3 className="pillar-card-title">Ambiente Estéril &amp; Control Total</h3>
            <p className="pillar-card-desc">
              Fotoperiodo y espectro lumínico balanceado en cámaras cerradas con nutrición bio-orgánica y sin pesticidas sintéticos.
            </p>
          </article>

          <article className="pillar-card">
            <span className="pillar-tag">02 • TRAZABILIDAD FARMACÉUTICA</span>
            <h3 className="pillar-card-title">Cromatografías por Cosecha</h3>
            <p className="pillar-card-desc">
              Análisis de laboratorio independientes para certificar la potencia cannabinoide y el perfil terpénico exacto de cada lote.
            </p>
          </article>

          <article className="pillar-card">
            <span className="pillar-tag">03 • MARCO LEGAL REPROCANN</span>
            <h3 className="pillar-card-title">Seguridad y Acompañamiento</h3>
            <p className="pillar-card-desc">
              Asistencia médica integral y dispensación a puertas cerradas con logística propia y discreta exclusivamente en CABA.
            </p>
          </article>
        </div>
      </section>

      {/* SECTION 3: FAQ & PROTOCOLO */}
      <section className="faq-section" id="faq" aria-labelledby="faq-heading">
        <header className="section-header">
          <div className="section-eyebrow">Transparencia y Seguridad</div>
          <h2 className="section-title" id="faq-heading">Preguntas Frecuentes y Protocolo</h2>
        </header>

        <div className="faq-grid">
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <details
                key={faq.num}
                name="faq-gekko"
                className="accordion-card"
                defaultOpen={index === 0}
              >
                <summary className="accordion-header">
                  <span className="accordion-num" aria-hidden="true">{faq.num}</span>
                  <span className="accordion-title">{faq.title}</span>
                  <span className="accordion-icon-wrap" aria-hidden="true">
                    <svg className="accordion-icon" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line className="icon-vbar" x1="12" y1="5" x2="12" y2="19" />
                    </svg>
                  </span>
                </summary>
                <div className="accordion-body">{faq.content}</div>
              </details>
            ))}
          </div>

          <aside className="protocol-sticky-wrapper">
            <div className="protocol-card">
              <div className="protocol-shield-emblem">
                <svg className="shield-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="protocol-label">● PROTOCOLO DE ACCESO</span>
              <p className="protocol-main-text">ACCESO EXCLUSIVO PARA SOCIOS CON REPROCANN ACTIVO</p>
              <div className="protocol-divider" aria-hidden="true"></div>
              <p className="protocol-footer-text">
                Información y dispensación orientadas estrictamente a personas registradas bajo el marco de la Ley Nacional 27.350.
              </p>
              <span className="protocol-minsal-badge">✔ VINCULACIÓN OFICIAL MINSAL</span>
            </div>
          </aside>
        </div>

        {/* Contacto */}
        <div className="contact-panel" id="contacto">
          <div className="contact-text">
            <span className="contact-eyebrow">¿TENÉS OTRA DUDA?</span>
            <p className="contact-paragraph">Estamos para ayudarte. Escribinos por WhatsApp y te responderemos a la brevedad.</p>
          </div>
          <div className="contact-buttons">
            <a
              href="https://wa.me/5491199999999?text=Hola%20Gekko%2C%20quiero%20recibir%20informaci%C3%B3n%20para%20asociarme"
              className="pill-btn pill-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>CONSULTAR POR WHATSAPP ↗</span>
            </a>
            <a
              href="https://instagram.com/gekkosocialclub"
              className="btn-ghost-luxury"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>SEGUINOS EN INSTAGRAM ↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}