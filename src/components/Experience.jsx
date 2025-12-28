import React from 'react';
import Section from './Section';

export default function Experience() {
  const experience = [
    {
      role: "Desarrollador Full Stack",
      type: "Freelance / Proyecto Independiente",
      period: "Mar 2025 – Dic 2025",
      projects: [
        {
          title: "Sistema de Gestión de Manufactura Textil",
          desc: "Desarrollo integral de una plataforma para la fabricación de prendas masculinas, incluyendo módulos de gestión de pedidos y control de perfiles de usuario."
        },
        {
          title: "Optimización de Costos",
          desc: "Implementación de un motor de cálculo automatizado para determinar costos de fabricación en tiempo real, mejorando la precisión financiera."
        },
        {
          title: "E-commerce de Tecnología",
          desc: "Diseño y despliegue de una aplicación web dedicada a la venta de componentes informáticos, con interfaz dinámica y gestión de catálogo."
        }
      ]
    }
  ];

  return (
    <Section title="Experiencia Destacada" className="bg-white">
      <div className="space-y-12">
        {experience.map((job, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            {/* Timeline visual para desktop */}
            <div className="hidden md:block absolute left-34 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="md:flex gap-12 group">
              {/* Columna Izquierda: Fechas y Rol */}
              <div className="md:w-32 shrink-0 md:text-right relative">
                <span className="text-sm font-bold text-blue-600 block mb-1">{job.period}</span>
                <div className="hidden md:block absolute right-[-1.9rem] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white ring-2 ring-blue-100"></div>
              </div>

              {/* Columna Derecha: Detalles */}
              <div className="grow pb-12 border-b border-gray-100 last:border-0 last:pb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.role}</h3>
                <p className="text-gray-500 font-medium mb-6 flex items-center gap-2">
                  {job.type}
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {job.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition cursor-default">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-start justify-between">
                        {proj.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-snug">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}