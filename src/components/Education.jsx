import React from 'react';

export default function Education({ data }) {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {/* Título de la sección */}
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-200 lg:text-3xl">
        {data.title}
      </h2>

      {/* Línea de tiempo */}
      <div className="relative border-l border-slate-800 ml-3">
        {data.items.map((edu, idx) => (
          <div key={idx} className="mb-12 ml-8 relative">
            
            {/* Punto en la línea */}
            <span className="absolute -left-9.75 top-1.5 h-4 w-4 rounded-full border-2 border-slate-900 bg-teal-400 shadow-[0_0_0_4px_#0f172a]"></span>
            
            {/* Título del Título/Carrera */}
            <h3 className="text-xl font-bold text-teal-400">
              {edu.degree}
            </h3>
            
            {/* Institución y Año */}
            <div className="mb-2 text-sm font-semibold text-slate-500">
              {edu.school} • {edu.year}
            </div>

            {/* Descripción (si existe en data.js) */}
            {edu.description && (
                <p className="text-base leading-relaxed text-slate-400">
                {edu.description}
                </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}