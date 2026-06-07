const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const revealItems = document.querySelectorAll(".reveal");
const languageSelect = document.querySelector("[data-language-select]");
const vcardDownload = document.querySelector("[data-vcard-download]");

const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.music": "Música",
    "nav.bookings": "Contrataciones",
    "nav.lessons": "Clases online",
    "nav.courses": "Cursos",
    "nav.instruments": "Instrumentos",
    "nav.contact": "Contacto",
    "hero.music": "Videos",
    "hero.bookings": "Contrataciones",
    "hero.lessons": "Clases online",
    "hero.courses": "Cursos",
    "hero.metronome": "Metrónomo",
    "hero.instruments": "Instrumentos",
    "music.title": "Música",
    "music.button": "Videos",
    "bookings.title": "Contrataciones",
    "bookings.text":
      "Guitarra flamenca para eventos privados, restaurantes, experiencias gastronómicas, corporativos y celebraciones especiales.",
    "bookings.button": "Solicitar información",
    "lessons.title": "Clases online",
    "lessons.sessionsLabel": "Sesiones",
    "lessons.sessionsValue": "4 sesiones mensuales",
    "lessons.durationLabel": "Duración",
    "lessons.durationValue": "Sesiones de una hora",
    "lessons.scheduleLabel": "Horarios",
    "lessons.scheduleValue": "Horarios matutinos",
    "lessons.note": "Consulta disponibilidad antes de inscribirte.",
    "lessons.registrationNote":
      "Para cuidar los horarios disponibles, primero revisaremos contigo las opciones actuales por WhatsApp. Podrás apartar tu horario de forma provisional por 24 horas. Tu lugar quedará confirmado únicamente al completar tu inscripción.",
    "lessons.subscribe": "Adquirir suscripción",
    "faq.title": "Preguntas frecuentes",
    "faq.experienceQ": "¿Necesito experiencia previa?",
    "faq.experienceA": "No necesariamente. Las clases se adaptan al nivel y objetivo de cada alumno.",
    "faq.modeQ": "¿Las clases son en línea?",
    "faq.modeA": "Por el momento las clases se realizan en modalidad en línea.",
    "faq.startQ": "¿Qué necesito para empezar?",
    "faq.startA": "Una guitarra, disponibilidad para practicar y una idea clara de lo que quieres trabajar.",
    "faq.confirmQ": "¿Cómo se confirma la clase?",
    "faq.confirmA":
      "Al reservar en la agenda, Google Calendar confirma automáticamente el horario y envía los detalles de la cita.",
    "courses.title": "Tu Sonido Flamenco",
    "courses.text":
      "Un curso para guitarristas que quieren entrar al lenguaje flamenco con orden, musicalidad y sentido práctico. Trabaja compás, recursos de mano derecha, acompañamiento y sonido desde una ruta clara, sin perder tu propia forma de tocar.",
    "courses.button": "Más información",
    "metronome.title": "Metrónomo Flamenco",
    "metronome.text":
      "Practica el compás flamenco con precisión desde tu celular, ajustando los BPM a tu nivel y trabajando cada palo con una guía clara.",
    "metronome.description":
      "Una herramienta sencilla para estudiar pulso, velocidad y estabilidad. Puedes subir o bajar los BPM para practicar lento, acelerar progresivamente y sostener el compás con más control.",
    "metronome.featuresLabel": "Funciones",
    "metronome.features":
      "Control de BPM, práctica progresiva y patrones pensados para compás flamenco.",
    "metronome.includesLabel": "Incluye",
    "metronome.rhythm.rumbas": "Rumbas",
    "metronome.rhythm.tangos": "Tangos",
    "metronome.rhythm.bulerias": "Bulerías",
    "metronome.rhythm.alegrias": "Alegrías",
    "metronome.rhythm.solea": "Soleá por Bulería",
    "metronome.rhythm.seguiriyas": "Seguiriyas",
    "metronome.rhythm.fandangos": "Fandangos",
    "metronome.rhythm.sevillanas": "Sevillanas",
    "metronome.button": "Comprar Metrónomo",
    "instruments.entryTitle": "Instrumentos",
    "instruments.entryText":
      "Guitarras artesanales construidas por Miguel Huipe para quienes buscan un instrumento con carácter, respuesta y una voz propia para el toque flamenco.",
    "instruments.entryCopy":
      "Cada guitarra se trabaja con maderas seleccionadas, detalle de taller y atención a la comodidad, la proyección y el equilibrio entre percusión, brillo y profundidad.",
    "instruments.entryButton": "Solicitar información",
    "instruments.title": "Instrumentos",
    "instruments.text":
      "Guitarras artesanales construidas por Miguel Huipe, pensadas para respuesta, comodidad y carácter flamenco.",
    "instruments.model1": "Modelo 1",
    "instruments.model2": "Modelo 2",
    "instruments.model3": "Modelo 3",
    "instruments.info": "Solicitar información",
    "contact.title": "Contacto",
    "contact.save": "Guardar contacto",
  },
  en: {
    "nav.home": "Home",
    "nav.music": "Music",
    "nav.bookings": "Bookings",
    "nav.lessons": "Lessons",
    "nav.courses": "Courses",
    "nav.instruments": "Instruments",
    "nav.contact": "Contact",
    "hero.music": "Videos",
    "hero.bookings": "Bookings",
    "hero.lessons": "Lessons",
    "hero.courses": "Courses",
    "hero.metronome": "Metronome",
    "hero.instruments": "Instruments",
    "music.title": "Music",
    "music.button": "Videos",
    "bookings.title": "Bookings",
    "bookings.text":
      "Flamenco guitar for private events, restaurants, culinary experiences, corporate gatherings and special celebrations.",
    "bookings.button": "Request information",
    "lessons.title": "Lessons",
    "lessons.sessionsLabel": "Sessions",
    "lessons.sessionsValue": "4 monthly sessions",
    "lessons.durationLabel": "Duration",
    "lessons.durationValue": "One-hour sessions",
    "lessons.scheduleLabel": "Schedule",
    "lessons.scheduleValue": "Morning availability",
    "lessons.note": "Check availability before enrolling.",
    "lessons.registrationNote":
      "To protect the available times, we will first review the current options with you on WhatsApp. You can hold your time provisionally for 24 hours. Your place is confirmed only after completing enrollment.",
    "lessons.subscribe": "Purchase subscription",
    "faq.title": "Frequently Asked Questions",
    "faq.experienceQ": "Do I need previous experience?",
    "faq.experienceA": "Not necessarily. Lessons adapt to each student's level and goals.",
    "faq.modeQ": "Are lessons online?",
    "faq.modeA": "For now, lessons are held online.",
    "faq.startQ": "What do I need to start?",
    "faq.startA": "A guitar, time to practice and a clear idea of what you want to work on.",
    "faq.confirmQ": "How is the lesson confirmed?",
    "faq.confirmA":
      "When booking through the calendar, Google Calendar automatically confirms the time and sends the appointment details.",
    "courses.title": "Tu Sonido Flamenco",
    "courses.text":
      "A course for guitarists who want to enter the flamenco language with order, musicality and a practical path. Work on compás, right-hand resources, accompaniment and sound without losing your own way of playing.",
    "courses.button": "More information",
    "metronome.title": "Flamenco Metronome",
    "metronome.text":
      "Practice flamenco compás with precision from your phone, adjusting BPM to your level and working each style with a clear guide.",
    "metronome.description":
      "A simple tool for studying pulse, speed and stability. Raise or lower the BPM to practice slowly, build speed progressively and hold the compás with more control.",
    "metronome.featuresLabel": "Features",
    "metronome.features":
      "BPM control, progressive practice and patterns designed for flamenco compás.",
    "metronome.includesLabel": "Includes",
    "metronome.rhythm.rumbas": "Rumbas",
    "metronome.rhythm.tangos": "Tangos",
    "metronome.rhythm.bulerias": "Bulerías",
    "metronome.rhythm.alegrias": "Alegrías",
    "metronome.rhythm.solea": "Soleá por Bulería",
    "metronome.rhythm.seguiriyas": "Seguiriyas",
    "metronome.rhythm.fandangos": "Fandangos",
    "metronome.rhythm.sevillanas": "Sevillanas",
    "metronome.button": "Buy Metronome",
    "instruments.entryTitle": "Instruments",
    "instruments.entryText":
      "Handcrafted guitars built by Miguel Huipe for players looking for character, response and a voice of their own for flamenco playing.",
    "instruments.entryCopy":
      "Each guitar is shaped with selected woods, workshop detail and attention to comfort, projection and the balance between percussion, brightness and depth.",
    "instruments.entryButton": "Request information",
    "instruments.title": "Instruments",
    "instruments.text":
      "Handcrafted guitars built by Miguel Huipe, designed for response, comfort and flamenco character.",
    "instruments.model1": "Model 1",
    "instruments.model2": "Model 2",
    "instruments.model3": "Model 3",
    "instruments.info": "Request information",
    "contact.title": "Contact",
    "contact.save": "Save contact",
  },
};

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  header.classList.remove("is-open");
  nav.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.es;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
  localStorage.setItem("raul-franco-language", language);
  if (languageSelect) {
    languageSelect.value = language;
  }
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("raul-franco-language");
  if (savedLanguage) {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

function downloadVcard(event) {
  event.preventDefault();

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Franco;Raúl;;;",
    "FN:Raúl Franco",
    "ORG:Raúl Franco Guitarra Flamenca",
    "TITLE:Guitarrista Flamenco",
    "TEL;TYPE=CELL:+528116355035",
    "EMAIL:raulfranco1982@gmail.com",
    "URL:https://acousticmty-source.github.io/RaulFrancoguitar/",
    "NOTE:Música en vivo, formación, contrataciones, cursos e instrumentos.",
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "raul-franco.vcf";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function consultarDisponibilidad() {
  // Placeholder para futura consulta de disponibilidad en Google Calendar.
}

function asignarHorario() {
  // Placeholder para futura asignación automática de horario.
}

function crearEventoRecurrente() {
  // Placeholder para futura creación de clases semanales recurrentes.
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("menu-open", !isOpen);
  header.classList.toggle("is-open", !isOpen);
  nav.classList.toggle("is-active", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("menu-open")) {
    return;
  }

  if (!header.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

if (languageSelect) {
  languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
}

if (vcardDownload) {
  vcardDownload.addEventListener("click", downloadVcard);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));
applyLanguage(getInitialLanguage());
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
