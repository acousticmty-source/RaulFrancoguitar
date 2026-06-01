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
    "nav.lessons": "Formación",
    "nav.courses": "Cursos",
    "nav.instruments": "Instrumentos",
    "nav.contact": "Contacto",
    "hero.music": "Música",
    "hero.bookings": "Contrataciones",
    "hero.lessons": "Formación",
    "hero.courses": "Cursos",
    "hero.instruments": "Instrumentos",
    "music.title": "Música",
    "music.button": "Videos",
    "bookings.title": "Contrataciones",
    "bookings.text":
      "Guitarra flamenca para eventos privados, restaurantes, experiencias gastronómicas, corporativos y celebraciones especiales.",
    "bookings.button": "Reservar experiencia musical",
    "lessons.title": "Formación",
    "lessons.text": "Clases presenciales en Monterrey y en línea.",
    "lessons.sessionsLabel": "Sesiones",
    "lessons.sessionsValue": "4 sesiones mensuales",
    "lessons.durationLabel": "Duración",
    "lessons.durationValue": "Sesiones de una hora",
    "lessons.scheduleLabel": "Horarios",
    "lessons.scheduleValue": "Horarios matutinos",
    "lessons.note": "Puedes adquirir la suscripción o revisar la agenda disponible.",
    "lessons.subscribe": "Adquirir suscripción",
    "lessons.calendar": "Ver agenda",
    "faq.title": "Preguntas frecuentes",
    "faq.experienceQ": "¿Necesito experiencia previa?",
    "faq.experienceA": "No necesariamente. Las clases se adaptan al nivel y objetivo de cada alumno.",
    "faq.modeQ": "¿Las clases son presenciales o en línea?",
    "faq.modeA": "Hay clases presenciales en Monterrey y también modalidad en línea.",
    "faq.startQ": "¿Qué necesito para empezar?",
    "faq.startA": "Una guitarra, disponibilidad para practicar y una idea clara de lo que quieres trabajar.",
    "faq.confirmQ": "¿Cómo se confirma la clase?",
    "faq.confirmA":
      "Al reservar en la agenda, Google Calendar confirma automáticamente el horario y envía los detalles de la cita.",
    "courses.title": "Tu Sonido Flamenco",
    "courses.text": "Si ya tocas guitarra, este es tu comienzo en el flamenco.",
    "courses.button": "Más información",
    "instruments.entryTitle": "Instrumentos",
    "instruments.entryText": "Instrumentos artesanales construidos por Miguel Huipe.",
    "instruments.entryCopy":
      "Cada instrumento se trabaja con atención al sonido, la comodidad y la respuesta del toque flamenco.",
    "instruments.entryButton": "Ver instrumentos",
    "instruments.title": "Instrumentos",
    "instruments.text": "Instrumentos artesanales construidos por Miguel Huipe.",
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
    "hero.music": "Music",
    "hero.bookings": "Bookings",
    "hero.lessons": "Lessons",
    "hero.courses": "Courses",
    "hero.instruments": "Instruments",
    "music.title": "Music",
    "music.button": "Videos",
    "bookings.title": "Bookings",
    "bookings.text":
      "Flamenco guitar for private events, restaurants, culinary experiences, corporate gatherings and special celebrations.",
    "bookings.button": "Reserve musical experience",
    "lessons.title": "Lessons",
    "lessons.text": "In-person lessons in Monterrey and online.",
    "lessons.sessionsLabel": "Sessions",
    "lessons.sessionsValue": "4 monthly sessions",
    "lessons.durationLabel": "Duration",
    "lessons.durationValue": "One-hour sessions",
    "lessons.scheduleLabel": "Schedule",
    "lessons.scheduleValue": "Morning availability",
    "lessons.note": "You can purchase the subscription or review the available calendar.",
    "lessons.subscribe": "Purchase subscription",
    "lessons.calendar": "View calendar",
    "faq.title": "Frequently Asked Questions",
    "faq.experienceQ": "Do I need previous experience?",
    "faq.experienceA": "Not necessarily. Lessons adapt to each student's level and goals.",
    "faq.modeQ": "Are lessons in person or online?",
    "faq.modeA": "There are in-person lessons in Monterrey and online sessions.",
    "faq.startQ": "What do I need to start?",
    "faq.startA": "A guitar, time to practice and a clear idea of what you want to work on.",
    "faq.confirmQ": "How is the lesson confirmed?",
    "faq.confirmA":
      "When booking through the calendar, Google Calendar automatically confirms the time and sends the appointment details.",
    "courses.title": "Tu Sonido Flamenco",
    "courses.text": "If you already play guitar, this is your beginning in flamenco.",
    "courses.button": "More information",
    "instruments.entryTitle": "Instruments",
    "instruments.entryText": "Handcrafted instruments built by Miguel Huipe.",
    "instruments.entryCopy":
      "Each instrument is built with attention to sound, comfort and the response needed for flamenco playing.",
    "instruments.entryButton": "View instruments",
    "instruments.title": "Instruments",
    "instruments.text": "Handcrafted instruments built by Miguel Huipe.",
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
