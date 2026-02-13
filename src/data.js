// src/data.js
export const content = {
  es: {
    // AGREGADO "Proyectos" EN LA POSICIÓN 3
    nav: ["Sobre mí", "Experiencia", "Proyectos", "Educación", "Habilidades", "Contacto"], 
    role: "Analista de Sistemas | Desarrollador Full Stack",
    badge: "Disponible para trabajar",
    summary: "Desarrollador Full Stack con formación en Sistemas. Apasionado por crear soluciones tecnológicas innovadoras con experiencia en Python, React y bases de datos.",
    about: {
        title: "Sobre mí",
        p1: "Soy Elio Tomas Suffi, Desarrollador Full Stack con formación técnica en Análisis de Sistemas. Actualmente me especializo en la creación de aplicaciones web escalables y sistemas de gestión.",
        p2: "Me apasiona transformar necesidades de negocio en código eficiente. He desarrollado desde sistemas ERP para manufactura hasta plataformas de e-commerce, siempre buscando la optimización de procesos."
    },
    experience: {
        title: "Experiencia",
        jobs: [
        {
            role: "Analista de Sistemas | Desarrollador Full Stack",
            company: "Freelance / Proyecto Independiente",
            date: "Mar 2025 – Dic 2025",
            desc: "Desarrollo integral de una Plataforma para la fabricación de prendas masculinas, incluyendo módulos de gestion de pedidos y control de perfiles de usuario. Implementación de un motor de cálculo automatizado para determinar costos de fabricación en tiempo real, mejorando la precision financiera del proceso productivo.",
            technologies: ["React", "Node.js", "Python", "SQL", "Scrum", "Figma", "React Native", "Virtual Environments (VENV)"] 
        },
        {
            role: "Desarrollador Full Stack",
            company: "Freelance / Proyecto Independiente",
            date: "Mar 2025 – Dic 2025",
            desc: "Diseño y despliegue de una aplicación web dedicada a la venta de componentes informáticos, con interfaz dinámica y gestion de catálogo de productos.",
            technologies: ["React", "Node.js", "Python", "SQL"]
        },
        {
            role: "Analista de Sistemas y Desarrollador Web",
            company: "Freelance - Proyecto Independiente",
            date: "Ene 2026 — Presente",
            desc: "Liderando el desarrollo integral (Full Stack) de una plataforma SaaS para la gestión de flotas mineras. Realicé el relevamiento de requerimientos para digitalizar procesos de checklists pre-operacionales y mantenimiento. Diseñé la arquitectura de base de datos en PostgreSQL y desarrollé una API REST segura con Django. Implementé el frontend reactivo con reportes en tiempo real.",
            technologies: ["React", "Django REST", "PostgreSQL", "Tailwind CSS", "JWT Authentication", "Cloudinary", "Virtual Environments (VENV)",]
        }
      ]
    },
    // --- NUEVA SECCIÓN PROYECTOS (ESPAÑOL) ---
    projects: {
      title: "Proyectos",
      items: [
        {
          title: "Sistema de Gestión Textil (ERP)",
          description: "Plataforma completa para administrar la producción de prendas. Incluye control de stock de insumos, gestión de pedidos, gestión de perfiles de usuario y cálculo automático de costos.",
          technologies: ["React", "Django", "MySQL", "Virtual Environments (VENV)", "React Native"],
          link: "https://github.com/Elio130801/Proyecto-King-Importados" 
        },
        {
            title: "Sistema de Gestión de Flotas Mineras",
            description: "Plataforma SaaS diseñada para empresas de servicios mineros. Digitaliza el control de vehículos mediante checklists pre-operacionales, gestiona planes de mantenimiento preventivo y almacena evidencia fotográfica en la nube. Incluye dashboard de alertas en tiempo real.",
            technologies: ["React", "Django REST", "PostgreSQL", "Tailwind CSS", "Cloudinary", "Virtual Environments (VENV)", "JWT Authentication"],
            link: "https://github.com/Elio130801/Checklist_Frontend",
        }
      ]
    },
    education: {
        title: "Educación",
        items: [
        {
            degree: "Tecnicatura en Análisis de Sistemas",
            school: "Instituto Superior del Milagro N°8207",
            year: "2024 – 2025",
            description: "Formación integral en análisis, diseño y desarrollo de software."
        },
        {
            degree: "Bachiller en Economía y Administración",
            school: "BSPA N°7062",
            year: "2023 - 2023",
            description: "Formación secundaria con énfasis en economía, administración y gestión empresarial."
        }
      ]
    },
    skills: {
        title: "Habilidades",
        categories: [
            {
                name: "Lenguajes",
                items: ["PHP", "Python", "JavaScript", "SQL", "HTML/CSS"]
            },
            {
                name: "Frameworks & Librerías",
                items: ["Spring Boot", "React.js", "Node.js", "Django", ".NET Framework", "Bootstrap", "Tailwind CSS", "React Native", "Next.js", "Django REST Framework"]
            },
            {
                name: "Bases de Datos",
                items: ["PostgreSQL", "MySQL", "Firebase", "Supabase"]
            },
            {
                name: "Herramientas & DevOps",
                items: ["Docker", "GitHub", "Git", "Linux", "Bash", "Postman", "Virtual Environments (VENV)"]
            },
            {
                name: "Habilidades Técnicas",
                items: ["UML (Lenguaje Unificado de Modelado)", "Diagramas de Flujo", "Diagramas de Entidad-Relación"]
            },
            {
                name: "Metodologías",
                items: ["Scrum",]
            }
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
    }
  },
  en: {
    nav: ["About", "Experience", "Projects", "Education", "Skills", "Contact"],
    role: "Systems Analyst | Full Stack Developer",
    badge: "Available for work",
    summary: "Full Stack Developer with a background in Systems Analysis. Passionate about creating innovative tech solutions with experience in Python, React, and databases.",
    about: {
        title: "About Me",
        p1: "I am Elio Tomas Suffi, a Full Stack Developer with technical training in Systems Analysis. I currently specialize in building scalable web applications and management systems.",
        p2: "I am passionate about transforming business needs into efficient code. I have developed everything from ERP systems for manufacturing to e-commerce platforms, always seeking process optimization."
    },
    experience: {
        title: "Experience",
        jobs: [
        {
            role: "Systems Analyst | Full Stack Developer",
            company: "Freelance / Independent Project",
            date: "Mar 2025 – Dec 2025",
            desc: "Comprehensive development of a platform for men's clothing manufacturing, including order management and user profile control modules. Implementation of an automated calculation engine to determine manufacturing costs in real time, improving the financial accuracy of the production process.",
            technologies: ["React", "Node.js", "Python", "SQL", "Scrum", "Figma", "React Native", "Virtual Environments (VENV)"]
        },
        {
            role: "Full Stack Developer",
            company: "Freelance / Independent Project",
            date: "Mar 2025 – Dec 2025",
            desc: "Design and deployment of a web application dedicated to the sale of computer components, with a dynamic interface and product catalog management.",
            technologies: ["React", "Node.js", "Python", "SQL"]
        },
        {
            role: "Systems Analyst & Web Developer",
            company: "Freelance - Independent Project",
            date: "Jan 2026 — Present",
            desc: "Leading the end-to-end development of a SaaS solution for mining fleet logistics. Translated complex operational requirements into a digital checklist system. Architected the PostgreSQL database and developed a secure REST API using Django. Built a responsive dashboard using React and Tailwind CSS for real-time fleet monitoring.",
            technologies: ["React", "Django REST", "PostgreSQL", "Tailwind CSS", "JWT Authentication", "Cloudinary", "Virtual Environments (VENV)",]
        },
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Textile Management System (ERP)",
          description: "A complete platform for managing garment production. Includes raw material inventory control, order management, user profile management, and automatic cost calculation.",
          technologies: ["React", "Django", "MySQL", "Virtual Environments (VENV)", "React Native"],
          link: "https://github.com/Elio130801/Proyecto-King-Importados" 
        },
        {
            title: "Mining Fleet Management System",
            description: "SaaS platform designed for mining service companies. Digitizes vehicle control through pre-operational checklists, manages preventive maintenance plans, and stores photographic evidence in the cloud. Features a real-time alert dashboard.",
            technologies: ["React", "Django REST", "PostgreSQL", "Tailwind CSS", "Cloudinary", "Virtual Environments (VENV)", "JWT Authentication"],
            link: "https://github.com/Elio130801/Checklist_Frontend" 
        },
      ]
    },
    education: {
        title: "Education",
        items: [
        {
            degree: "Technician in Systems Analysis",
            school: "Instituto Superior del Milagro N°8207",
            year: "2024 – 2025",
            description: "Comprehensive training in software analysis, design, and development."
        },
        {
            degree: "Bachelor in Economics and Administration",
            school: "BSPA N°7062",
            year: "2023 - 2023",
            description: "Secondary education with an emphasis on economics, administration, and business management."
        }
      ]
    },
    skills: {
        title: "Skills",
        categories: [
            {
                name: "Languages",
                items: ["PHP", "Python", "JavaScript", "SQL", "HTML/CSS"]
            },
            {
                name: "Frameworks & Libraries",
                items: ["Spring Boot", "React.js", "Node.js", "Django", ".NET Framework", "Bootstrap", "Tailwind CSS", "React Native", "Next.js", "Django REST Framework"]
            },
            {
                name: "Databases",
                items: ["PostgreSQL", "MySQL", "Firebase", "Supabase"]
            },
            {
                name: "Tools & DevOps",
                items: ["Docker", "GitHub", "Git", "Linux", "Bash", "Postman", "Virtual Environments (VENV)"]
            },
            {
                name: "Technical Skills",
                items: ["UML (Unified Modeling Language)", "Flowcharts", "Entity-Relationship Diagrams"]
            },
            {
                name: "Methodologies",
                items: ["Scrum",]
            }
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
    }
  }
};