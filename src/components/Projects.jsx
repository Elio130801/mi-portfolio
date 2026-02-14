import React from 'react';
import { Folder, Github, ExternalLink, Lock } from 'lucide-react'; // 1. Importamos el candado

export default function Projects({ data }) {
  const projects = data?.items || [];

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {/* Título de la sección */}
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-200 lg:text-3xl">
        {data.title}
      </h2>

      <div className="grid grid-cols-1 gap-6"> 
        {projects.map((project, idx) => {
          
          // 2. LÓGICA: ¿Tiene link o está vacío?
          const hasLink = project.link && project.link.trim() !== "";
          
          // 3. ELEGIMOS ETIQUETA: 'a' si es link, 'div' si es privado
          const Tag = hasLink ? 'a' : 'div';

          return (
            <Tag
              key={idx}
              // Solo ponemos href si hay link
              href={hasLink ? project.link : undefined}
              target={hasLink ? "_blank" : undefined}
              rel={hasLink ? "noreferrer" : undefined}
              
              // 4. CLASES CONDICIONALES:
              // - Si hay Link: cursor-pointer, hover con salto (-translate-y-2)
              // - Si es Privado: cursor-default, sin salto, un poco más transparente (opacity-90)
              className={`group block bg-slate-800 rounded-md p-6 relative z-10 transition-all ${
                hasLink 
                  ? 'hover:-translate-y-2 hover:bg-slate-700/50 cursor-pointer' 
                  : 'cursor-default opacity-90'
              }`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Cabecera con iconos */}
                  <div className="flex justify-between items-center mb-6">
                    
                    {/* IZQUIERDA: Carpeta o Candado */}
                    {hasLink ? (
                      <Folder size={36} className="text-teal-400" />
                    ) : (
                      <div className="flex items-center gap-2 text-slate-400 font-semibold uppercase tracking-wide text-xs">
                        <Lock size={24} className="text-slate-400" />
                        <span>Privado</span>
                      </div>
                    )}

                    {/* DERECHA: Github/Link o Nada */}
                    {hasLink && (
                      <div className="flex gap-4 text-slate-400">
                        <Github size={20} className="hover:text-teal-400 transition-colors" />
                        <ExternalLink size={20} className="hover:text-teal-400 transition-colors" />
                      </div>
                    )}
                  </div>

                  {/* Título */}
                  <h3 className={`text-xl font-bold text-slate-200 mb-2 transition-colors ${hasLink ? 'group-hover:text-teal-400' : ''}`}>
                    {project.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tecnologías */}
                <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-auto text-xs font-mono text-slate-400">
                  {project.technologies.map((tech, techIdx) => (
                    <li key={techIdx}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}