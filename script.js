const form = document.getElementById("quote-form");
const status = document.getElementById("form-status");
const year = document.getElementById("year");

if (year) year.textContent = String(new Date().getFullYear());

const fields = {
  name: { el: null, message: "Please enter your name." },
  email: { el: null, message: "Please enter a valid email address." },
  service: { el: null, message: "Please choose a service." },
};

Object.keys(fields).forEach((key) => {
  fields[key].el = document.getElementById(key);
});

function setError(input, hasError) {
  if (!input) return;
  if (hasError) input.setAttribute("aria-invalid", "true");
  else input.removeAttribute("aria-invalid");
}

function validate() {
  let firstInvalid = null;
  let ok = true;

  const nameOk = fields.name.el.value.trim().length > 1;
  setError(fields.name.el, !nameOk);
  if (!nameOk) { ok = false; firstInvalid = firstInvalid || fields.name.el; }

  const emailValue = fields.email.el.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  setError(fields.email.el, !emailOk);
  if (!emailOk) { ok = false; firstInvalid = firstInvalid || fields.email.el; }

  const serviceOk = fields.service.el.value !== "";
  setError(fields.service.el, !serviceOk);
  if (!serviceOk) { ok = false; firstInvalid = firstInvalid || fields.service.el; }

  return { ok, firstInvalid };
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.className = "form-note";

    const { ok, firstInvalid } = validate();

    if (!ok) {
      status.textContent = "Please fix the highlighted fields and try again.";
      status.classList.add("err");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Demo only: no backend. In a real build this posts to the CRM or an email API.
    const name = fields.name.el.value.trim();
    form.reset();
    Object.values(fields).forEach((f) => setError(f.el, false));

    status.textContent = `Thanks, ${name}. Your quote request is in — we reply within one business hour.`;
    status.classList.add("ok");
  });

  form.addEventListener("input", (event) => {
    const target = event.target;
    if (target && target.getAttribute("aria-invalid") === "true") {
      target.removeAttribute("aria-invalid");
    }
  });
}
