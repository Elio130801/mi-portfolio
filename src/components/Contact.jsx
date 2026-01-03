import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone } from 'lucide-react';

export default function Contact({ data, email }) {
  const form = useRef();
  const [status, setStatus] = useState(''); // Estado para feedback de envío

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // TUS CREDENCIALES DE EMAILJS
    const YOUR_SERVICE_ID = 'service_hsnaut8'; 
    const YOUR_TEMPLATE_ID = 'template_e24jmg9';
    const YOUR_PUBLIC_KEY = '2HNlz4t6TJ7mYR0Zv'; 

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset(); // Limpia el formulario al terminar
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      
      {/* Título */}
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-200 lg:text-3xl">
        {data.title}
      </h2>

      {/* Texto de invitación */}
      <p className="mb-8 text-slate-400">
        {data.text}
      </p>

      {/* CONTENEDOR DE CONTACTO (Email y Teléfono alineados) */}
      <div className="flex flex-wrap items-center gap-8 mb-12">
        {/* Email */}
        <a 
          href={`mailto:${email}`} 
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
        >
          <Mail size={20} />
          {email}
        </a>
        
        {/* Teléfono (Ahora a la derecha) */}
        <a 
          href={`tel:${data.Phone}`} 
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
        >
          <Phone size={20} />
          {data.Phone}
        </a>
      </div>

      {/* Formulario */}
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Input Nombre */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user_name" className="text-sm font-semibold text-slate-400">
              {data.labelName}
            </label>
            <input 
              type="text" 
              name="user_name" 
              required
              placeholder={data.placeholderName}
              className="rounded-md bg-slate-800/50 border border-slate-700 p-3 text-slate-200 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user_email" className="text-sm font-semibold text-slate-400">
              {data.labelEmail}
            </label>
            <input 
              type="email" 
              name="user_email" 
              required
              placeholder={data.placeholderEmail}
              className="rounded-md bg-slate-800/50 border border-slate-700 p-3 text-slate-200 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Input Mensaje */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-slate-400">
            {data.labelMessage}
          </label>
          <textarea 
            name="message" 
            rows="4" 
            required
            placeholder={data.placeholderMessage}
            className="rounded-md bg-slate-800/50 border border-slate-700 p-3 text-slate-200 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-all resize-none placeholder:text-slate-600"
          ></textarea>
        </div>

        {/* Botón Enviar */}
        <button 
          type="submit" 
          disabled={status === 'sending'}
          className="w-full rounded-md bg-teal-400 py-3 font-bold text-slate-900 transition-transform hover:-translate-y-1 hover:bg-teal-300 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-900/20"
        >
          {status === 'sending' ? data.btnSending : data.btnSend}
        </button>

        {/* Mensajes de estado (Feedback) */}
        {status === 'success' && (
          <p className="text-green-400 text-sm mt-4 text-center font-medium bg-green-400/10 py-2 rounded border border-green-400/20">
            {data.successMsg}
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-4 text-center font-medium bg-red-400/10 py-2 rounded border border-red-400/20">
            {data.errorMsg}
          </p>
        )}

      </form>
    </section>
  );
}