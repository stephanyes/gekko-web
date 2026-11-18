import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-main-grid">

          {/* 1. Left Area: Brand (Matches Penpot 05C 1:1) */}
          <div className="footer-brand-area">
            <div className="footer-brand-text-group">
              <span className="footer-brand-name">GEKKO CLUB SOCIAL</span>
              <span className="footer-brand-subtitle">ASOCIACIÓN CIVIL • LEY 27.350</span>
            </div>
            <p className="footer-brand-desc">
              Cultivo colaborativo y fitoterapia estandarizada de máxima pureza. Trazabilidad analítica y entregas seguras en CABA, Argentina.
            </p>
            <div className="footer-reg-badge">
              <span className="footer-brand-tag">● REGISTRO OFICIAL REPROCANN · 2026</span>
            </div>
          </div>

          {/* 2. Right Area: 4-Column Sub-grid */}
          <div className="footer-nav-subgrid">
            {/* Col A: Navegación */}
            <div className="footer-col">
              <h3 className="footer-col-header">NAVEGACIÓN</h3>
              <ul className="footer-nav-list">
                <li>
                  <Link to="/" className="footer-nav-link" onClick={scrollToTop}>
                    Inicio
                  </Link>
                </li>
                <li><Link to="/#asociacion" className="footer-nav-link">La Asociación</Link></li>
                <li><Link to="/geneticas" className="footer-nav-link">Genéticas</Link></li>
                <li><Link to="/cultivos" className="footer-nav-link">Cultivo</Link></li>
                <li><Link to="/#faq" className="footer-nav-link">Preguntas Frecuentes</Link></li>
              </ul>
            </div>

            {/* Col B: Cupos y Acceso */}
            <div className="footer-col">
              <h3 className="footer-col-header">CUPOS Y ACCESO</h3>
              <p className="footer-text-block">Requisitos de ingreso y vinculación médica profesional.</p>
              <Link to="/asociarse" className="footer-ghost-btn">
                SOLICITAR INFO ↗
              </Link>
            </div>

            {/* Col C: Contacto */}
            <div className="footer-col">
              <h3 className="footer-col-header">CONTACTO</h3>
              <ul className="footer-nav-list">
                <li className="footer-contact-item">CABA, Buenos Aires</li>
                <li className="footer-contact-item">Argentina</li>
                <li>
                  <a href="https://instagram.com/gekkosocialclub" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                    @gekkosocialclub
                  </a>
                </li>
                <li className="footer-contact-item">Atención Lunes a Viernes</li>
              </ul>
            </div>

            {/* Col D: Marco Legal */}
            <div className="footer-col">
              <h3 className="footer-col-header">MARCO LEGAL</h3>
              <p className="footer-text-block">
                Actividades enmarcadas estrictamente bajo la Ley 27.350 y el programa REPROCANN. Prohibida la comercialización a terceros o al público general.
              </p>
            </div>
          </div>

        </div>

        {/* Sub-footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-bar-left">
            <span className="footer-copyright">© 2026 Gekko Club Social • Todos los derechos reservados.</span>
          </div>

          <div className="bottom-bar-right">
            <span className="footer-developer-credit">Desarrollado con dedicación en CABA, Argentina</span>
          </div>
        </div>
        {/* Mobile Compact Footer (Matches Penpot 06 / 06C / 08 / 10 / 12) */}
        <div className="footer-mobile-compact">
          <span className="fmc-brand">GEKKO CLUB SOCIAL • ASOCIACIÓN CIVIL</span>
          <span className="fmc-legal">Ley 27.350 • REPROCANN • CABA, Argentina</span>
          <span className="fmc-copy">© 2026 Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}