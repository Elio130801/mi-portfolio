import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-700">
      <Header />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}