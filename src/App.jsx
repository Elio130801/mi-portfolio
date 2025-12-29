// src/App.jsx
import React, { useState } from 'react';
import { content } from './data'; // Importamos los textos
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [lang, setLang] = useState('es'); // Estado del idioma
  const t = content[lang]; // Seleccionamos textos según idioma

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 font-sans selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* COLUMNA IZQUIERDA (Sidebar) */}
          <Sidebar t={t} lang={lang} setLang={setLang} />

          {/* COLUMNA DERECHA (Contenido) */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About data={t.about} />
            <Experience data={t.experience} />
            <Education data={t.education} />
            <Skills data={t.skills} />
            <Contact data={t.contact} email="suffielio1@gmail.com" />
            
            {/* Footer pequeño */}
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>© 2025 Elio Tomas Suffi. All rights reserved. v1.1.0.</p>
            </footer>
          </main>
          
        </div>
      </div>
    </div>
  );
}