// src/pages/Geneticas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Geneticas.css';
import cogolloLight from '../assets/cogollo_light.jpeg';
import cogolloDark from '../assets/cogollo_dark.jpeg';
import foto1 from '../assets/1.jpeg';
import foto2 from '../assets/2.jpeg';

const strainsData = [
  {
    id: 'frutilato',
    name: 'Frutilato',
    badge: '● Híbrida Cítrica',
    thcPill: 'THC 21.4%',
    imgLight: cogolloLight,
    imgDark: cogolloDark,
    altText: 'Flor de cannabis Frutilato',
    terpenes: 'Limoneno • Mirceno • Cariofileno',
    desc: 'Destaca por un aroma dulzón intenso a frutas maduras y notas cremosas. Brinda una experiencia equilibrada, óptima para aliviar tensiones diarias sin perder foco.',
    specs: [
      { label: 'Ratio CBD / THC', val: 'Equilibrado' },
      { label: 'Maduración', val: '8-9 Semanas' }
    ]
  },
  {
    id: 'king-juice',
    name: 'King Juice',
    badge: '● Sativa Dominante',
    thcPill: 'THC 23.0%',
    imgLight: foto1,
    imgDark: foto1,
    altText: 'Flor de cannabis King Juice',
    terpenes: 'Terpinoleno • Pineno • Ocimeno',
    desc: 'Genética vibrante caracterizada por un perfil cítrico punzante y tropical. Recomendada para momentos de estimulación creativa, claridad mental y energía.',
    specs: [
      { label: 'Aroma', val: 'Cítrico Tropical' },
      { label: 'Maduración', val: '9-10 Semanas' }
    ]
  },
  {
    id: 'cuban-affair',
    name: 'Cuban Affair',
    badge: '● Indica Dominante',
    thcPill: 'THC 24.2%',
    imgLight: foto2,
    imgDark: foto2,
    altText: 'Flor de cannabis Cuban Affair',
    terpenes: 'Cariofileno • Linalool • Humuleno',
    desc: 'Variedad caracterizada por su alta concentración de tricomas cristalinos y matices terrosos con especias. Brinda profunda relajación corporal y bienestar nocturno.',
    specs: [
      { label: 'Resina', val: 'Alta Densidad' },
      { label: 'Maduración', val: '8 Semanas' }
    ]
  }
];

export default function Geneticas() {
  return (
    <main className="page-container">
      {/* Page Header */}
      <section className="page-header">
        <div className="eyebrow-badge">
          <span className="amber-dot"></span>
          <span>Perfil Terpénico &amp; Estabilidad</span>
        </div>
        <h1 className="page-title">Genéticas Selectas</h1>
        <p className="page-subtitle">
          Desarrolladas bajo estrictos controles fitoterapéuticos. Variedades con perfiles de cannabinoides y terpenos optimizados para el bienestar integral de nuestros socios.
        </p>
      </section>

      {/* Cards Grid */}
      <section className="strains-grid">
        {strainsData.map((strain, idx) => (
          <article className="strain-card" key={strain.id}>
            <div className="strain-img-wrapper">
              <span className="strain-badge">{strain.badge}</span>
              <span className="strain-thc-pill">{strain.thcPill}</span>
              <img
                className="strain-img light-only"
                src={strain.imgLight}
                alt={strain.altText}
                fetchPriority={idx === 0 ? 'high' : undefined}
                loading={idx === 0 ? undefined : 'lazy'}
                decoding="async"
              />
              <img
                className="strain-img strain-img-blend dark-only"
                src={strain.imgDark}
                alt={strain.altText}
                fetchPriority={idx === 0 ? 'high' : undefined}
                loading={idx === 0 ? undefined : 'lazy'}
                decoding="async"
              />
            </div>
            <div className="strain-content">
              <h2 className="strain-name">{strain.name}</h2>
              <div className="strain-terpenes">{strain.terpenes}</div>
              <p className="strain-desc">{strain.desc}</p>

              <div className="strain-specs-row">
                {strain.specs.map((spec, index) => (
                  <div className="spec-item" key={index}>
                    <span className="spec-item-label">{spec.label}</span>
                    <span className="spec-item-val">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Lab Traceability Banner */}
      <section className="lab-traceability-banner">
        <div className="lab-banner-copy">
          <span className="lab-banner-eyebrow">● CONTROL CROMATOGRÁFICO POR LOTE</span>
          <p className="lab-banner-text">
            Todas nuestras variedades cuentan con certificado analítico de potencia y ausencia de contaminantes.
          </p>
        </div>
        <Link to="/asociarse" className="pill-btn pill-primary lab-banner-cta">
          SOLICITAR ADMISIÓN ↗
        </Link>
      </section>
    </main>
  );
}