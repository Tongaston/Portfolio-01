import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar Component
        Home: 'Home',
        About: 'About',
        Portfolio: 'Portfolio',
        Technologies: 'Technologies',
        'Contact Me': 'Contact Me',

        // Intro Component
        good_morning: 'Good Morning',
        good_afternoon: 'Good Afternoon',
        good_evening: 'Good Evening',
        good_night: 'Good Night',
        "I'm": "I'm",
        'Web Developer': 'Web Developer',
        'I specialize in developing responsive and':
          'I specialize in developing responsive and',
        'search engine friendly websites': 'search engine friendly websites',
        'Hire Me': 'Hire Me',

        // About Component
        'What I do': 'What I do',
        description1:
          "As a self-taught web developer I'm characterized by having the strength to learn independently. Constantly exploring new technologies and trends in the field.",
        description2:
          'This strength drives me to face complex challenges and seek creative solutions for every problem.',
        description3:
          'Self-discipline and perseverance are my tools to improve my skills and create projects that reflect my dedication and talent in the world of web development.',
        'UI/UX Design': 'UI/UX Design',
        'UI/UX Description':
          'Fusing aesthetics with functionality in an intuitive and attractive way.',
        'Website Design': 'Website Design',
        'Website Description':
          'Modern designs with vibrant colors, easy to navigate and an intuitive layout of information.',
        'Responsive Design': 'Responsive Design',
        'Responsive Description':
          'Websites that automatically adjust and reorganize depending on the device used.',

        // Portfolio Component
        'My Portfolio': 'My Portfolio',
        'My portfolio as a web developer reflects my skills in creating engaging and functional digital experiences.':
          'My portfolio as a web developer reflects my skills in creating engaging and functional digital experiences.',
        'With a user-centric approach, I designed and developed intuitive and':
          'With a user-centric approach, I designed and developed intuitive and',
        'aesthetically appealing websites that not only meet the technical':
          'aesthetically appealing websites that not only meet the technical',
        'requirements but also provide a seamless user experience.':
          'requirements but also provide a seamless user experience.',
        'Show More': 'Show More',
        'Show Less': 'Show Less',

        //Cards
        'A quick and easy climate application created with JavaScript and deployed in Vercel.':
          'A quick and easy climate application created with JavaScript and deployed in Vercel.',
        'A yoga studio website with blog, created with JavaScript and deployed in Vercel.':
          'A yoga studio website with blog, created with JavaScript and deployed in Vercel.',
          'A cleaning services website created with HTML, CSS, and JavaScript.':
          'A cleaning services website created with HTML, CSS, and JavaScript.',
          'A Progressive Web App that allows users to add products to a cart and checkout.':
          'A Progressive Web App that allows users to add products to a cart and checkout.',
          'A classic Snake game created with JavaScript.':
          'A classic Snake game created with JavaScript.',
          "ver_demo": "View Demo",
          "Código": "Code",

        // Technologies Component
        Technologies1: 'Technologies',
        'In my journey through the world of web development, I have cultivated experience and skills in a variety of technologies. My tech stack includes:':
          'In my journey through the world of web development, I have cultivated experience and skills in a variety of technologies. My tech stack includes:',
        Tools: 'Tools',
        Learning: 'Learning',

        // Contact Component
        'Contact Me1': 'Contact Me',
        'Please fill out the form below to discuss any work opportunies.':
          'Please fill out the form below to discuss any work opportunies.',
        'Your name': 'Your name',
        'Your Email': 'Your Email',
        'Your message': 'Your message',
        Submit: 'Submit',

        // GeoLocalization Component
        are_we_close: '¿Are we close?',
        close_message: 'YES, We are close! We are {{distance}}km away.',
        far_message: 'We are far 😞, We are {{distance}}km away.',
        'Loading Map': 'Loading Map',
        not_supported: 'Geolocation is not supported in your browser.',
        not_location: 'Your location could not be obtained.',
      },
    },
    es: {
      translation: {
        // Navbar Component
        Home: 'Inicio',
        About: 'Sobre Mí',
        Portfolio: 'Portafolio',
        Technologies: 'Tecnologías',
        'Contact Me': 'Contáctame',

        // Intro Component
        good_morning: 'Buenos Días',
        good_afternoon: 'Buenas Tardes',
        good_evening: 'Buenas Noches',
        good_night: 'Buenas Noches',
        "I'm": 'Soy',
        'Web Developer': 'Desarrollador Web',
        'I specialize in developing responsive and':
          'Me especializo en el desarrollo de sitios web',
        'search engine friendly websites':
          'responsivos y amigables con los motores de búsqueda',
        'Hire Me': 'Contrátame',

        // About Component
        'What I do': 'Lo que Hago',
        description1:
          'Como desarrollador web autodidacta, me caracterizo por tener la fortaleza de aprender de manera independiente. Exploro constantemente nuevas tecnologías y tendencias en el campo.',
        description2:
          'Esta fortaleza me impulsa a enfrentar desafíos complejos y buscar soluciones creativas para cada problema.',
        description3:
          'La autodisciplina y la perseverancia son mis herramientas para mejorar mis habilidades y crear proyectos que reflejen mi dedicación y talento en el mundo del desarrollo web.',
        'UI/UX Design': 'Diseño UI/UX',
        'UI/UX Description':
          'Fusionando la estética con la funcionalidad de manera intuitiva y atractiva.',
        'Website Design': 'Diseño de Sitios Web',
        'Website Description':
          'Diseños modernos con colores vibrantes, fáciles de navegar y con una distribución intuitiva de la información.',
        'Responsive Design': 'Diseño Responsivo',
        'Responsive Description':
          'Sitios web que se ajustan y reorganizan automáticamente dependiendo del dispositivo.',

        // Portfolio Component
        'My Portfolio': 'Mi Portafolio',
        'My portfolio as a web developer reflects my skills in creating engaging and functional digital experiences.':
          'Mi portafolio como desarrollador web refleja mis habilidades para crear experiencias digitales atractivas y funcionales.',
        'With a user-centric approach, I designed and developed intuitive and aesthetically appealing websites that not only meet the technical requirements but also offer smooth navigation and a pleasant interface.':
          'Con un enfoque centrado en el usuario, diseñé y desarrollé sitios web atractivos y funcionales que no solo cumplen con los requisitos técnicos sino que también ofrecen una experiencia de usuario fluida.',
        'Show More': 'Ver Más',
        'Show Less': 'Ver Menos',

        //Cards
        'A quick and easy climate application created with JavaScript and deployed in Vercel.':
          'Una aplicación de clima rápida y sencilla creada con JavaScript y desplegada en Vercel.',
          'A yoga studio website with blog, created with JavaScript and deployed in Vercel.':
          'Un sitio web de estudio de yoga con blog, creado con JavaScript y desplegado en Vercel.',
          'A cleaning services website created with HTML, CSS, and JavaScript.':
          'Un sitio web de servicios de limpieza creado con HTML, CSS y JavaScript.',
          'A Progressive Web App that allows users to add products to a cart and checkout.':
          'Una Progressive Web App que permite a los usuarios agregar productos a un carrito y realizar el pago.',
          'A classic Snake game created with JavaScript.':
          'Un juego de la serpiente clásico creado con JavaScript.',
          "ver_demo": "Ver Demo",
          "Código": "Código",

        // Technologies Component
        Technologies1: 'Tecnologías',
        'In my journey through the world of web development, I have cultivated experience and skills in a variety of technologies. My tech stack includes:':
          'En mi viaje por el mundo del desarrollo web, he cultivado experiencia y habilidades en una variedad de tecnologías. Mi conocimientos tecnológicos incluyen:',
        Tools: 'Herramientas',
        Learning: 'Aprendiendo',

        // Contact Component
        'Contact Me1': 'Contáctame',
        'Please fill out the form below to discuss any work opportunies.':
          'Por favor, completa el formulario a continuación para discutir cualquier oportunidad de trabajo',
        'Your name': 'Tu nombre',
        'Your Email': 'Tu correo electrónico',
        'Your message': 'Tu mensaje',
        Submit: 'Enviar',

        // GeoLocalization Component
        are_we_close: '¿Estamos cerca?',
        close_message:
          'SÍ, ¡Estamos cerca! Estamos a {{distance}}km de distancia.',
        far_message: 'Estamos lejos 😞, Estamos a {{distance}}km de distancia.',
        'Loading Map': 'Cargando Mapa',
        not_supported: 'Tu navegador no soporta la geolocalización',
        not_location: 'No se pudo obtener tu ubicación',
      },
    },
  },
  lng: 'en', // Idioma inicial
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
