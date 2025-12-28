import React from 'react';
import Section from './Section';

export default function Education() {
  return (
    <Section title="Educación">
      <div className="bg-white p-8 rounded-xl shadow-sm border-l-8 border-blue-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Tecnicatura en Análisis de Sistemas de Computación</h3>
          <p className="text-gray-600 text-lg">Instituto Superior del Milagro N°8207</p>
        </div>
        <div className="bg-blue-100 text-blue-800 font-bold px-6 py-2 rounded-full">
          2024 – 2025
        </div>
      </div>
    </Section>
  );
}