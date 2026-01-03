import React, { useState, useEffect } from 'react';
import { content } from './data';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [lang, setLang] = useState('es'); 
  const [activeSection, setActiveSection] = useState('about');
  const t = content[lang]; 

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break; 
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 font-sans selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        
        {/* CAMBIO AQUÍ: Agregué 'lg:items-start' para evitar que se estire el sidebar */}
        <div className="lg:flex lg:justify-between lg:gap-4 lg:items-start">
          
          <Sidebar t={t} lang={lang} setLang={setLang} />

          <main className="pt-24 lg:w-1/2 lg:py-24 lg:ml-auto">
            <About data={t.about} />
            <Experience data={t.experience} />
            <Projects data={t.projects} />
            <Education data={t.education} />
            <Skills data={t.skills} />
            <Contact data={t.contact} email="suffielio1@gmail.com" />
            
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>© 2025 Elio Tomas Suffi. All rights reserved. v1.1.0.</p>
            </footer>
          </main>
          
        </div>
      </div>
    </div>
  );
}