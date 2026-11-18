import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  // Cerrar drawer mobile con tecla Escape y sincronizar ruta
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Helper para detectar la ruta activa
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="site-header" id="siteHeader">
        {/* Logo Desktop (Horizontal Master Lockup) & Logo Mobile (Monograma Gota + g) */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu} aria-label="Gekko Club Social Inicio">
          <svg
            className="brand-logo-desktop"
            viewBox="55 30 740 245"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              className="logo-droplet"
              d="M103.6,72.3c9.1-10.5,19.2-20.4,30.3-29.8,26.7,22.6,48.7,49.1,66.1,79.5,10.1,17.6,19.1,37.7,19.7,57.9.6,19.6-7.6,39.8-20.7,54.4-16.1,18-39.4,29.7-63.9,29.8-14.3,0-22-6.6-17.1-21.5,3.5-10.7,9.3-23.6,16.9-31.5,8.2-8.5,23.1-16.8,35.4-14.6,2.5,1.6,4.1,2.5,4.8,2.8,7.8,2.9,16.6-1.7,16.2-10.7-.4-10.4-13.3-15.4-20.6-7.5-.8.8-1.6,1.7-2.4,2.7-.6.7-1.3,1.2-2.2,1.6-3.2,1.3-6.8,1.8-10.8,1.5-4.7-.4-8.2-3.9-6.3-8.7.9-2.3,2.3-4.7,4.1-7.2,2.7-3.7,6.1-7.8,10.1-12.4,1.2-1.3,2.4-2.3,3.8-3,3.2-.7,5.7-.9,7.9-2.2,12.9-8.2.5-27.4-12-19.6-3.9,2.5-5.8,6.1-5.5,10.9.3,4.5-1.5,6.7-4.5,10.6-2.4,3.1-11.1,14.4-15.8,14.4-7.6,0-6-16-5.6-21,.3-3.2,1.3-6,3.2-8.2,1.5-1.8,2.5-3.3,2.9-4.3,3.2-8.1-3.6-16.7-12.3-15.6-7.5.9-12.3,9.3-8.5,16.1.3.6,1.4,2.1,4,5.3.6,1.6.6,3.3.6,5.9,0,5.5-.7,20.2-5.4,23.5-5.5,3.8-15.5-4.6-15.6-10.4,0-1.2-.1-2.7-.3-4.3-1.8-5.6-5.4-8.7-10.7-9.3-13.9-1.6-17.5,19.8-3.4,22.4,4.4.8,7.1,1.5,10,4.5,1.9,1.9,3.7,4.2,5.3,6.8,9.5,15.3,1.5,31.5-12.8,40-11.4,6.7-23.7,4.7-31.2-5.9-7.5-10.5-10.7-25.5-10-37.5.5-8.1,2.4-16.5,5.7-25.3,11.2-29.4,29.6-55.9,50.6-80.1Z"
            />
            <g className="logo-wordmark">
              <path d="M616.3,219.2h-26.1c-.2,0-.3-.1-.3-.3h0v-127.3c0-.2.1-.3.3-.3h26c.2,0,.3.1.3.3h0v76.1c0,.2.1.3.3.3.1,0,.2,0,.3-.1l26.9-36.5c0,0,.2-.1.3-.1h30.8c.2,0,.3.1.3.3,0,0,0,.2,0,.2l-31.3,40c0,.1,0,.3,0,.4l33.1,46.6c.1.1,0,.3,0,.4,0,0-.1,0-.2,0h-32.1c-.1,0-.2,0-.3-.1l-27.4-40.9c0-.1-.3-.2-.4,0,0,0-.2.2-.1.3v40.6c0,.2-.1.3-.3.3Z" />
              <path d="M520.4,219.2h-26.8c-.2,0-.3-.1-.3-.3v-127.2c0-.2.1-.3.3-.3h26.8c.2,0,.3.1.3.3v75.4c0,.2.1.3.3.3,0,0,.2,0,.2-.1l28.1-35.9c0,0,.1-.1.2-.1h30.1c.2,0,.3.1.3.3,0,0,0,.1,0,.2l-31.5,40.2c0,.1,0,.3,0,.4l33,46.5c0,.1,0,.3,0,.4,0,0-.1,0-.2,0h-32c-.1,0-.2,0-.3-.1l-27.7-41.3c0-.1-.3-.2-.4,0,0,0-.1.2-.1.3v40.9c0,.2-.1.3-.3.3Z" />
              <path d="M317.2,172.2v-24.2c20.9-.1,41.9,0,63.2,0,2.1,16.7-.6,33.7-9.3,47.3-15,23.4-43,30.6-69.5,23.4-25.3-6.8-42-27.2-46.1-53.2-2.9-18.4,3.3-38.9,15.9-52.4,26.2-27.9,75.4-27.8,100.7,1.7-6.2,7.1-12.7,13.3-19.5,18.7-4.8-5-8.8-9.1-14.7-11.9-14.6-6.8-31.6-4.8-43.4,6.2-6.3,5.9-10,13.9-10.9,23.9-1.5,16.4,5,31.6,19.5,39.6,6.4,3.5,14.1,4.8,23.1,3.8,13-1.5,23.4-9.9,25.6-22.9h-34.6Z" />
              <path d="M479.5,183.9c3.4-16.6-.7-33.4-12.9-44.5-12.7-11.6-31.1-13-46.8-7.4-22.2,7.9-33.3,31-28.6,53.7,5.1,24.5,27.5,37,51.3,35.5,13-.9,24.1-5.8,33.4-14.8l-15.5-15.5c-7,5-13.2,8.9-22.4,8.5-10.4-.5-17.5-5.6-21.1-15.4,20.7,0,41.5,0,62.6,0ZM418.2,165h0c0-8,8-14.5,18-14.5h.2c10,0,18.1,6.3,18.1,14.3h0c0,.1,0,.2-.1.2,0,0,0,0,0,0l-36,.2c0,0-.1,0-.1-.1Z" />
              <path d="M723.8,128.4h0c-26.5.6-47.5,22-46.8,47.7s22.6,46,49.1,45.3h0c26.5-.6,47.5-22,46.8-47.7s-22.6-46-49.1-45.3ZM725.9,196.3c-11.4.5-21-8.7-21.6-20.5-.5-11.9,8.3-21.9,19.6-22.4,11.4-.5,21,8.7,21.6,20.5.5,11.9-8.3,21.9-19.6,22.4Z" />
            </g>
          </svg>

          <svg
            className="brand-logo-mobile"
            viewBox="0 0 328.3 233.2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              className="logo-droplet"
              d="M90.7,0c32.7,28,59.2,61.4,78.1,99.6,5.2,10.4,9,21,11.4,31.9,3.8,16.9.5,35.5-7.2,50.8-16.1,31.9-48.1,52.2-83.9,50.9-9-.3-16.5-3.9-16.6-14.2,0-2.4.8-5.9,2.3-10.3,4.3-12.3,9.6-22.1,15.9-29.6,8.1-9.6,21.3-15,33.6-16.8,4.8-.7,8.9,3.4,12.9,4,16.2,2.1,19.6-20.7,4.8-24-8.4-1.9-10.8,3-16.4,8.1-4.3,1.4-13.9,3-17.1-1.3-2.4-3.2-1.4-6.4.6-9.9,2.9-4.8,6.9-10.1,12.1-15.9,2-2.2,4.2-3.5,6.7-4,5.1-1,8.6-3.2,10.9-7.9,5.6-11.7-9.4-22.8-19.2-14.3-4.6,4-5,9.2-4.1,15-.6,1.8-2.1,4.3-4.7,7.6-2.7,3.6-13.1,17.3-18.3,13.9-5.4-3.6-4.6-12.3-4.2-18.7.1-2.3.2-5.8,1.3-8.4.2-.5,1.5-1.9,3.7-4.4.4-.4.7-.8.9-1.3,2.3-4.8,2.1-9.2-.8-13.2-5.4-7.8-17.3-6.3-21.1,2.1-1.4,3-1.3,6.5.3,10.4,2.5,3.2,4.6,4.6,4.8,8.1.5,8.3-.4,16-2.6,23-3.3,10.5-13.4,4-17.9-2.5-.7-1.1-1.2-2.3-1.4-3.6-.5-2.7-.7-5.4-1.6-7.4-4.3-9-16.2-9.7-21.6-1-4.3,7-.5,15.9,7.6,18,.8.2,2.6.5,5.4,1,2.4,1.1,5.1,3.5,8.2,7.2,6.7,7.9,8.7,16.3,6.1,25.2-3.5,11.8-15.7,22.9-27.8,24.4-12.8,1.6-22.1-8-26.6-19.2-5-12.7-6.4-25.7-4.2-38.9,1.3-7.8,4.2-16.9,8.6-27.1,5.2-12.1,11.3-23.4,18.2-34C46.1,45.1,65.8,21.3,90.7,0Z"
            />
            <path
              className="logo-wordmark"
              d="M328.3,53.4h-32.3v8.9c-7.1-5.9-16.4-9.6-25.7-10.6-29.2-3-54.1,15.9-60.5,44.3-4.4,19.8-.2,42,13.7,56.8,15.2,16.2,37.5,22,58.1,14.2,4.8-1.8,9.5-4.9,14.3-9.4.1,7.6.1,12.4,0,14.3-1.3,15.1-12.2,23.3-27,24.4-9.3.7-18.1-1.8-26.5-7.3-2.3-1.5-5.5-4.5-9.5-9l-22.5,21.1c8.5,11.9,23,19.9,37.3,23.1,31.2,6.9,66.4-2.5,77.3-35.6,2.2-6.7,3.3-12.7,3.3-18.1-.1-39.1-.1-78.2,0-117.4ZM270.9,139.9c-17.1.9-28.1-11.5-28.9-27.8-.8-16.3,8.9-29.7,26-30.5,17.1-.8,28.1,11.5,28.9,27.8.8,16.3-8.9,29.7-26,30.5Z"
            />
          </svg>
        </Link>

        {/* Center Links (Navegación Desktop) */}
        <nav className="main-nav" aria-label="Navegación principal">
          <Link
            to="/#asociacion"
            className={`nav-item ${isActive('/') ? 'active' : ''}`}
            aria-current={isActive('/') && !location.hash ? 'page' : undefined}
          >
            La Asociación
          </Link>
          <Link
            to="/geneticas"
            className={`nav-item ${isActive('/geneticas') ? 'active' : ''}`}
            aria-current={isActive('/geneticas') ? 'page' : undefined}
          >
            Genéticas
          </Link>
          <Link
            to="/cultivos"
            className={`nav-item ${isActive('/cultivos') ? 'active' : ''}`}
            aria-current={isActive('/cultivos') ? 'page' : undefined}
          >
            Cultivo
          </Link>
          <Link to="/#faq" className={`nav-item ${location.hash === '#faq' ? 'active' : ''}`}>
            Preguntas Frecuentes
          </Link>
          <Link to="/#contacto" className={`nav-item ${location.hash === '#contacto' ? 'active' : ''}`}>
            Contacto
          </Link>
        </nav>

        {/* Right Header Actions (ThemeToggle + CTA Asociarse + Burger agrupados) */}
        <div className="header-actions">
          <ThemeToggle />

          <Link
            to="/asociarse"
            className={`pill-btn pill-primary ${isActive('/asociarse') ? 'active' : ''}`}
            aria-current={isActive('/asociarse') ? 'page' : undefined}
          >
            Asociarse
          </Link>

          {/* Hamburguesa Mobile */}
          <button
            type="button"
            className="burger-btn"
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobileMenuDrawer"
          >
            <span className="burger-line" aria-hidden="true"></span>
            <span className="burger-line" aria-hidden="true"></span>
          </button>
        </div>
      </header>

      {/* Drawer Mobile controlado por estado */}
      <nav
        id="mobileMenuDrawer"
        aria-label="Menú móvil"
        className={`mobile-menu-drawer ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? '' : undefined}
      >
        <Link to="/#asociacion" className="mobile-nav-link" onClick={closeMobileMenu}>
          La Asociación
        </Link>
        <Link to="/geneticas" className="mobile-nav-link" onClick={closeMobileMenu}>
          Genéticas
        </Link>
        <Link to="/cultivos" className="mobile-nav-link" onClick={closeMobileMenu}>
          Cultivo
        </Link>
        <Link to="/#faq" className="mobile-nav-link" onClick={closeMobileMenu}>
          Preguntas Frecuentes
        </Link>
        <Link to="/#contacto" className="mobile-nav-link" onClick={closeMobileMenu}>
          Contacto
        </Link>
        
        <div className="mobile-actions">
          <a
            href="https://wa.me/5491199999999?text=Hola%20Gekko%2C%20soy%20socio%20y%20deseo%20acceder"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-secondary"
            onClick={closeMobileMenu}
          >
            Acceso Socios
          </a>
          <Link to="/asociarse" className="pill-btn pill-primary" onClick={closeMobileMenu}>
            Asociarse
          </Link>
        </div>
      </nav>
    </>
  );
}