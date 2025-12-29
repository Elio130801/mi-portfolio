import React from 'react';

export default function About({ data }) {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-200 lg:text-3xl">
        {data.title}
      </h2>
      <div className="text-lg leading-relaxed text-slate-400">
        <p className="mb-4">{data.p1}</p>
        <p>{data.p2}</p>
      </div>
    </section>
  );
}