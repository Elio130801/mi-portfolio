import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Header() {
  // Datos específicos de este componente
  const personalInfo = {
    name: "Elio Tomas Suffi",
    title: "Técnico en Análisis de Sistemas & Desarrollador Full Stack",
    location: "Salta, Argentina",
    email: "suffielio1@gmail.com",
    summary: "Desarrollador Full Stack y Técnico en Sistemas con 2 años de experiencia en el desarrollo de sistemas de gestión (ERP) y 1 año especializado en desarrollo Full Stack. Experto en transformar necesidades de negocio en soluciones digitales escalables."
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">{personalInfo.name}</h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">{personalInfo.title}</p>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 mb-8">
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <MapPin size={16} /> {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition">
                <Mail size={16} /> {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        <p className="max-w-3xl text-lg text-gray-600 leading-relaxed border-l-4 border-blue-200 pl-4">
          {personalInfo.summary}
        </p>
        
        <div className="mt-8 flex gap-4">
          <a href="https://github.com/Elio130801" className="flex items-center gap-2 text-gray-700 hover:text-black transition font-semibold">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/elio-tomas-suffi" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition font-semibold">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}