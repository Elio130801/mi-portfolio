import React from 'react';

export default function Section({ title, children, className = "" }) {
  return (
    <section className={`py-16 px-6 max-w-5xl mx-auto ${className}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 inline-block pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}