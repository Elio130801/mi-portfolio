import React from 'react';
import { Folder, Github, ExternalLink } from 'lucide-react';

export default function Projects({ data }) {
  const projects = data?.items || [];

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {/* Título de la sección */}
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-200 lg:text-3xl">
        {data.title}
      </h2>

      {/* CAMBIO PRINCIPAL AQUÍ: */}
      {/* Usamos 'grid-cols-1' siempre, para que esten uno debajo del otro */}
      <div className="grid grid-cols-1 gap-6"> 
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group block bg-slate-800 rounded-md p-6 transition-all hover:-translate-y-2 hover:bg-slate-700/50 relative z-10"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Cabecera con iconos */}
                <div className="flex justify-between items-center mb-6">
                  <Folder size={36} className="text-teal-400" />
                  <div className="flex gap-4 text-slate-400">
                    <Github size={20} className="hover:text-teal-400 transition-colors" />
                    <ExternalLink size={20} className="hover:text-teal-400 transition-colors" />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-teal-400 transition-colors">
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
          </a>
        ))}
      </div>
    </section>
  );
}