// src/components/Sidebar.jsx
import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

export default function Sidebar({ t, lang, setLang }) {
  return (
    // CAMBIO 1: Reduje lg:py-24 a lg:py-12 para subir el contenido
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Elio Tomas Suffi
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {t.role}
        </h2>

        {/* Badge Disponible */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-300 ring-1 ring-inset ring-teal-400/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          {t.badge}
        </div>

        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {t.summary}
        </p>

        {/* Navegación Desktop */}
        <nav className="nav hidden lg:block mt-16">
          <ul className="mt-16 w-max">
            {['about', 'experience', 'education', 'skills', 'contact'].map((section, idx) => (
              <li key={section}>
                <a href={`#${section}`} className="group flex items-center py-3 active text-slate-200">
                  {/* CAMBIO 2: Eliminada la numeración (0{idx + 1} —) */}
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 transition-colors">
                    {t.nav[idx]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Redes y Traductor */}
      <div className="mt-8 flex items-center gap-5">
        <a href="https://github.com/Elio130801" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-100 transition"><Github size={24} /></a>
        <a href="https://www.linkedin.com/in/elio-tomas-suffi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-100 transition"><Linkedin size={24} /></a>
        
        {/* Botón Traductor */}
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="flex items-center gap-2 px-3 py-1 rounded border border-slate-700 hover:border-teal-300 text-xs font-semibold uppercase tracking-wider text-teal-300 transition-colors cursor-pointer"
        >
          <Globe size={14} />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}