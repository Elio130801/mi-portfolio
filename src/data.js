// src/data.js
// Contenido del portfolio (ES / EN). Mantener sincronizado con el CV:
// mismas experiencias, fechas y textos.
export const content = {
  es: {
    nav: ["Sobre mí", "Experiencia", "Proyectos", "Educación", "Habilidades", "Contacto"],
    role: "Analista de Sistemas | Desarrollador Full Stack",
    badge: "Disponible para trabajar · Híbrido (presencial o remoto)",
    summary: "Analista de Sistemas y Desarrollador Full Stack. React, TypeScript, Python y SQL. Uso Claude para acelerar el desarrollo sin resignar calidad.",
    about: {
      title: "Sobre mí",
      p1: "Analista de Sistemas y Desarrollador Full Stack con casi 2 años de experiencia en el desarrollo de sistemas de gestión (ERP) y aplicaciones web de punta a punta: análisis y modelado de requerimientos, diseño de bases de datos relacionales, desarrollo de frontend y backend y construcción de motores de cálculo. Stack principal: React, TypeScript, Python (Django) y SQL (PostgreSQL y MySQL). Experiencia en proyectos de manufactura textil, módulo contable (libro de compras) y gestión de vehículos de un ERP para una empresa distribuidora, control de flota con checklists, firmas digitales y una plataforma de trading.",
      p2: "Utilizo Claude (IA de Anthropic) de forma eficiente y crítica a lo largo de todo el ciclo de desarrollo (análisis, diseño, generación y refactorización de código, depuración, testing y documentación), lo que me permite acelerar entregas sin resignar calidad. Orientado a transformar necesidades de negocio en soluciones digitales escalables y a optimizar procesos."
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          role: "Desarrollador Full Stack",
          company: "Aplicación Web de Trading (Proyecto propio)",
          date: "Sep 2026 – Actualidad (versión Beta en desarrollo)",
          bullets: [
            { text: "Desarrollo individual y completo de una aplicación web para registrar y analizar operaciones de trading: frontend en React, TypeScript, Vite y Tailwind CSS; backend en Python con Django y Django REST Framework." },
            { label: "Gestión de operaciones", text: "alta, edición y eliminación de trades (activo, tipo de orden, resultado TP/SL, monto neto, estrategia y notas), con calendario mensual y balance semanal." },
            { label: "Analítica", text: "KPIs de win rate y balance, curva de equity, drawdown máximo, rachas, rendimiento por activo y comparación de activos con gráficos propios en SVG, filtrables por fecha y activo." },
            { label: "Seguridad y cuentas", text: "API REST con autenticación por token, bloqueo progresivo ante intentos fallidos de login, límite de intentos (rate limiting), validación de contraseñas, verificación de email, recuperación de contraseña y envío de correos vía Gmail API y Resend." },
            { label: "Experiencia de usuario", text: "diseño responsive (móvil, tablet y escritorio), guía interactiva de onboarding con datos de ejemplo, formulario de feedback y eliminación de cuenta." },
            { label: "Despliegue", text: "backend en Render con PostgreSQL y frontend en Vercel; control de versiones con Git y GitHub." },
            { text: "Uso de IA generativa como apoyo en diseño, generación y revisión de código, depuración y documentación, validando siempre el resultado antes de integrarlo." }
          ],
          technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL", "Render", "Vercel"]
        },
        {
          role: "Desarrollador Full Stack",
          company: "App de Checklist para Control de Flota de Camionetas",
          date: "Mar 2026 – May 2026",
          bullets: [
            { text: "Desarrollo individual y completo de una aplicación web de checklist para el control de flota de camionetas: frontend en React, Vite y Tailwind CSS; backend en Python con Django, Django REST Framework y PostgreSQL." },
            { label: "Gestión de usuarios", text: "alta, edición y baja de usuarios con roles (Supervisor, Encargado de Flota y Chofer), rutas protegidas por rol, perfil de usuario y firma digital." },
            { label: "Gestión de vehículos", text: "carga de vehículos con patente, marca, modelo, año, kilometraje, último service, vencimiento de matafuegos y documentación, con estado y baja de unidades." },
            { label: "Checklists", text: "plantillas configurables (secciones, categorías, ítems de vehículo y equipamiento, ítems críticos y alertas por valor mínimo) y flujo de inspección por pasos con registro de salida y entrada del vehículo." },
            { label: "Carga de imágenes", text: "fotos de evidencia por ítem durante la inspección, comprimidas en el navegador y almacenadas en Cloudinary." },
            { label: "Control y documentación", text: "firmas digitales del inspector y de los choferes, generación de checklists en PDF, historial de cambios (auditoría) y registro de movimientos." },
            { label: "Seguridad", text: "autenticación con JWT, bloqueo de cuenta por intentos fallidos y recuperación de contraseña por email. Frontend desplegado en Vercel." }
          ],
          technologies: ["React", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Cloudinary", "Vercel"]
        },
        {
          role: "Desarrollador Full Stack",
          company: "Omega Soluciones (empresa distribuidora)",
          date: "Ene 2026 – Feb 2026",
          bullets: [
            { text: "Desarrollo de módulos de un sistema de gestión (ERP) para una empresa distribuidora, trabajando en equipo con Git (ramas feature y fix, merges hacia develop). Stack: Next.js, React y TypeScript en el frontend; NestJS, Kysely y PostgreSQL en el backend." },
            { label: "Módulo de facturación y compras (libro de compras)", text: "tabla de control contable con cálculo de subtotales, descuentos e IVA por ítem, agrupación por fecha de compra y orden cronológico para llevar la contabilidad de la empresa." },
            { label: "Módulo de vehículos", text: "alta, edición y baja de vehículos con patente, tipo, marca, modelo, año, kilometraje, color, estado operativo, imagen, descripción y etiquetas; validación de datos con DTOs en el backend." },
            { text: "Aceleración del desarrollo y la depuración mediante herramientas de IA, manteniendo control y revisión del código." }
          ],
          technologies: ["Next.js", "React", "TypeScript", "NestJS", "Kysely", "PostgreSQL", "Git"]
        },
        {
          role: "Desarrollador Full Stack y Analista de Sistemas",
          company: "King Importados (proyecto académico en equipo)",
          date: "Mar 2025 – Dic 2025",
          bullets: [
            { text: "Desarrollo de la mayor parte de un sistema de gestión para una empresa de indumentaria masculina, trabajando sobre todos sus módulos en equipo con compañeros: frontend en React, React Router y Recharts; backend en Python con Django, Django REST Framework y MySQL." },
            { label: "Gestión de pedidos", text: "flujo por etapas y por rol (vendedor, dueño, costurero y estampador) con estados de aprobación, proceso de costura, proceso de estampado, completado y cancelado; panel del dueño con gráficos." },
            { label: "Optimización de costos", text: "motor de cálculo automatizado de costos de fabricación (materiales, mano de obra de costura y estampado) para obtener el precio unitario y total de cada pedido, mejorando la precisión financiera del proceso productivo." },
            { label: "Inventario", text: "gestión de insumos, unidades de medida y prendas con sus insumos y clasificaciones (talle, color, modelo y marca); alertas automáticas de stock bajo y descuento de stock al confirmar pedidos mediante transacciones atómicas." },
            { label: "Usuarios y seguridad", text: "autenticación con JWT (refresh y logout), rutas protegidas por rol, alta, edición y baja de usuarios con perfil y foto, y recuperación de contraseña por email con token de vencimiento." }
          ],
          technologies: ["React", "React Router", "Recharts", "Python", "Django", "Django REST Framework", "MySQL", "JWT"]
        }
      ]
    },
    projects: {
      title: "Proyectos",
      privateLabel: "Privado",
      items: [
        {
          title: "Aplicación Web de Trading",
          description: "Journal y analítica de operaciones: registro de trades, calendario con balance semanal, curva de equity, drawdown, rachas y rendimiento por activo. API REST con autenticación por token, verificación de email y recuperación de contraseña. Versión Beta en desarrollo.",
          technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL"],
          link: "https://github.com/Elio130801/trading-dashboard"
        },
        {
          title: "App de Checklist para Control de Flota de Camionetas",
          description: "Gestión de usuarios con roles, vehículos y checklists de inspección por pasos con plantillas configurables, fotos de evidencia, firmas digitales y generación de PDF.",
          technologies: ["React", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Cloudinary"],
          link: ""
        },
        {
          title: "Sistema de Gestión Textil (King Importados)",
          description: "Sistema de gestión para una empresa de indumentaria: pedidos por etapas y por rol, inventario de insumos con alertas de stock bajo y cálculo automático de costos de fabricación.",
          technologies: ["React", "Django", "Django REST Framework", "MySQL", "JWT"],
          link: "https://github.com/Elio130801/Proyecto-King-Importados"
        },
        {
          title: "TechStore - Landing Page",
          description: "Landing page moderna diseñada para una tienda de tecnología. El proyecto destaca por su diseño Dark UI inmersivo, integración de efectos de luz interactivos (Mouse Spotlight) y componentes de vidrio (Glassmorphism). Totalmente responsiva y optimizada para SEO y performance. Incluye catálogo dinámico con \"Infinite Scroll\" y secciones de contacto integradas.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
          link: "https://github.com/Elio130801/techstore-landing"
        }
      ]
    },
    education: {
      title: "Educación",
      items: [
        {
          degree: "Tecnicatura en Análisis de Sistemas de Computación",
          school: "Instituto Superior del Milagro N°8207",
          year: "2024 – 2025",
          description: "Formación integral en análisis, diseño y desarrollo de software."
        },
        {
          degree: "Bachiller en Economía y Administración",
          school: "BSPA N°7062",
          year: "2023",
          description: "Formación secundaria con énfasis en economía, administración y gestión empresarial."
        }
      ]
    },
    skills: {
      title: "Habilidades",
      categories: [
        { name: "Lenguajes", items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL", "HTML5", "CSS3"] },
        { name: "Frontend", items: ["React", "Next.js", "React Native", "Vite", "Recharts", "TanStack Query", "React Hook Form", "React Router", "Axios", "Tailwind CSS", "Bootstrap", "Diseño responsive", "Gráficos en SVG", "Generación de PDF (react-pdf, jsPDF)"] },
        { name: "Backend y frameworks", items: ["Node.js", "NestJS", "Django", "Django REST Framework", "Spring Boot", ".NET Framework", "Kysely", "APIs REST", "Autenticación por token y JWT", "Roles y permisos", "Rate limiting", "Cloudinary", "Auditoría de cambios"] },
        { name: "Bases de datos", items: ["PostgreSQL", "MySQL", "Firebase", "Supabase", "Modelado relacional", "Consultas SQL"] },
        { name: "Herramientas y DevOps", items: ["Git", "GitHub", "Docker", "Linux", "Bash", "Postman", "Entornos virtuales de Python (venv)", "Despliegue en Render y Vercel"] },
        { name: "Análisis y modelado", items: ["UML (Lenguaje Unificado de Modelado)", "Diagramas de flujo", "Diagramas Entidad-Relación", "Análisis de requerimientos"] },
        { name: "Metodologías", items: ["Scrum", "Trabajo en equipo con Git (ramas feature/fix, merges)"] },
        { name: "Inteligencia Artificial", items: ["Claude (Anthropic) como herramienta principal de trabajo", "Desarrollo asistido por IA", "LLMs", "Prompt engineering", "Automatización de tareas", "Documentación y testing asistidos por IA"] },
        { name: "Idiomas", items: ["Español: nativo", "Inglés: nivel de lectura técnica (documentación y código)"] }
      ]
    },
    contact: {
      title: "Contacto",
      text: "¿Tienes un proyecto en mente o quieres conversar? ¡Envíame un mensaje!",
      labelName: "Nombre",
      labelEmail: "Email",
      labelMessage: "Mensaje",
      placeholderName: "Tu nombre",
      placeholderEmail: "tu@email.com",
      placeholderMessage: "Escribe tu mensaje aquí...",
      btnSend: "Enviar Mensaje",
      btnSending: "Enviando...",
      successMsg: "¡Mensaje enviado con éxito! Te responderé pronto.",
      errorMsg: "Hubo un error al enviar. Por favor intenta de nuevo.",
      Phone: "3876317767"
    },
    footer: "© 2026 Elio Tomas Suffi. Todos los derechos reservados. v1.1.0."
  },

  en: {
    nav: ["About", "Experience", "Projects", "Education", "Skills", "Contact"],
    role: "Systems Analyst | Full Stack Developer",
    badge: "Available for work · Hybrid (on-site or remote)",
    summary: "Systems Analyst and Full Stack Developer. React, TypeScript, Python and SQL. I use Claude to speed up development without sacrificing quality.",
    about: {
      title: "About Me",
      p1: "Systems Analyst and Full Stack Developer with almost 2 years of experience building management systems (ERP) and end-to-end web applications: requirements analysis and modeling, relational database design, frontend and backend development, and calculation engines. Main stack: React, TypeScript, Python (Django) and SQL (PostgreSQL and MySQL). Experience in textile manufacturing, an accounting module (purchase ledger) and vehicle management for an ERP at a distribution company, fleet control with checklists and digital signatures, and a trading platform.",
      p2: "I use Claude (Anthropic's AI) efficiently and critically throughout the whole development cycle (analysis, design, code generation and refactoring, debugging, testing and documentation), which lets me deliver faster without sacrificing quality. Focused on turning business needs into scalable digital solutions and optimizing processes."
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "Full Stack Developer",
          company: "Trading Web Application (Personal Project)",
          date: "Sep 2026 – Present (Beta version in development)",
          bullets: [
            { text: "Solo, end-to-end development of a web application to record and analyze trading operations: frontend in React, TypeScript, Vite and Tailwind CSS; backend in Python with Django and Django REST Framework." },
            { label: "Trade management", text: "create, edit and delete trades (asset, order type, TP/SL result, net amount, strategy and notes), with a monthly calendar and weekly balance." },
            { label: "Analytics", text: "win rate and balance KPIs, equity curve, maximum drawdown, streaks, per-asset performance and asset comparison with custom SVG charts, filterable by date and asset." },
            { label: "Security and accounts", text: "REST API with token authentication, progressive lockout after failed login attempts, rate limiting, password validation, email verification, password recovery and email delivery through the Gmail API and Resend." },
            { label: "User experience", text: "responsive design (mobile, tablet and desktop), interactive onboarding tour with sample data, feedback form and account deletion." },
            { label: "Deployment", text: "backend on Render with PostgreSQL and frontend on Vercel; version control with Git and GitHub." },
            { text: "Use of generative AI as support for design, code generation and review, debugging and documentation, always validating the result before integrating it." }
          ],
          technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL", "Render", "Vercel"]
        },
        {
          role: "Full Stack Developer",
          company: "Checklist App for Pickup Truck Fleet Control",
          date: "Mar 2026 – May 2026",
          bullets: [
            { text: "Solo, end-to-end development of a checklist web application for pickup truck fleet control: frontend in React, Vite and Tailwind CSS; backend in Python with Django, Django REST Framework and PostgreSQL." },
            { label: "User management", text: "create, edit and remove users with roles (Supervisor, Fleet Manager and Driver), role-protected routes, user profile and digital signature." },
            { label: "Vehicle management", text: "vehicle records with license plate, make, model, year, mileage, last service, fire extinguisher expiry date and documentation, with status and vehicle removal." },
            { label: "Checklists", text: "configurable templates (sections, categories, vehicle and equipment items, critical items and minimum-value alerts) and a step-by-step inspection flow recording vehicle check-out and check-in." },
            { label: "Image upload", text: "evidence photos per item during the inspection, compressed in the browser and stored in Cloudinary." },
            { label: "Control and documentation", text: "digital signatures of the inspector and the drivers, PDF checklist generation, change history (audit trail) and movement log." },
            { label: "Security", text: "JWT authentication, account lockout after failed attempts and password recovery by email. Frontend deployed on Vercel." }
          ],
          technologies: ["React", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Cloudinary", "Vercel"]
        },
        {
          role: "Full Stack Developer",
          company: "Omega Soluciones (distribution company)",
          date: "Jan 2026 – Feb 2026",
          bullets: [
            { text: "Development of modules for a management system (ERP) for a distribution company, working in a team with Git (feature and fix branches, merges into develop). Stack: Next.js, React and TypeScript on the frontend; NestJS, Kysely and PostgreSQL on the backend." },
            { label: "Billing and purchasing module (purchase ledger)", text: "accounting control table with per-item subtotal, discount and VAT calculation, grouping by purchase date and chronological ordering to keep the company's books." },
            { label: "Vehicles module", text: "create, edit and remove vehicles with license plate, type, make, model, year, mileage, color, operational status, image, description and tags; data validation with DTOs on the backend." },
            { text: "Faster development and debugging with AI tools, keeping control and review of the code." }
          ],
          technologies: ["Next.js", "React", "TypeScript", "NestJS", "Kysely", "PostgreSQL", "Git"]
        },
        {
          role: "Full Stack Developer and Systems Analyst",
          company: "King Importados (academic team project)",
          date: "Mar 2025 – Dec 2025",
          bullets: [
            { text: "Development of most of a management system for a men's clothing company, working on all of its modules as part of a team of classmates: frontend in React, React Router and Recharts; backend in Python with Django, Django REST Framework and MySQL." },
            { label: "Order management", text: "stage- and role-based workflow (salesperson, owner, seamstress and printer) with approval, sewing, printing, completed and cancelled states; owner dashboard with charts." },
            { label: "Cost optimization", text: "automated manufacturing cost engine (materials, sewing labor and printing) to get the unit and total price of each order, improving the financial accuracy of the production process." },
            { label: "Inventory", text: "management of supplies, units of measure and garments with their supplies and classifications (size, color, model and brand); automatic low-stock alerts and stock deduction when orders are confirmed through atomic transactions." },
            { label: "Users and security", text: "JWT authentication (refresh and logout), role-protected routes, create, edit and remove users with profile and photo, and password recovery by email with an expiring token." }
          ],
          technologies: ["React", "React Router", "Recharts", "Python", "Django", "Django REST Framework", "MySQL", "JWT"]
        }
      ]
    },
    projects: {
      title: "Projects",
      privateLabel: "Private",
      items: [
        {
          title: "Trading Web Application",
          description: "Trade journal and analytics: trade logging, calendar with weekly balance, equity curve, drawdown, streaks and per-asset performance. REST API with token authentication, email verification and password recovery. Beta version in development.",
          technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL"],
          link: "https://github.com/Elio130801/trading-dashboard"
        },
        {
          title: "Checklist App for Pickup Truck Fleet Control",
          description: "User management with roles, vehicles and step-by-step inspection checklists with configurable templates, evidence photos, digital signatures and PDF generation.",
          technologies: ["React", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Cloudinary"],
          link: ""
        },
        {
          title: "Textile Management System (King Importados)",
          description: "Management system for a clothing company: stage- and role-based orders, supplies inventory with low-stock alerts and automatic manufacturing cost calculation.",
          technologies: ["React", "Django", "Django REST Framework", "MySQL", "JWT"],
          link: "https://github.com/Elio130801/Proyecto-King-Importados"
        },
        {
          title: "TechStore - Landing Page",
          description: "Modern landing page designed for a tech store. The project features an immersive Dark UI design, interactive light effects (Mouse Spotlight) and glass-like components (Glassmorphism). Fully responsive and optimized for SEO and performance. Includes a dynamic catalog with \"Infinite Scroll\" and integrated contact sections.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
          link: "https://github.com/Elio130801/techstore-landing"
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Technical Degree in Computer Systems Analysis",
          school: "Instituto Superior del Milagro N°8207",
          year: "2024 – 2025",
          description: "Comprehensive training in software analysis, design, and development."
        },
        {
          degree: "High School Diploma in Economics and Administration",
          school: "BSPA N°7062",
          year: "2023",
          description: "Secondary education with an emphasis on economics, administration, and business management."
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        { name: "Programming Languages", items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL", "HTML5", "CSS3"] },
        { name: "Frontend", items: ["React", "Next.js", "React Native", "Vite", "Recharts", "TanStack Query", "React Hook Form", "React Router", "Axios", "Tailwind CSS", "Bootstrap", "Responsive design", "SVG charts", "PDF generation (react-pdf, jsPDF)"] },
        { name: "Backend & Frameworks", items: ["Node.js", "NestJS", "Django", "Django REST Framework", "Spring Boot", ".NET Framework", "Kysely", "REST APIs", "Token and JWT authentication", "Roles and permissions", "Rate limiting", "Cloudinary", "Change auditing"] },
        { name: "Databases", items: ["PostgreSQL", "MySQL", "Firebase", "Supabase", "Relational modeling", "SQL queries"] },
        { name: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "Linux", "Bash", "Postman", "Python virtual environments (venv)", "Deployment on Render and Vercel"] },
        { name: "Analysis & Modeling", items: ["UML (Unified Modeling Language)", "Flowcharts", "Entity-Relationship diagrams", "Requirements analysis"] },
        { name: "Methodologies", items: ["Scrum", "Teamwork with Git (feature/fix branches, merges)"] },
        { name: "Artificial Intelligence", items: ["Claude (Anthropic) as main working tool", "AI-assisted development", "LLMs", "Prompt engineering", "Task automation", "AI-assisted documentation and testing"] },
        { name: "Spoken Languages", items: ["Spanish: native", "English: technical reading level (documentation and code)"] }
      ]
    },
    contact: {
      title: "Contact",
      text: "Have a project in mind? Let's talk!",
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
      placeholderName: "Your name",
      placeholderEmail: "your@email.com",
      placeholderMessage: "Write your message here...",
      btnSend: "Send Message",
      btnSending: "Sending...",
      successMsg: "Message sent successfully! I'll get back to you soon.",
      errorMsg: "There was an error sending. Please try again.",
      Phone: "3876317767"
    },
    footer: "© 2026 Elio Tomas Suffi. All rights reserved. v1.1.0."
  }
};
