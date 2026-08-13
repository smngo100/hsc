export type Language = "en" | "es";

export const translations = {
  en: {
    brand: {
      title: "HISPANICS SERVICE CENTER",
      short: "HSC",
    },
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About Us",
      contact: "Contact",
      donate: "DONATE",
      toggleLang: "ES",
    },
    footer: {
      topNote:
        "Provide access to information, resources, assistance, and support to all Lapeer County residents, regardless of race or background.",
      brandTitle: "HSC - HISPANICS SERVICE CENTER",
      brandDesc:
        "A multilingual nonprofit organization serving Lapeer County residents with housing, food security, transportation, senior programs, and document translation.",
      quickLinks: "Quick Links",
      getInvolved: "Get Involved",
      getHelpBtn: "GET HELP",
      joinUsBtn: "JOIN US",
      donateBtn: "DONATE",
      copyright: "©2026 HSC - 501(C)(3) Nonprofit",
      locationNote: "Lapeer County, Michigan",
    },
    stats: {
      years: "Years Serving The Community",
      families: "Families Housed",
      meals: "Meals Distributed",
      residents: "Residents Served",
    },
    home: {
      // eyebrow: 'Rooted in Community, Open to Everyone',
      heroTitle: "Rooted in Community, Open to Everyone.",
      heroLead:
        "The Hispanic Service Center is a multilingual nonprofit serving all residents in Lapeer County — from housing and food security to transportation, senior care, and language support. We connect individuals and families with resources, assistance, and support they need to thrive.",
      getHelp: "Get Help",
      seeHow: "See How We Can Help",
      whatWeDoEyebrow: "Our Programs",
      whatWeDoTitle: "What We Do",
      whatWeDoSubtitle:
        "Direct support programs designed to meet essential human needs in our community.",
      learnMore: "Learn More",
      impactEyebrow: "Make An Impact",
      impactTitle: "Get Involved",
      impactSubtitle:
        "Facing a hard time? Whether it's food, shelter, transportation, or translation support, our team is ready to help.",
      cardGetHelpTitle: "Get Help",
      cardGetHelpText:
        "Facing a hard time? Whether it's food, shelter, transportation, or translation support, our team is ready to help.",
      cardGetHelpBtn: "See How We Can Help",
      cardVolunteerTitle: "Volunteer With Us",
      cardVolunteerText:
        "From driving neighbors to appointments to stocking pantry shelves, our volunteers are the heart of everything we do.",
      cardVolunteerBtn: "Join The Team",
      cardDonateTitle: "Donate Today",
      cardDonateText:
        "Every gift — large or small — keeps our shelter open, our pantry stocked, and our doors welcoming to anyone who needs help.",
      cardDonateBtn: "Donate",
    },
    services: {
      eyebrow: "Community Services",
      title: "Services",
      subtitle:
        "The Hispanic Service Center offers a range of no-cost and low-cost programs designed to meet needs in our community — from housing and food security to transportation, senior care, and language support. Every service is open to all Lapeer County residents, regardless of background.",
      tabs: {
        all: "All Services",
        rides: "Imlay City Area Rides",
        shelter: "Family Shelter",
        pantry: "Food Pantry",
        senior: "Senior Program",
        translation: "Translation Services",
      },
      viewDetails: "View Program Details",
      rides: {
        title: "Imlay City Area Rides",
        shortDesc:
          "Free transportation connecting rural residents to medical, legal, and essential appointments.",
        intro:
          "In partnership with the Ruth Hughes Community Foundation, HSC offers Imlay City Area Rides — a program that provides rides for residents without reliable personal transportation.",
        body: "For many, transportation is the invisible barrier between stability and setback. A missed doctor's appointment, a lost job, or work program that slips away can be tragic. This program helps relieve that burden.",
        hours: "Operating Hours: 8:00 AM - 5:00 PM (Monday – Friday)",
        ratesHeader: "Ride Rates Information:",
        rates: {
          longDistance: "Long Distance Rides",
          discounted: "Discounted Rides",
          nonRes: "Discounted Non-Res",
          local: "Local Rides",
        },
        callNote:
          "For more information or to schedule a ride, call (012) 345-6789.",
      },
      shelter: {
        title: "Family Shelter",
        shortDesc:
          "Safe, non-violent temporary housing for women and children who need shelter from crisis.",
        intro:
          "Safe, non-violent temporary housing for families in crisis, giving them time and space to stabilize.",
        body: "The Hispanic Service Center provides temporary emergency shelter for families who need a safe place during periods of hardship. Families may stay for a short duration while working toward permanent housing.",
        list: [
          "Safe, private housing for women and children",
          "Supportive case management",
          "Nutritious meals, clothing, and essential supplies",
          "Assistance with employment, transportation, and housing navigation",
        ],
        callNote:
          "To check eligibility or to join the waitlist, call (012) 345-6789.",
      },
      pantry: {
        title: "Food Pantry",
        shortDesc:
          "Free, dignified access to nutritious food. Our pantry is open to all Lapeer County residents.",
        intro:
          "Free, dignified access to nutritious food open weekdays with appointment options for working families.",
        body1:
          "Our food pantry serves all residents throughout Lapeer County, open Monday through Friday, providing consistent access to nutritious food for individuals and families facing food insecurity.",
        body2:
          "Twice a week, we extend our reach through outdoor grab-and-go tables — making access quick, dignified, and convenient. We gratefully accept non-perishable food donations, produce, and monetary contributions to keep our shelves stocked.",
      },
      senior: {
        title: "Senior Program",
        shortDesc:
          "In-home support, transportation, and twice-weekly social activities for seniors.",
        intro:
          "In-home support, transportation, and social enrichment for seniors in our community.",
        body: "Funded by the Valley Area Agency on Aging, our senior program provides essential services that promote dignity and independence for seniors and caregivers in our community — helping older adults remain safe, engaged, and supported in their own homes.",
        providedTitle: "Services Provided",
        providedList: [
          "In-home visits",
          "Transportation for essential errands",
          "Twice-weekly social and enrichment activities",
          "Needs or help with light housekeeping or tasks",
        ],
        qualificationsTitle: "Qualifications",
        qualificationsList: [
          "60 years or older",
          "A caregiver who is 60 years or older",
          "Low income resident",
          "Handicapped or experiencing isolation",
        ],
      },
      translation: {
        title: "Translation Services",
        shortDesc:
          "Bilingual translation and document assistance for forms, certificates, and legal paperwork.",
        intro:
          "Bilingual support for documents, forms, certificates, and legal paperwork.",
        body: "We provide bilingual translation assistance to help residents navigate everyday paperwork.",
        categories: {
          Certificates: "Certificates",
          Forms: "Forms",
          Copies: "Copies",
          Renewals: "Renewals",
        },
        items: {
          Marriage: "Marriage",
          Death: "Death",
          "Court Records": "Court Records",
          Citizenship: "Citizenship",
          "I-90 Form": "I-90 Form",
          Passport: "Passport",
          Immigration: "Immigration",
          "Black & White": "Black & White",
          Color: "Color",
          "Green Card": "Green Card",
        },
        callNote:
          "Other document translations are determined by page count. Call (012) 345-6789 for quotes.",
      },
    },
    gallery: {
      eyebrow: "Community Moments",
      title: "Photo Gallery",
      subtitle:
        "A glimpse into our community events, programs, volunteers, and day-to-day care at the Hispanic Service Center.",
      categories: {
        all: "All Photos",
        community: "Community",
        pantry: "Food Pantry",
        rides: "Rides Program",
        shelter: "Shelter",
      },
      items: {
        1: { title: "Community Gathering", subtitle: "HSC Community Assembly" },
        2: {
          title: "Food Pantry Stocking",
          subtitle: "Weekly Food Pantry Support",
        },
        3: { title: "Area Rides Van", subtitle: "Transit Vehicle Fleet" },
        4: { title: "Family Shelter Facility", subtitle: "Housing Facility" },
        5: { title: "Senior Social Activity", subtitle: "Weekly Social Hour" },
        6: { title: "Grab & Go Station", subtitle: "Outdoor Distribution" },
      },
    },
    about: {
      eyebrow: "Our History & Mission",
      heading:
        "What Started As A Small Act Of Care In 1972 Continues Today — Rooted In Community, Open To Everyone.",
      p1: "Founded in 1972 as the Hispanic Speaking Information Center, a group of dedicated community members came together to provide language and social services to migrant workers and Hispanic families settling in Lapeer County. The organization incorporated in 1989 as the Hispanic Service Center and expanded its mission in 1999 as a nonprofit — expanding its scope to serve ALL residents in Lapeer County, regardless of background.",
      p2: "In 1997, HSC partnered with Bethany Mennonite Church to open a family shelter in Imlay City. What started with 4 beds grew to accommodate up to 20 individuals, giving families in crisis a safe, dignified place to stay for up to 90 days, while they get back on their feet.",
      p3: "Today, nearly 50 years later, HSC is a trusted community resource, partnering with local agencies to serve anyone facing hardship. In 2018, HSC launched Imlay City Area Rides to fill a major transportation gap in the county. It's a symbol of what happens when a community cares for one another — with compassion, perseverance, and equity.",
      staffEyebrow: "Leadership & Staff",
      staffTitle: "Our Team",
      hscStaffHeading: "Hispanics Service Center Staff",
      ridesStaffHeading: "Imlay City Area Rides Staff",
      roles: {
        "Executive Director": "Executive Director",
        "Program Coordinator": "Program Coordinator",
        "Case Manager": "Case Manager",
        "Rides Coordinator": "Rides Coordinator",
        "Lead Driver": "Lead Driver",
      },
    },
    contact: {
      eyebrow: "Connect With Us",
      title: "Get In Touch With Us",
      subtitle:
        "Reach out — we're here to help. Find our location, hours, and contact information below, or send us a message directly.",
      locationLabel: "Location",
      locationValue: "123 Main Street, Imlay City, MI 48444",
      poBoxLabel: "PO Box",
      poBoxValue: "PO Box 123, Imlay City, MI 48444",
      emailPhoneLabel: "Email & Phone",
      hoursLabel: "Operating Hours",
      hoursValue: "Monday – Friday: 8:00 AM – 5:00 PM",
      formTitle: "Send Us A Message",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Jane Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "jane@example.com",
      serviceNeededLabel: "Service Needed",
      serviceOptions: {
        general: "General Inquiry",
        rides: "Imlay City Area Rides",
        shelter: "Family Shelter",
        pantry: "Food Pantry",
        senior: "Senior Program",
        translation: "Translation Services",
      },
      messageLabel: "Message",
      messagePlaceholder: "How can our team help you today?",
      submitBtn: "Send Message",
      toastSuccess: "Thank you! Your message has been sent to our team.",
    },
  },

  es: {
    brand: {
      title: "CENTRO DE SERVICIOS HISPANOS",
      short: "HSC",
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      gallery: "Galería",
      about: "Sobre Nosotros",
      contact: "Contacto",
      donate: "DONAR",
      toggleLang: "EN",
    },
    footer: {
      topNote:
        "Brindar acceso a información, recursos, asistencia y apoyo a todos los residentes del condado de Lapeer, sin importar su raza o antecedentes.",
      brandTitle: "HSC - CENTRO DE SERVICIOS HISPANOS",
      brandDesc:
        "Una organización sin fines de lucro multilingüe que sirve a los residentes del condado de Lapeer con vivienda, seguridad alimentaria, transporte, programas para adultos mayores y traducción de documentos.",
      quickLinks: "Enlaces Rápidos",
      getInvolved: "Involúcrate",
      getHelpBtn: "OBTENER AYUDA",
      joinUsBtn: "ÚNETE",
      donateBtn: "DONAR",
      copyright:
        "©2026 HSC - CENTRO DE SERVICIOS HISPANOS. Todos los derechos reservados.",
      locationNote: "Condado de Lapeer, Míchigan",
    },
    stats: {
      years: "Años Sirviendo a la Comunidad",
      families: "Familias Alojadas",
      meals: "Comidas Distribuidas",
      residents: "Residentes Atendidos",
    },
    home: {
      // eyebrow: 'Arraigados en la Comunidad, Abiertos para Todos',
      heroTitle: "Arraigados en la Comunidad, Abiertos para Todos.",
      heroLead:
        "El Centro de Servicios Hispanos es una organización sin fines de lucro multilingüe que atiende a todos los residentes del condado de Lapeer: desde vivienda y seguridad alimentaria hasta transporte, atención a adultos mayores y apoyo lingüístico. Conectamos a personas y familias con los recursos y el apoyo que necesitan para prosperar.",
      getHelp: "Obtener Ayuda",
      seeHow: "Ver Cómo Podemos Ayudar",
      whatWeDoEyebrow: "Nuestros Programas",
      whatWeDoTitle: "Lo Que Hacemos",
      whatWeDoSubtitle:
        "Programas de apoyo directo diseñados para satisfacer las necesidades humanas esenciales en nuestra comunidad.",
      learnMore: "Más Información",
      impactEyebrow: "Genera un Impacto",
      impactTitle: "Involúcrate",
      impactSubtitle:
        "¿Pasando por un momento difícil? Ya sea comida, refugio, transporte o traducción, nuestro equipo está listo para ayudar.",
      cardGetHelpTitle: "Obtener Ayuda",
      cardGetHelpText:
        "¿Enfrentando dificultades? Ya sea alimentos, refugio, transporte o traducción, nuestro equipo está listo para ayudar.",
      cardGetHelpBtn: "Ver Cómo Podemos Ayudar",
      cardVolunteerTitle: "Sé Voluntario",
      cardVolunteerText:
        "Desde llevar a vecinos a sus citas hasta abastecer la despensa, nuestros voluntarios son el corazón de todo lo que hacemos.",
      cardVolunteerBtn: "Únete al Equipo",
      cardDonateTitle: "Dona Hoy",
      cardDonateText:
        "Cada donación, grande o pequeña, mantiene nuestro refugio abierto, nuestra despensa abastecida y nuestras puertas abiertas a quien lo necesite.",
      cardDonateBtn: "Donar",
    },
    services: {
      eyebrow: "Servicios Comunitarios",
      title: "Servicios",
      subtitle:
        "El Centro de Servicios Hispanos ofrece una variedad de programas sin costo y de bajo costo diseñados para satisfacer las necesidades de nuestra comunidad: desde vivienda y seguridad alimentaria hasta transporte, atención a adultos mayores y apoyo lingüístico. Todos los servicios están abiertos a todos los residentes del condado de Lapeer.",
      tabs: {
        all: "Todos los Servicios",
        rides: "Transportes de Imlay City",
        shelter: "Refugio Familiar",
        pantry: "Despensa de Alimentos",
        senior: "Programa de Adultos Mayores",
        translation: "Servicios de Traducción",
      },
      viewDetails: "Ver Detalles del Programa",
      rides: {
        title: "Transportes de Imlay City",
        shortDesc:
          "Transporte gratuito que conecta a residentes rurales con citas médicas, legales y esenciales.",
        intro:
          "En asociación con la Fundación Comunitaria Ruth Hughes, HSC ofrece el programa Imlay City Area Rides para brindar transporte a residentes sin vehículo propio confiable.",
        body: "Para muchos, el transporte es la barrera invisible entre la estabilidad y las dificultades. Una cita médica perdida, un trabajo perdido o un programa de trabajo que se pierde pueden ser trágicos. Este programa ayuda a aliviar esa carga.",
        hours: "Horario de atención: 8:00 AM - 5:00 PM (Lunes a Viernes)",
        ratesHeader: "Información sobre Tarifas:",
        rates: {
          longDistance: "Viajes de Larga Distancia",
          discounted: "Viajes con Descuento",
          nonRes: "No Residentes con Descuento",
          local: "Viajes Locales",
        },
        callNote:
          "Para obtener más información o programar un viaje, llame al (012) 345-6789.",
      },
      shelter: {
        title: "Refugio Familiar",
        shortDesc:
          "Vivienda temporal segura y libre de violencia para mujeres y niños en situaciones de crisis.",
        intro:
          "Vivienda temporal segura y libre de violencia para familias en crisis, brindándoles tiempo y espacio para estabilizarse.",
        body: "El Centro de Servicios Hispanos brinda refugio de emergencia temporal a familias que necesitan un lugar seguro durante períodos de dificultad. Las familias pueden quedarse por una corta duración mientras trabajan para conseguir una vivienda permanente.",
        list: [
          "Vivienda segura y privada para mujeres y niños",
          "Gestión de casos y apoyo personalizado",
          "Comidas nutritivas, ropa y suministros esenciales",
          "Asistencia con empleo, transporte y búsqueda de vivienda",
        ],
        callNote:
          "Para verificar la elegibilidad o unirse a la lista de espera, llame al (012) 345-6789.",
      },
      pantry: {
        title: "Despensa de Alimentos",
        shortDesc:
          "Acceso gratuito y digno a alimentos nutritivos. Nuestra despensa está abierta a todos los residentes del condado de Lapeer.",
        intro:
          "Acceso gratuito y digno a alimentos nutritivos, abierto entre semana con opción de cita para familias trabajadoras.",
        body1:
          "Nuestra despensa de alimentos sirve a todos los residentes del condado de Lapeer, abierta de lunes a viernes, brindando acceso constante a alimentos nutritivos para personas y familias que enfrentan inseguridad alimentaria.",
        body2:
          "Dos veces por semana ampliamos nuestro alcance a través de mesas al aire libre para llevar rápido. Aceptamos donaciones de alimentos no perecederos, frutas y verduras, y contribuciones monetarias para mantener nuestros estantes abastecidos.",
      },
      senior: {
        title: "Programa de Adultos Mayores",
        shortDesc:
          "Apoyo en el hogar, transporte y actividades sociales dos veces por semana para adultos mayores.",
        intro:
          "Apoyo en el hogar, transporte y enriquecimiento social para adultos mayores en nuestra comunidad.",
        body: "Financiado por Valley Area Agency on Aging, nuestro programa brinda servicios esenciales que promueven la dignidad y la independencia de las personas mayores y sus cuidadores en nuestra comunidad, ayudándoles a permanecer seguros y acompañados en sus hogares.",
        providedTitle: "Servicios Prestados",
        providedList: [
          "Visitas a domicilio",
          "Transporte para mandados esenciales",
          "Actividades sociales y de enriquecimiento dos veces por semana",
          "Ayuda con tareas domésticas ligeras o recados",
        ],
        qualificationsTitle: "Requisitos",
        qualificationsList: [
          "60 años o más",
          "Cuidador de 60 años o más",
          "Residente de bajos ingresos",
          "Persona con discapacidad o en situación de aislamiento",
        ],
      },
      translation: {
        title: "Servicios de Traducción",
        shortDesc:
          "Traducción bilingüe y asistencia de documentos para formularios, certificados y trámites legales.",
        intro:
          "Apoyo bilingüe para documentos, formularios, certificados y trámites legales.",
        body: "Brindamos asistencia de traducción bilingüe para ayudar a los residentes a realizar sus trámites diarios.",
        categories: {
          Certificates: "Certificados",
          Forms: "Formularios",
          Copies: "Copias",
          Renewals: "Renovaciones",
        },
        items: {
          Marriage: "Matrimonio",
          Death: "Defunción",
          "Court Records": "Registros Judiciales",
          Citizenship: "Ciudadanía",
          "I-90 Form": "Formulario I-90",
          Passport: "Pasaporte",
          Immigration: "Inmigración",
          "Black & White": "Blanco y Negro",
          Color: "Color",
          "Green Card": "Tarjeta Verde (Green Card)",
        },
        callNote:
          "Otras traducciones de documentos se determinan según el número de páginas. Llame al (012) 345-6789 para cotizaciones.",
      },
    },
    gallery: {
      eyebrow: "Momentos Comunitarios",
      title: "Galería de Fotos",
      subtitle:
        "Un vistazo a nuestros eventos comunitarios, programas, voluntarios y atención diaria en el Centro de Servicios Hispanos.",
      categories: {
        all: "Todas las Fotos",
        community: "Comunidad",
        pantry: "Despensa de Alimentos",
        rides: "Programa de Transporte",
        shelter: "Refugio",
      },
      items: {
        1: {
          title: "Reunión Comunitaria",
          subtitle: "Asamblea Comunitaria de HSC",
        },
        2: {
          title: "Abastecimiento de Despensa",
          subtitle: "Apoyo Semanal de Despensa",
        },
        3: {
          title: "Camioneta de Transporte",
          subtitle: "Flota de Vehículos de Tránsito",
        },
        4: {
          title: "Instalaciones del Refugio",
          subtitle: "Instalaciones de Vivienda",
        },
        5: {
          title: "Actividad Social para Adultos Mayores",
          subtitle: "Hora Social Semanal",
        },
        6: {
          title: "Estación de Alimentos para Llevar",
          subtitle: "Distribución al Aire Libre",
        },
      },
    },
    about: {
      eyebrow: "Nuestra Historia y Misión",
      heading:
        "Lo Que Comenzó Como Un Pequeño Acto De Cuidado En 1972 Continúa Hoy: Arraigados En La Comunidad, Abiertos Para Todos.",
      p1: "Fundado en 1972 como el Centro de Información de Habla Hispana, un grupo de miembros dedicados de la comunidad se unió para brindar servicios lingüísticos y sociales a trabajadores migrantes y familias hispanas que se establecían en el condado de Lapeer. La organización se incorporó en 1989 como el Centro de Servicios Hispanos y amplió su misión en 1999 como organización sin fines de lucro para atender a TODOS los residentes del condado de Lapeer, sin importar sus antecedentes.",
      p2: "En 1997, HSC se asoció con Bethany Mennonite Church para abrir un refugio familiar en Imlay City. Lo que comenzó con 4 camas creció para albergar hasta 20 personas, brindando a las familias en crisis un lugar seguro y digno donde quedarse hasta 90 días mientras se recuperan.",
      p3: "Hoy, casi 50 años después, HSC es un recurso comunitario de confianza que se asocia con agencias locales para atender a cualquier persona que enfrente dificultades. En 2018, HSC lanzó Imlay City Area Rides para cubrir una importante brecha de transporte en el condado. Es un símbolo de lo que sucede cuando una comunidad se cuida mutuamente con compasión, perseverancia y equidad.",
      staffEyebrow: "Liderazgo y Personal",
      staffTitle: "Nuestro Equipo",
      hscStaffHeading: "Personal del Centro de Servicios Hispanos",
      ridesStaffHeading: "Personal de Transportes de Imlay City",
      roles: {
        "Executive Director": "Director Ejecutivo",
        "Program Coordinator": "Coordinadora de Programas",
        "Case Manager": "Gestor de Casos",
        "Rides Coordinator": "Coordinador de Transporte",
        "Lead Driver": "Conductor Principal",
      },
    },
    contact: {
      eyebrow: "Conéctate con Nosotros",
      title: "Ponte en Contacto con Nosotros",
      subtitle:
        "Contáctanos: estamos aquí para ayudar. Encuentra nuestra ubicación, horario e información de contacto a continuación, o envíanos un mensaje directamente.",
      locationLabel: "Ubicación",
      locationValue: "123 Main Street, Imlay City, MI 48444",
      poBoxLabel: "Apartado Postal",
      poBoxValue: "PO Box 123, Imlay City, MI 48444",
      emailPhoneLabel: "Correo Electrónico y Teléfono",
      hoursLabel: "Horario de Atención",
      hoursValue: "Lunes – Viernes: 8:00 AM – 5:00 PM",
      formTitle: "Envíanos un Mensaje",
      fullNameLabel: "Nombre Completo",
      fullNamePlaceholder: "María García",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "maria@ejemplo.com",
      serviceNeededLabel: "Servicio Requerido",
      serviceOptions: {
        general: "Consulta General",
        rides: "Transportes de Imlay City",
        shelter: "Refugio Familiar",
        pantry: "Despensa de Alimentos",
        senior: "Programa de Adultos Mayores",
        translation: "Servicios de Traducción",
      },
      messageLabel: "Mensaje",
      messagePlaceholder: "¿Cómo puede ayudarte nuestro equipo hoy?",
      submitBtn: "Enviar Mensaje",
      toastSuccess: "¡Gracias! Tu mensaje ha sido enviado a nuestro equipo.",
    },
  },
} as const;
