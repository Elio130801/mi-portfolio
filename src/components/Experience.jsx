import React from 'react';

export default function Experience({ data }) {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {/* Título de la sección siempre visible */}
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-200 lg:text-3xl">
        {data.title}
      </h2>

      {/* Contenedor de la línea vertical (Timeline) */}
      <div className="relative border-l border-slate-800 ml-3">
        {data.jobs.map((job, idx) => (
          <div key={idx} className="mb-12 ml-8 relative group">
            
            {/* EL PUNTO (DOT) DE LA LÍNEA DE TIEMPO */}
            {/* Se posiciona absoluto a la izquierda para caer sobre la línea */}
            <span className="absolute -left-9.75 top-1.5 h-4 w-4 rounded-full border-2 border-slate-900 bg-teal-400 shadow-[0_0_0_4px_#0f172a]"></span>
            
            {/* Título del Rol */}
            <h3 className="text-xl font-bold text-teal-400 flex items-center">
              {job.role}
            </h3>

            {/* Empresa y Fecha */}
            <div className="mb-4 text-sm font-semibold text-slate-500">
              {job.company} • {job.date}
            </div>

            {/* Descripción */}
            <p className="mb-4 text-base leading-relaxed text-slate-400">
              {job.desc}
            </p>

            {/* TAGS / TECNOLOGÍAS (Estilo píldora verde) */}
            {job.technologies && (
              <div className="flex flex-wrap gap-2 mt-4">
                {job.technologies.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20 transition-colors hover:bg-teal-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}