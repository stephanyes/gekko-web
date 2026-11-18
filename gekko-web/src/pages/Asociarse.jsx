// src/pages/Asociarse.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Asociarse.css';

export default function Asociarse() {
  const formSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth <= 1024 && formSectionRef.current) {
      const timer = setTimeout(() => {
        if (!formSectionRef.current) return;
        const headerOffset = 92;
        const elementPosition = formSectionRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementPosition - headerOffset),
          behavior: 'smooth',
        });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.key]);

  const [formData, setFormData] = useState({
    nombre: '',
    codigoArea: '',
    celular: '',
    email: '',
    reprocann: '',
    asunto: '',
    consulta: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'codigoArea' || name === 'celular') {
      const soloNumeros = value.replace(/[^\d\s-]/g, '');
      setFormData((prev) => ({ ...prev, [name]: soloNumeros }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInvalidSync = (e) => {
    const field = e.target;
    const errorId = field.dataset.error;
    if (!errorId) return;
    if (!field.validity.valid) {
      field.setAttribute('aria-describedby', errorId);
    } else {
      field.removeAttribute('aria-describedby');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulación de envío de formulario
    setTimeout(() => {
      setStatus('submitted');
      setFormData({
        nombre: '',
        codigoArea: '',
        celular: '',
        email: '',
        reprocann: '',
        asunto: '',
        consulta: ''
      });

      // Restaurar estado del botón a los 3 segundos
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 800);
  };
  return (
    <main className="admissions-main">
      <div className="admissions-container">
        <div className="admissions-grid">
          {/* Columna Izquierda: Copys de la marca + 3 Pasos de Admisión */}
          <section className="admissions-copy">
            <div className="admissions-eyebrow">
              <span className="eyebrow-dot"></span>
              <span className="eyebrow-text">ADMISIÓN DE SOCIOS</span>
            </div>

            <h1 className="admissions-headline">
              Hablemos de acceso <span className="headline-accent">medicinal responsable.</span>
            </h1>

            <p className="admissions-paragraph">
              Escribinos para consultas sobre requisitos de ingreso, vinculación en REPROCANN y disponibilidad de cupos en nuestra Asociación Civil. Te responderemos a la brevedad con información clara y trazable.
            </p>

            <div className="admissions-steps">
              <div className="step-card">
                <span className="step-badge">1</span>
                <div className="step-content">
                  <h3>Registro REPROCANN o Indicación Médica</h3>
                  <p>Verificamos el estado de tu credencial vigente o te orientamos con profesionales médicos vinculados.</p>
                </div>
              </div>
              <div className="step-card">
                <span className="step-badge">2</span>
                <div className="step-content">
                  <h3>Entrevista de Admisión &amp; Consentimiento</h3>
                  <p>Evaluación personalizada para asignar el perfil fitoterapéutico adecuado a tu tratamiento.</p>
                </div>
              </div>
              <div className="step-card">
                <span className="step-badge">3</span>
                <div className="step-content">
                  <h3>Vinculación Formal &amp; Acceso en CABA</h3>
                  <p>Alta como socio activo bajo Ley 27.350 con trazabilidad por lote y logística segura.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Columna Derecha: Tarjeta con Formulario */}
          <section
            id="formulario-admision"
            ref={formSectionRef}
            className="admissions-form-section"
          >
            <div className="form-card">
              <div className="form-header">
                <h2 className="form-header-title">Enviar solicitud</h2>
                <span className="form-header-pill">● PORTAL SOCIOS</span>
              </div>

              <form className="admissions-form" onSubmit={handleSubmit}>
                {/* Fila 1: Nombre */}
                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">
                    NOMBRE *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    className="form-input"
                    required
                    data-error="nombre-error"
                    placeholder="Tu nombre y apellido"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleInvalidSync}
                  />
                  <div id="nombre-error" className="form-error-msg">
                    <span role="img" aria-label="Error">❌</span> Ingresá tu nombre y apellido completo.
                  </div>
                </div>

                {/* Fila 2: Teléfono (Código de Área + Celular) */}
                <div className="form-row-phone">
                  <div className="form-group">
                    <label htmlFor="codigoArea" className="form-label">
                      CÓD. ÁREA
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-area-code"
                      id="codigoArea"
                      name="codigoArea"
                      className="form-input"
                      maxLength={5}
                      placeholder="11 (sin 0)"
                      value={formData.codigoArea}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="celular" className="form-label">
                      CELULAR
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-local"
                      id="celular"
                      name="celular"
                      className="form-input"
                      maxLength={12}
                      placeholder="1234 5678 (sin 15)"
                      value={formData.celular}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Fila 3: Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="form-input"
                    required
                    data-error="email-error"
                    placeholder="tuemail@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleInvalidSync}
                  />
                  <div id="email-error" className="form-error-msg">
                    <span role="img" aria-label="Error">❌</span> Ingresá un correo válido (ej: tuemail@ejemplo.com).
                  </div>
                </div>

                {/* Fila 4: Estado REPROCANN */}
                <div className="form-group">
                  <label htmlFor="reprocann" className="form-label">
                    ESTADO REPROCANN
                  </label>
                  <select
                    id="reprocann"
                    name="reprocann"
                    className="form-select"
                    required
                    value={formData.reprocann}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Seleccioná tu estado actual
                    </option>
                    <option value="aprobado">Trámite aprobado</option>
                    <option value="en_curso">Trámite en curso</option>
                    <option value="no_tengo">No tengo</option>
                  </select>
                </div>

                {/* Fila 5: Asunto */}
                <div className="form-group">
                  <label htmlFor="asunto" className="form-label">
                    ASUNTO *
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    className="form-input"
                    required
                    placeholder="Motivo de tu mensaje"
                    value={formData.asunto}
                    onChange={handleChange}
                  />
                </div>

                {/* Fila 6: Consulta */}
                <div className="form-group">
                  <label htmlFor="consulta" className="form-label">
                    CONSULTA *
                  </label>
                  <textarea
                    id="consulta"
                    name="consulta"
                    className="form-textarea"
                    required
                    placeholder="Escribí aquí tu mensaje o consulta sobre vinculación..."
                    value={formData.consulta}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Botón Submit + Nota de Confidencialidad */}
                <div className="form-footer">
                  <span className="form-privacy-note">
                    🔒 Datos resguardados bajo confidencialidad médica (Ley 25.326).
                  </span>
                  <button
                    type="submit"
                    className="pill-btn pill-primary form-submit-btn"
                    disabled={status === 'submitting'}
                    style={{
                      opacity: status === 'submitting' ? 0.75 : 1,
                      backgroundColor: status === 'submitted' ? '#244b3a' : undefined
                    }}
                  >
                    {status === 'submitting'
                      ? 'ENVIANDO...'
                      : status === 'submitted'
                      ? 'SOLICITUD ENVIADA'
                      : 'ENVIAR CONSULTA'}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}