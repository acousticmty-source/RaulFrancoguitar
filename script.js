const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const revealItems = document.querySelectorAll(".reveal");
const agendaForm = document.querySelector("[data-agenda-form]");
const agendaSummary = document.querySelector("[data-agenda-summary]");
const agendaWhatsapp = document.querySelector("[data-agenda-whatsapp]");
const agendaCalendar = document.querySelector("[data-agenda-calendar]");
const daySelect = document.querySelector("[data-day-select]");
const slotSelect = document.querySelector("[data-slot-select]");
const whatsappNumber = "528116355035";
const googleBookingLink = "https://calendar.app.google/5mgn6u3DMZjyWAhR9";
const availableSlots = {
  Lunes: ["11:30 AM", "1:00 PM", "2:30 PM"],
  Martes: ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM"],
  Miércoles: ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM"],
  Jueves: ["9:00 AM", "10:30 AM", "1:30 PM"],
  Viernes: ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM"],
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

function setActionState(link, href) {
  link.href = href || "#";
  link.setAttribute("aria-disabled", href ? "false" : "true");
}

function renderSlots(day) {
  if (!slotSelect) {
    return;
  }

  slotSelect.innerHTML = "";
  availableSlots[day].forEach((time) => {
    const option = document.createElement("option");
    option.value = `${day} ${time}`;
    option.textContent = time;
    slotSelect.append(option);
  });
}

function buildAgendaMessage(data) {
  const lines = [
    "Hola, me gustaría recibir información.",
    "",
    `Servicio: ${data.service}`,
    `Nombre: ${data.name}`,
    data.phone ? `WhatsApp: ${data.phone}` : "",
    `Nivel: ${data.level}`,
    `Modalidad: ${data.mode}`,
    `Horario disponible: ${data.slot}`,
    data.notes ? `Comentarios: ${data.notes}` : "",
  ].filter(Boolean);

  return lines.join("\n");
}

if (agendaForm) {
  agendaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(agendaForm);
    const data = {
      name: formData.get("name").trim(),
      phone: formData.get("phone").trim(),
      level: formData.get("level"),
      service: formData.get("service"),
      day: formData.get("day"),
      mode: formData.get("mode"),
      slot: formData.get("slot"),
      notes: formData.get("notes").trim(),
    };

    const message = buildAgendaMessage(data);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    agendaSummary.textContent = `${data.name}, se preparó una solicitud para ${data.service.toLowerCase()} en horario ${data.slot}.`;
    setActionState(agendaWhatsapp, whatsappLink);
    setActionState(agendaCalendar, googleBookingLink);
    localStorage.setItem("raul-franco-agenda", JSON.stringify(data));
  });
}

if (daySelect) {
  renderSlots(daySelect.value);
  daySelect.addEventListener("change", () => renderSlots(daySelect.value));
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
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
