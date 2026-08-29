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
      // topNote:
      //   "Provide access to information, resources, assistance, and support to all Lapeer County residents, regardless of race or background.",
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
        "There are many ways to be part of HSC — whether you need support, want to lend a hand, or hope to give back.",
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
      sponsorsEyebrow: "Our Partners & Sponsors",
      sponsorsTitle: "Supported By Community Leadership",
      sponsorsSubtitle:
        "We are deeply grateful to our foundational sponsors, grantmakers, and community partners whose generosity makes our programs possible.",
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
          "In partnership with Four County Community Foundation, HSC offers Imlay City Area Rides — a program that provides rides for residents without reliable personal transportation.",
        body: "For many, transportation is the invisible barrier between stability and setback. A missed doctor's appointment, a lost job, or work program that slips away can be tragic. This program helps relieve that burden.",
        daysOpen: "Monday – Friday",
        daysClosed: "Saturday & Sunday",
        hoursLabel: "Operating Hours",
        hoursValue: "9:00 AM – 5:00 PM",
        hoursClosedValue: "Closed",
        ratesHeader: "Ride Rates Information:",
        rates: {
          longDistance: "Long Distance Rides",
          discounted: "Discounted Rides",
          nonRes: "Discounted Non-Res",
          local: "Local Rides",
        },
        callNote:
          "For more information or to schedule a ride, call (810) 874-3448.",
      },
      shelter: {
        title: "Family Shelter",
        shortDesc:
          "Safe temporary housing for families who need shelter from crisis.",
        intro:
          "Safe temporary housing for families in crisis, giving them time and space to stabilize.",
        body: "The Hispanic Service Center provides temporary emergency shelter for families who need a safe place during periods of hardship. Families may stay for a short duration while working toward permanent housing.",
        list: [
          "Safe, private housing for women and children",
          "Supportive case management",
          "Nutritious meals, clothing, and essential supplies",
          "Assistance with employment, transportation, and housing navigation",
        ],
        callNote:
          "To check eligibility or to join the waitlist, call (810) 724-3665.",
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
        body3: "Grab-and-Go",
        body4: "Appointments are required",
        grabNGoDays: "Tuesday & Friday",
        otherDays: "Mon, Wed, Thurs",
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
          Birth: "Birth",
          Marriage: "Marriage",
          Death: "Death",
          "Court Records": "Court Records",
          Citizenship: "Citizenship",
          "I-30 Form": "I-30 Form",
          Passport: "Passport",
          Immigration: "Immigration",
          "Black & White": "Black & White",
          Color: "Color",
          "Green Card": "Green Card",
        },
        callNote:
          "Other document translations are determined by page count. We also offer in-person translations. For more information, call (012) 345-6789.",
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
        senior: "Senior Program",
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
      p1: "The Hispanic Service Center was originally named the Spanish Speaking Information Center. In 1972, several local charitable Hispanic residents began providing food, clothing, and bilingual translation services to migrant workers and Hispanic families who had settled in the area. After years of surviving on donations and small contributions, the organization was officially incorporated on October 28, 1985, and its name was changed to the Hispanic Service Center in recognition of the Hispanics who founded it. In 1986, the Hispanic Service Center became a 501(c)(3) nonprofit organization. Over time, the Center broadened its scope of services to include all minorities and others in need throughout Lapeer County, regardless of race.",
      p2: "On September 16, 1991, the Hispanic Service Center and Bethany Mennonite Fellowship partnered to purchase a two-unit home in Imlay City to be used as a family shelter. On March 19, 1991, the Mennonite board members signed over their ownership of the property to the Hispanic Service Center. For the past thirty years, the Hispanic Service Center has provided a temporary home to many homeless families in Lapeer County. The shelter’s goal is to keep the entire family together during times of crisis while helping them improve their living conditions. It remains the only family shelter in Lapeer County where a homeless family can stay together for up to thirty days.",
      p3: "The Hispanic Service Center has come a long way from its humble beginnings and is now recognized both locally and countywide for the assistance it provides to those in need, regardless of race. For the past forty-nine years, the Hispanic Service Center has successfully delivered a variety of services to low-income individuals facing difficult circumstances, helping them find ways to improve their lives. The Hispanic Service Center collaborates with many Lapeer County agencies to avoid duplication of services, and we are pleased that many agencies refer clients to us. As a result, the community increasingly recognizes that the Hispanic Service Center assists anyone in need, not just members of the Hispanic community.",
      p4: "Today, 43% of Imlay City’s population is Hispanic. Many are descendants of the original migrant families who purchased permanent homes and settled in Imlay City in the 1940s and 1950s, along with newer families who later chose to make Imlay City their home. After many years of renting, the HSC purchased a building in Imlay City in 2018 to serve as its office space.",
      p5: "The Hispanic Service Center continues to do everything possible to support those in our community. With the dedication and passion of our volunteers, partner agencies, board members, employees, and community supporters, we are where we are today. Everyone in our community, regardless of race, is welcomed at the Hispanic Service Center with open arms.",
      staffEyebrow: "Leadership & Staff",
      staffTitle: "Our Team",
      hscStaffHeading: "Hispanics Service Center Staff",
      ridesStaffHeading: "Imlay City Area Rides Staff",
      boardStaffHeading: "Hispanic Service Center Board",
      roles: {
        "Executive Director": "Executive Director",
        "Senior Coordinator": "Senior Coordinator",
        Receptionist: "Receptionist",
        Chair: "Chair",
        "Vice Chair": "Vice Chair",
        Secretary: "Secretary",
        Treasurer: "Treasurer",
        Member: "Member",
      },
    },
    contact: {
      eyebrow: "Connect With Us",
      title: "Get In Touch With Us",
      subtitle:
        "Reach out — we're here to help. Find our location, hours, and contact information below, or send us a message directly.",
      locationLabel: "Location",
      locationValue: "113 N Almont Ave. Imlay City, Michigan 48444",
      poBoxLabel: "PO Box",
      poBoxValue: "284 Imlay City, Michigan 48444",
      emailPhoneLabel: "Email & Phone",
      hoursLabel: "Operating Hours",
      daysOpen: "Monday – Friday",
      hoursValue: "9:00 AM – 5:00 PM",
      formTitle: "Send Us A Message",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Jane Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "director@imlayhsc.org",
      phoneNumber: "(810) 724-3665",
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
      // topNote:
      //   "Brindar acceso a información, recursos, asistencia y apoyo a todos los residentes del condado de Lapeer, sin importar su raza o antecedentes.",
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
        "Hay muchas formas de formar parte de HSC, ya sea que necesites apoyo, quieras echar una mano o desees retribuir.",
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
      sponsorsEyebrow: "Nuestros Patrocinadores y Aliados",
      sponsorsTitle: "Con el Apoyo del Liderazgo Comunitario",
      sponsorsSubtitle:
        "Agradecemos profundamente a nuestros patrocinadores principales, donantes de subvenciones y aliados comunitarios cuya generosidad hace posibles nuestros programas.",
      becomeSponsorBtn: "Sé un Aliado",
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
          "En colaboración con Four County Community Foundation, HSC ofrece el programa Imlay City Area Rides para brindar transporte a residentes sin vehículo propio confiable.",
        body: "Para muchos, el transporte es la barrera invisible entre la estabilidad y las dificultades. Una cita médica perdida, un trabajo perdido o un programa de trabajo que se pierde pueden ser trágicos. Este programa ayuda a aliviar esa carga.",
        daysOpen: "Lunes a viernes",
        daysClosed: "Sábado y domingo",
        hoursLabel: "Horario de atención",
        hoursValue: "9:00 AM – 5:00 PM",
        hoursClosedValue: "Cerrado",
        ratesHeader: "Información sobre Tarifas:",
        rates: {
          longDistance: "Viajes de Larga Distancia",
          discounted: "Viajes con Descuento",
          nonRes: "No Residentes con Descuento",
          local: "Viajes Locales",
        },
        callNote:
          "Para obtener más información o programar un viaje, llame al (810) 874-3448.",
      },
      shelter: {
        title: "Refugio Familiar",
        shortDesc:
          "Alojamiento temporal seguro y libre de violencia para familias que necesitan refugio ante una crisis.",
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
          "Para verificar la elegibilidad o unirse a la lista de espera, llame al (810) 724-3665.",
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
        body3: "Para llevar",
        body4: "Se requiere cita previa",
        grabNGoDays: "Martes y viernes",
        otherDays: "Lunes, miércoles y jueves",
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
          Birth: "Nacimiento",
          Marriage: "Matrimonio",
          Death: "Defunción",
          "Court Records": "Registros Judiciales",
          Citizenship: "Ciudadanía",
          "I-30 Form": "Formulario I-30",
          Passport: "Pasaporte",
          Immigration: "Inmigración",
          "Black & White": "Blanco y Negro",
          Color: "Color",
          "Green Card": "Tarjeta Verde (Green Card)",
        },
        callNote:
          "La tarifa de otras traducciones de documentos se determina según el número de páginas. También ofrecemos servicios de traducción presencial. Para más información, llame al (012) 345-6789.",
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
        senior: "Programa para Personas Mayores",
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
      p1: "El Hispanic Service Center se llamaba originalmente Spanish Speaking Information Center. En 1972, varios residentes hispanos de la localidad, movidos por un espíritu altruista, comenzaron a proporcionar alimentos, ropa y servicios de traducción bilingüe a trabajadores migrantes y familias hispanas que se habían establecido en la zona. Tras años de subsistir gracias a donaciones y pequeñas contribuciones, la organización se constituyó oficialmente el 28 de octubre de 1985 y cambió su nombre a Hispanic Service Center en reconocimiento a los hispanos que la fundaron. En 1986, el Hispanic Service Center obtuvo el estatus de organización sin fines de lucro bajo la categoría 501(c)(3). Con el paso del tiempo, el Centro amplió su gama de servicios para incluir a todas las minorías y a otras personas necesitadas de todo el condado de Lapeer, independientemente de su raza.",
      p2: "El 16 de septiembre de 1991, el Hispanic Service Center y la Bethany Mennonite Fellowship se asociaron para adquirir una vivienda de dos unidades en Imlay City, destinada a servir como refugio para familias. El 19 de marzo de 1991, los miembros de la junta menonita transfirieron la propiedad del inmueble al Hispanic Service Center. Durante los últimos treinta años, el Hispanic Service Center ha brindado un hogar temporal a muchas familias sin techo en el condado de Lapeer. El objetivo del refugio es mantener unida a toda la familia en momentos de crisis, al tiempo que se les ayuda a mejorar sus condiciones de vida. Sigue siendo el único refugio familiar en el condado de Lapeer donde una familia sin hogar puede permanecer unida hasta por treinta días.",
      p3: "El Hispanic Service Center ha recorrido un largo camino desde sus humildes comienzos y hoy es reconocido, tanto a nivel local como en todo el condado, por la ayuda que brinda a quienes la necesitan, independientemente de su raza. Durante los últimos cuarenta y nueve años, el Hispanic Service Center ha ofrecido con éxito una variedad de servicios a personas de bajos recursos que atraviesan situaciones difíciles, ayudándolas a encontrar formas de mejorar sus vidas. El centro colabora con numerosas agencias del condado de Lapeer para evitar la duplicación de servicios, y nos complace que muchas de ellas nos deriven clientes. Como resultado, la comunidad reconoce cada vez más que el Hispanic Service Center ayuda a cualquier persona que lo necesite, y no solo a los miembros de la comunidad hispana.",
      p4: "Hoy en día, el 43 % de la población de Imlay City es hispana. Muchos son descendientes de las familias migrantes originales que compraron viviendas permanentes y se establecieron en Imlay City en las décadas de 1940 y 1950, junto con familias más recientes que posteriormente decidieron hacer de Imlay City su hogar. Tras muchos años de alquiler, el HSC adquirió un edificio en Imlay City en 2018 para utilizarlo como sede de sus oficinas.",
      p5: "El Hispanic Service Center continúa haciendo todo lo posible para apoyar a los miembros de nuestra comunidad. Hemos llegado a donde estamos hoy gracias a la dedicación y la pasión de nuestros voluntarios, agencias colaboradoras, miembros de la junta directiva, empleados y colaboradores de la comunidad. En el Hispanic Service Center, recibimos con los brazos abiertos a todas las personas de nuestra comunidad, sin importar su raza.",
      staffEyebrow: "Liderazgo y Personal",
      staffTitle: "Nuestro Equipo",
      hscStaffHeading: "Personal del Centro de Servicios Hispanos",
      ridesStaffHeading: "Personal de Transportes de Imlay City",
      boardStaffHeading:
        "Consejo de Administración del Centro de Servicios Hispanos",
      roles: {
        "Executive Director": "Director Ejecutivo",
        "Senior Coordinator": "Coordinadora Senior",
        Receptionist: "Recepcionista",
        Chair: "Presidente",
        "Vice Chair": "Vice Presidente",
        Secretary: "Secretario",
        Treasurer: "Tesorero",
        Member: "Miembro",
      },
    },
    contact: {
      eyebrow: "Conéctate con Nosotros",
      title: "Ponte en Contacto con Nosotros",
      subtitle:
        "Contáctanos: estamos aquí para ayudar. Encuentra nuestra ubicación, horario e información de contacto a continuación, o envíanos un mensaje directamente.",
      locationLabel: "Ubicación",
      locationValue: "113 N Almont Ave. Imlay City, Michigan 48444",
      poBoxLabel: "Apartado Postal",
      poBoxValue: "284 Imlay City, Michigan 48444",
      emailPhoneLabel: "Correo Electrónico y Teléfono",
      hoursLabel: "Horario de Atención",
      hoursValue: "Lunes – Viernes: 9:00 AM – 5:00 PM",
      formTitle: "Envíanos un Mensaje",
      fullNameLabel: "Nombre Completo",
      fullNamePlaceholder: "María García",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: " director@imlayhsc.org",
      phoneNumber: "(810) 724-3665",
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
