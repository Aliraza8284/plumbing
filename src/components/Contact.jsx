// Contact.jsx
import { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Siren,
  Wrench,
  ClipboardList,
  Clock,
} from "lucide-react";

/* =========================================================
   GlobelFixs — Contact Section (compact + professional)
   · 24-hour service Mon–Sat · Sunday off
   Palette: #F6F4F2 | #425664 | #C6AD8F | #1f2a33
   ========================================================= */

const PHONE = "+1 (844) 212-91-86";
const TEL = "tel:+18442129186";
const ADDRESS = "155 S Fair Oaks Ave, Pasadena, CA 91105";

const HOURS = [
  { label: "Mon – Sat", time: "24 Hours", open: true },
  { label: "Sunday", time: "Closed", open: false },
];

const AREAS =
  "Hollywood, Burbank, Glendale, Pasadena, Santa Monica, Long Beach, Culver City, Beverly Hills, Torrance and Silverlake";

const SITUATIONS = [
  { id: "emergency", icon: Siren, title: "Emergency", hint: "Active leak, flooding, no water" },
  { id: "repair", icon: Wrench, title: "Repair", hint: "Something is broken or slow" },
  { id: "quote", icon: ClipboardList, title: "Quote", hint: "Planned work, no rush" },
];

const SERVICES = [
  "Leak detection & repair",
  "Drain & sewer cleaning",
  "Water heater service",
  "Bathroom & kitchen",
  "Plumbing maintenance",
  "Gas line plumbing",
  "Other / not sure",
];

function getOfficeStatus() {
  const wd = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "short",
  }).format(new Date());
  const day = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[wd];
  if (day === 0) return { open: false, text: "Sunday closed · Emergency line open" };
  return { open: true, text: "Open now · 24-hour service" };
}

const EMPTY = { name: "", email: "", phone: "", service: "", message: "" };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  if (!f.email.trim()) e.email = "Enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Check the email format.";
  if (!f.message.trim()) e.message = "Tell us what's going on.";
  return e;
}

const inputCls = (err) =>
  `w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] text-[#1f2a33] placeholder:text-[#425664]/40 outline-none transition focus:border-[#425664] focus:ring-2 focus:ring-[#C6AD8F]/50 ${
    err ? "border-red-500" : "border-[#ddd6cd]"
  }`;

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 flex items-baseline justify-between text-[12.5px] font-semibold text-[#425664]"
      >
        {label}
        {optional && <span className="text-[11px] font-normal text-[#425664]/55">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1 flex items-center gap-1 text-[12px] text-red-700">
          <AlertCircle size={12} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [situation, setSituation] = useState("emergency"); // default emergency
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");
  const [sentTo, setSentTo] = useState("");
  const [office, setOffice] = useState(null);

  useEffect(() => {
    setOffice(getOfficeStatus());
    const t = setInterval(() => setOffice(getOfficeStatus()), 60000);
    return () => clearInterval(t);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = ["name", "email", "message"].find((k) => found[k]);
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setState("sending");
    try {
      await new Promise((r) => setTimeout(r, 900));
      setSentTo(form.email);
      setForm(EMPTY);
      setState("sent");
    } catch {
      setState("failed");
    }
  };

  const err = (k) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `contact-${k}-err` : undefined,
  });

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F6F4F2] py-12 sm:py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#C6AD8F]/12 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#425664]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#425664 1px, transparent 1px), linear-gradient(90deg, #425664 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <header className="mb-7 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e0da] bg-white px-3 py-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6AD8F]" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#425664]">
              Get in touch
            </span>
          </span>

          <h2 className="gf-display mt-3 text-[26px] leading-[1.1] text-[#1f2a33] sm:text-[32px]">
            Tell us what's wrong.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#425664]">We'll be there.</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-2 rounded bg-[#C6AD8F]/40" />
            </span>
          </h2>

          <p className="mt-2 max-w-[56ch] text-[13.5px] leading-relaxed text-[#425664]/75">
            24-hour service, Monday through Saturday. We reply within one hour —
            Sunday the emergency line is still open.
          </p>
        </header>

        {/* Main panel */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-24px_rgba(66,86,100,0.3)] ring-1 ring-[#e5e0da] lg:grid-cols-[5fr_7fr]">
          {/* ---------- Left: contact desk ---------- */}
          <aside className="relative flex flex-col gap-5 overflow-hidden bg-gradient-to-br from-[#425664] to-[#3a4d5a] p-6 text-white sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#C6AD8F]/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#C6AD8F]/12 blur-2xl" />

            {/* Status */}
            <div className="relative">
              <div
                role="status"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] font-semibold backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  {office?.open && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6AD8F] opacity-70 motion-reduce:animate-none" />
                  )}
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      office?.open ? "bg-[#C6AD8F]" : "bg-white/50"
                    }`}
                  />
                </span>
                {office ? office.text : "24-hour service"}
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <p className="mb-1 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F]">
                Call any time · 24/7
              </p>
              <a
                href={TEL}
                className="inline-flex items-center gap-2 text-[15px] font-bold leading-tight tracking-wide text-white hover:text-[#C6AD8F] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6AD8F]"
              >
                <Phone size={16} />
                {PHONE}
              </a>
            </div>

            {/* Contact items (No Email) */}
            <ul className="relative space-y-2.5 text-[13px]">
              <li className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#C6AD8F]" aria-hidden="true" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 underline decoration-white/30 underline-offset-2 hover:decoration-[#C6AD8F]"
                >
                  155 S Fair Oaks Ave
                  <br />
                  Pasadena, CA 91105
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="relative">
              <h3 className="mb-2 flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F]">
                <Clock size={12} aria-hidden="true" /> Service hours
              </h3>
              <dl className="divide-y divide-white/10 border-y border-white/10 text-[12.5px]">
                {HOURS.map((h) => (
                  <div key={h.label} className="flex justify-between gap-4 py-2">
                    <dt className="text-white/75">{h.label}</dt>
                    <dd className={`font-semibold ${h.open ? "text-white" : "text-white/50"}`}>
                      {h.time}
                    </dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4 py-2">
                  <dt className="font-semibold text-[#C6AD8F]">Emergency line</dt>
                  <dd className="font-bold text-[#C6AD8F]">24/7</dd>
                </div>
              </dl>
            </div>

            <p className="relative mt-auto text-[11.5px] leading-relaxed text-white/60">
              We serve {AREAS}.
            </p>
          </aside>

          {/* ---------- Right: form ---------- */}
          <div className="p-6 sm:p-7">
            {state === "sent" ? (
              <div role="status" className="flex h-full flex-col items-start justify-center gap-3 py-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#C6AD8F]/25 text-[#425664]">
                  <CheckCircle2 size={24} aria-hidden="true" />
                </span>
                <h3 className="text-[22px] font-extrabold text-[#1f2a33]">Message sent</h3>
                <p className="max-w-[44ch] text-[13.5px] leading-relaxed text-[#425664]/85">
                  We'll reply to{" "}
                  <strong className="font-semibold text-[#1f2a33]">{sentTo}</strong> within one
                  hour. If water is still running, call{" "}
                  <strong className="font-semibold">{PHONE}</strong> now.
                </p>
                <button
                  type="button"
                  onClick={() => setState("idle")}
                  className="mt-1 rounded-full border border-[#425664]/30 px-4 py-2 text-[13px] font-semibold text-[#425664] transition hover:bg-[#F6F4F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Situation */}
                <fieldset>
                  <legend className="mb-2 text-[12.5px] font-semibold text-[#425664]">
                    What's the situation?
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {SITUATIONS.map(({ id, icon: Icon, title, hint }) => (
                      <label key={id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="situation"
                          value={id}
                          checked={situation === id}
                          onChange={() => setSituation(id)}
                          className="peer sr-only"
                        />
                        <span className="block h-full rounded-lg border border-[#ddd6cd] bg-white p-2.5 transition peer-checked:border-[#425664] peer-checked:bg-[#F6F4F2] peer-checked:ring-1 peer-checked:ring-[#425664] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#425664] hover:border-[#C6AD8F]">
                          <Icon
                            size={16}
                            className={`mb-1.5 ${
                              id === "emergency" ? "text-[#b04632]" : "text-[#425664]"
                            }`}
                            aria-hidden="true"
                          />
                          <span className="block text-[13px] font-bold text-[#1f2a33]">{title}</span>
                          <span className="mt-0.5 block text-[11.5px] leading-snug text-[#425664]/70">
                            {hint}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Emergency notice */}
                {situation === "emergency" && (
                  <div className="flex flex-col gap-2.5 rounded-lg border border-[#C6AD8F] bg-[#C6AD8F]/15 p-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[13px] leading-snug text-[#1f2a33]">
                      <strong className="font-semibold">Calling is fastest.</strong> Shut off your
                      main water valve if you can.
                    </p>
                    <a
                      href={TEL}
                      className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#C6AD8F] to-[#b89a78] px-3.5 py-2 text-[12px] font-bold text-white shadow-md shadow-[#C6AD8F]/30 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
                    >
                      <Phone size={13} aria-hidden="true" />
                      {PHONE}
                    </a>
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field id="contact-name" label="Full name" error={errors.name}>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputCls(errors.name)}
                      {...err("name")}
                    />
                  </Field>
                  <Field id="contact-email" label="Email" error={errors.email}>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputCls(errors.email)}
                      {...err("email")}
                    />
                  </Field>
                  <Field id="contact-phone" label="Phone" optional>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className={inputCls(false)}
                    />
                  </Field>
                  <Field id="contact-service" label="Service" optional>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputCls(false)} cursor-pointer`}
                    >
                      <option value="">Choose a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Message */}
                <Field id="contact-message" label="What's happening?" error={errors.message}>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Where is the problem, when did it start, and anything you've tried?"
                    className={`${inputCls(errors.message)} resize-none`}
                    {...err("message")}
                  />
                </Field>

                {state === "failed" && (
                  <p
                    role="alert"
                    className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-[13px] text-red-800"
                  >
                    <AlertCircle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                    Your message didn't send. Try again, or call {PHONE}.
                  </p>
                )}

                {/* Submit */}
                <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C6AD8F] to-[#b89a78] px-6 py-3 text-[13.5px] font-bold text-white shadow-md shadow-[#C6AD8F]/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C6AD8F]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] disabled:cursor-not-allowed disabled:opacity-70 active:translate-y-0"
                  >
                    {state === "sending" ? (
                      <>
                        <svg
                          className="h-3.5 w-3.5 animate-spin motion-reduce:animate-none"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M21 12a9 9 0 1 1-6.2-8.5" />
                        </svg>
                        Sending
                      </>
                    ) : (
                      <>
                        <Send size={14} aria-hidden="true" />
                        Send message
                      </>
                    )}
                  </button>
                  <p className="text-[11.5px] text-[#425664]/65">
                    We only use your details to reply about this request.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}