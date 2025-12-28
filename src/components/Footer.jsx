import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Elio Tomas Suffi</h2>
        <div className="flex justify-center gap-8 mb-8">
          <a href="mailto:suffielio1@gmail.com" className="hover:text-white transition">Contactar</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
        </div>
        <p className="text-sm border-t border-gray-800 pt-8">
          © {new Date().getFullYear()} Creado con React, Tailwind CSS y Vite.
        </p>
      </div>
    </footer>
  );
}