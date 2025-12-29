import React from 'react';

export default function Skills({ data }) {
  // Verificamos que existan categorías, si no usa un array vacío para no romper la app
  const categories = data.categories || [];

  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {/* Título Principal (Habilidades) */}
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-200 lg:text-3xl">
        {data.title}
      </h2>

      {/* Contenedor de grupos */}
      <div className="space-y-10">
        {categories.map((category, idx) => (
          <div key={idx}>
            {/* Título de la Categoría (Ej: Lenguajes) */}
            <h3 className="mb-4 text-lg font-bold text-slate-200">
              {category.name}
            </h3>

            {/* Grid de etiquetas */}
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  // Estilos: Fondo oscuro (slate-800/50), texto teal, borde redondeado levemente
                  className="flex items-center rounded-md bg-slate-800/80 px-4 py-2 text-sm font-medium text-teal-300 shadow-sm ring-1 ring-inset ring-slate-700/30 transition-all hover:-translate-y-1 hover:text-teal-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}