import React from 'react';
import { Code, Database, Terminal, Server } from 'lucide-react';
import Section from './Section'; // Importamos la base que creamos arriba

export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3"], icon: <Code className="w-6 h-6" /> },
    { category: "Backend", items: ["Python (Django)", "APIs REST"], icon: <Server className="w-6 h-6" /> },
    { category: "Base de Datos", items: ["PostgreSQL", "MySQL"], icon: <Database className="w-6 h-6" /> },
    { category: "DevOps & Tools", items: ["Docker", "GitHub Actions", "Git", "Linux"], icon: <Terminal className="w-6 h-6" /> }
  ];

  return (
    <Section title="Habilidades Técnicas">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-200 group">
            <div className="text-blue-500 mb-4 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}