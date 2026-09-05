const pricing = {
  rooms: 4800,
  baths: 4000,
  floor: 15000,
};

// Reemplazar por el número real del asesor antes de publicar, solo dígitos y código de país.
const ASESOR_WHATSAPP = "";

const state = {
  lot: { code: "A-01", area: 82.5, price: 12000 },
  rooms: 2,
  baths: 1,
  floors: 1,
  material: "Esencial",
  materialCost: 24900,
};

const formatCurrency = (amount) => new Intl.NumberFormat("es-PE", {
  style: "currency", currency: "PEN", maximumFractionDigits: 0,
}).format(amount).replace("PEN", "S/");

function estimateTotal() {
  return state.lot.price + state.materialCost + (state.rooms * pricing.rooms) +
    (state.baths * pricing.baths) + ((state.floors - 1) * pricing.floor);
}

function updateEstimate() {
  if (!document.getElementById("roomsValue")) return;
  document.getElementById("roomsValue").textContent = state.rooms;
  document.getElementById("bathsValue").textContent = state.baths;
  document.getElementById("floorsValue").textContent = state.floors;
  document.getElementById("summaryLot").textContent = `${state.lot.code} · ${state.lot.area} m²`;
  document.getElementById("estimatePrice").textContent = formatCurrency(estimateTotal());
}

document.querySelectorAll(".lot-option").forEach((button) => {
  button.addEventListener("click", () => {
    state.lot = { code: button.dataset.lot, area: Number(button.dataset.area), price: Number(button.dataset.price) };
    document.querySelectorAll(".lot-option").forEach((option) => {
      const selected = option === button;
      option.classList.toggle("is-selected", selected);
      option.setAttribute("aria-checked", String(selected));
    });
    updateEstimate();
  });
});

document.querySelectorAll(".counter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.counter;
    const nextValue = state[key] + Number(button.dataset.direction);
    state[key] = Math.min(key === "floors" ? 3 : 5, Math.max(1, nextValue));
    updateEstimate();
  });
});

document.querySelectorAll('input[name="material"]').forEach((input) => {
  input.addEventListener("change", () => {
    state.material = input.value;
    state.materialCost = Number(input.dataset.cost);
    document.querySelectorAll(".material-option").forEach((option) => {
      option.classList.toggle("is-selected", option.contains(input) && input.checked);
    });
    updateEstimate();
  });
});

document.getElementById("calculatorForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!ASESOR_WHATSAPP) {
    window.alert("Falta configurar el número de WhatsApp del asesor en app.js antes de publicar.");
    return;
  }
  const message = [
    "Hola, me gustaría cotizar una casa prefabricada en Portal del Valle.",
    `Lote: ${state.lot.code} (${state.lot.area} m², valor referencial ${formatCurrency(state.lot.price)})`,
    `Casa: ${state.rooms} habitación(es), ${state.baths} baño(s), ${state.floors} piso(s), material ${state.material}.`,
    `Inversión estimada mostrada: ${formatCurrency(estimateTotal())}.`,
    "¿Podrían confirmarme disponibilidad y enviarme una cotización final?"
  ].join("\n");
  window.open(`https://wa.me/${ASESOR_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

const planModal = document.getElementById("planModal");
document.getElementById("openPlan").addEventListener("click", () => planModal.showModal());
document.getElementById("closePlan").addEventListener("click", () => planModal.close());
planModal.addEventListener("click", (event) => { if (event.target === planModal) planModal.close(); });

const quickContactForm = document.getElementById("quickContactForm");
quickContactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!ASESOR_WHATSAPP) {
    window.alert("Falta configurar el número de WhatsApp del asesor en app.js antes de publicar.");
    return;
  }
  const name = document.getElementById("quickName").value.trim();
  const phone = document.getElementById("quickPhone").value.trim();
  const interest = document.getElementById("quickInterest").value;
  const message = [
    "Hola, quiero recibir información sobre Residencial Portal del Valle.",
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    `Interés: ${interest}`,
  ].join("\n");
  window.open(`https://wa.me/${ASESOR_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

updateEstimate();
