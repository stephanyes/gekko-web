// src/pages/Cultivos.jsx
import React, { useState } from 'react';
import './Cultivos.css';
import foto1 from '../assets/1.jpeg';
import foto2 from '../assets/2.jpeg';
import cogolloLight from '../assets/cogollo_light.jpeg';

const roomsData = [
  {
    id: 'sala-1',
    tag: '● SALA 1 • VEGETACIÓN',
    name: 'Vegetación & Madres',
    desc: 'Espacio optimizado para preservar genéticas madre selectas y promover un desarrollo radicular y vegetativo vigoroso antes de la etapa floral.',
    specs: [
      { label: 'Fotoperíodo', val: '18 / 6 hrs' },
      { label: 'Iluminación', val: 'LED Spectrum Tech' },
      { label: 'Riego', val: 'Automatizado por pulsos' }
    ],
    slides: [
      {
        src: foto2,
        alt: 'Foto Sala 1 - Visión General',
        caption: 'Vista general del dosel botánico en etapa vegetativa y nutrición controlada.'
      },
      {
        src: foto1,
        alt: 'Foto Sala 1 - Sistema de Riego',
        caption: 'Detalle de nutrición orgánica y control de humedad relativa.'
      },
      {
        src: cogolloLight,
        alt: 'Foto Sala 1 - Desarrollo Genético',
        caption: 'Estabilidad genética y selección fenotípica bajo espectro LED.'
      }
    ]
  },
  {
    id: 'sala-2',
    tag: '● SALA 2 • FLORACIÓN',
    name: 'Floración High-Density',
    desc: 'Ambiente de floración intensiva con control de temperatura, flujo de aire unidireccional y máxima intensidad fotónica para la maduración óptima de tricomas.',
    specs: [
      { label: 'Fotoperíodo', val: '12 / 12 hrs' },
      { label: 'Temperatura', val: '21°C - 24°C' },
      { label: 'Extracción', val: 'Filtrado carbón activo' }
    ],
    slides: [
      {
        src: foto1,
        alt: 'Foto Sala 2 - Floración',
        caption: 'Estructura de floración avanzada en entorno controlado y maduración de resina.'
      },
      {
        src: foto2,
        alt: 'Foto Sala 2 - Macro de flores',
        caption: 'Maduración de pistilos y densidad de tricomas botánicos.'
      },
      {
        src: cogolloLight,
        alt: 'Foto Sala 2 - Cosecha Selecta',
        caption: 'Curado hermético y monitoreo térmico continuo.'
      }
    ]
  }
];

function RoomCarousel({ slides, roomName, isFirstRoom }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="carousel-wrapper"
      aria-roledescription="carousel"
      aria-label={`Galería de ${roomName}`}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => {
          const isInitialLcp = isFirstRoom && index === 0;
          return (
            <div
              className="carousel-slide"
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${slides.length}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                fetchPriority={isInitialLcp ? 'high' : index > 0 ? 'low' : undefined}
                loading={isInitialLcp ? undefined : 'lazy'}
                decoding="async"
              />
              <div className="slide-caption">{slide.caption}</div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="carousel-btn prev"
        onClick={prevSlide}
        aria-label="Imagen anterior"
      >
        ❮
      </button>
      <button
        type="button"
        className="carousel-btn next"
        onClick={nextSlide}
        aria-label="Siguiente imagen"
      >
        ❯
      </button>

      <div className="carousel-dots" role="group" aria-label="Elegir imagen">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Ir a imagen ${index + 1}: ${slide.alt}`}
            aria-current={index === currentIndex ? 'true' : undefined}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default function Cultivos() {
  return (
    <main className="page-container">
      <section className="page-header">
        <div className="eyebrow-badge">
          <span className="amber-dot"></span>
          <span>Infraestructura Indoor</span>
        </div>
        <h1 className="page-title">Salas de Cultivo &amp; Parámetros</h1>
        <p className="page-subtitle">
          Espacios diseñados con atmósfera controlada, nutrición precisa e iluminación de última generación para asegurar la máxima estabilidad botánica y fitoterapéutica.
        </p>
      </section>

      {roomsData.map((room, roomIdx) => (
        <section className="room-section" id={room.id} key={room.id}>
          <div className="room-header">
            <div className="room-title-group">
              <span className="room-tag">{room.tag}</span>
              <h2 className="room-name">{room.name}</h2>
              <p className="room-desc">{room.desc}</p>
            </div>

            <div className="room-specs">
              {room.specs.map((spec, index) => (
                <div className="spec-pill" key={index}>
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-val">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>

          <RoomCarousel
            slides={room.slides}
            roomName={room.name}
            isFirstRoom={roomIdx === 0}
          />
        </section>
      ))}
    </main>
  );
}