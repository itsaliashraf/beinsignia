"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, CheckCircle, CircleNotch, WarningCircle } from "@phosphor-icons/react";
import { services, site } from "@/lib/site";

const TOPICS = [
  ...services.map((s) => ({ id: s.id, label: s.short })),
  { id: "gbp", label: "GBP Plans" },
  { id: "unsure", label: "Not sure yet" },
];

const EMPTY = { name: "", email: "", phone: "", company: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "That email address doesn't look right.";
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = "Use digits, spaces, + or dashes only.";
  if (v.message.trim().length < 20) e.message = "Tell us a little more, at least 20 characters.";
  return e;
}

function Field({ id, label, helper, error, optional, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between text-[14px] font-medium">
        {label}
        {optional && <span className="font-mono text-[10.5px] font-normal uppercase tracking-[0.12em] text-fg-subtle">Optional</span>}
      </label>
      {children}
      <AnimatePresence initial={false} mode="wait">
        {error ? (
          <motion.p
            key="err"
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1.5 text-[13px] text-danger"
          >
            <WarningCircle size={14} aria-hidden="true" />
            {error}
          </motion.p>
        ) : helper ? (
          <motion.p key="help" id={`${id}-help`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[13px] text-fg-subtle">
            {helper}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const inputCls = (invalid) =>
  `w-full rounded-xl border bg-canvas/60 px-4 text-[15px] text-fg placeholder:text-fg-subtle outline-none transition-[border-color,box-shadow] duration-300 focus:ring-4 ${
    invalid ? "border-danger/70 focus:border-danger focus:ring-danger/15" : "border-line-strong focus:border-accent focus:ring-accent/15"
  }`;

export default function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("service");
  const formRef = useRef(null);

  const [values, setValues] = useState(EMPTY);
  const [topics, setTopics] = useState(() => (TOPICS.some((t) => t.id === preset) ? [preset] : []));
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [attempted, setAttempted] = useState(false);

  const errorCount = Object.keys(errors).length;

  function update(e) {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched[e.target.name]) setErrors(validate(next));
  }

  function blur(e) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  }

  function toggle(id) {
    setTopics((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]));
  }

  function submit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setAttempted(true);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(found).length) {
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    const picked = TOPICS.filter((t) => topics.includes(t.id)).map((t) => t.label);
    const lines = [`Name: ${values.name}`, `Email: ${values.email}`];
    if (values.phone.trim()) lines.push(`Phone: ${values.phone}`);
    if (values.company.trim()) lines.push(`Company / website: ${values.company}`);
    if (picked.length) lines.push(`Interested in: ${picked.join(", ")}`);
    const body = [...lines, "", values.message].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(`New enquiry from ${values.name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setTimeout(() => setStatus("sent"), 700);
  }

  function reset() {
    setValues(EMPTY);
    setTopics([]);
    setTouched({});
    setErrors({});
    setAttempted(false);
    setStatus("idle");
  }

  const describedBy = (name, hasHelper) =>
    errors[name] && touched[name] ? `${name}-error` : hasHelper ? `${name}-help` : undefined;
  const showErr = (name) => (touched[name] ? errors[name] : undefined);

  return (
    <div className="glass relative overflow-hidden rounded-card p-6 sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[560px] flex-col items-start justify-center gap-6"
            role="status"
          >
            <motion.span
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.1 }}
              className="grid size-14 place-items-center rounded-2xl bg-accent text-on-accent"
            >
              <CheckCircle size={28} weight="fill" aria-hidden="true" />
            </motion.span>
            <h2 className="text-3xl font-medium tracking-[-0.03em]">Your message is ready to send.</h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-fg-muted">
              We opened your email app with everything filled in. Hit send and it lands straight in our inbox. If nothing
              opened, email{" "}
              <a href={`mailto:${site.email}`} className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent">
                {site.phone}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={reset}
              className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-[15px] font-medium transition-[transform,background-color] hover:bg-fg/[0.04] active:scale-[0.98]"
            >
              Write another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={submit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-7"
            aria-describedby={attempted && errorCount ? "form-errors" : undefined}
          >
            <AnimatePresence>
              {attempted && errorCount > 0 && (
                <motion.div
                  id="form-errors"
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="flex items-center gap-2 rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-[14px] text-danger">
                    <WarningCircle size={16} aria-hidden="true" />
                    {errorCount === 1 ? "One field needs your attention." : `${errorCount} fields need your attention.`}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field id="name" label="Full name" error={showErr("name")}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={update}
                  onBlur={blur}
                  aria-invalid={!!showErr("name")}
                  aria-describedby={describedBy("name")}
                  className={`h-12 ${inputCls(showErr("name"))}`}
                  placeholder="Ayesha Malik"
                />
              </Field>
              <Field id="email" label="Email" error={showErr("email")}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={update}
                  onBlur={blur}
                  aria-invalid={!!showErr("email")}
                  aria-describedby={describedBy("email")}
                  className={`h-12 ${inputCls(showErr("email"))}`}
                  placeholder="you@company.com"
                />
              </Field>
              <Field id="phone" label="Phone" optional error={showErr("phone")} helper="For a quicker call back.">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={update}
                  onBlur={blur}
                  aria-invalid={!!showErr("phone")}
                  aria-describedby={describedBy("phone", true)}
                  className={`h-12 ${inputCls(showErr("phone"))}`}
                  placeholder="+92 300 0000000"
                />
              </Field>
              <Field id="company" label="Company or website" optional helper="Helps us prepare for the call.">
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={values.company}
                  onChange={update}
                  aria-describedby="company-help"
                  className={`h-12 ${inputCls(false)}`}
                  placeholder="yourbusiness.com"
                />
              </Field>
            </div>

            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3 flex w-full items-baseline justify-between text-[14px] font-medium">
                What can we help with?
                <span className="font-mono text-[10.5px] font-normal uppercase tracking-[0.12em] text-fg-subtle">Pick any</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((t) => {
                  const on = topics.includes(t.id);
                  return (
                    <motion.button
                      layout
                      key={t.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(t.id)}
                      whileTap={{ scale: 0.96 }}
                      className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-[13.5px] transition-colors duration-300 ${
                        on ? "border-accent bg-accent text-on-accent" : "border-line-strong text-fg-muted hover:border-fg/40 hover:text-fg"
                      }`}
                    >
                      <AnimatePresence initial={false}>
                        {on && (
                          <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <Check size={13} weight="bold" aria-hidden="true" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {t.label}
                    </motion.button>
                  );
                })}
              </div>
            </fieldset>

            <Field id="message" label="Tell us about your project" error={showErr("message")} helper="Goals, timeline, what you've tried so far.">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={update}
                onBlur={blur}
                aria-invalid={!!showErr("message")}
                aria-describedby={describedBy("message", true)}
                className={`resize-y py-3.5 leading-relaxed ${inputCls(showErr("message"))}`}
                placeholder="We're a dental clinic in DHA and want more bookings from Google…"
              />
            </Field>

            <div className="flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[36ch] text-[13px] leading-relaxed text-fg-subtle">
                Sending opens your email app with this message filled in.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-14 shrink-0 items-center justify-between gap-3 rounded-full bg-accent pl-6 pr-1.5 text-base font-medium text-on-accent transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-hover active:scale-[0.98] disabled:cursor-progress disabled:opacity-80"
              >
                {status === "sending" ? "Opening email app…" : "Send message"}
                <span className="grid size-11 place-items-center rounded-full bg-on-accent/12 transition-transform duration-500 ease-out-expo group-hover:rotate-45">
                  {status === "sending" ? (
                    <CircleNotch size={18} className="animate-spin" aria-hidden="true" />
                  ) : (
                    <ArrowUpRight size={18} aria-hidden="true" />
                  )}
                </span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactFormSkeleton() {
  return (
    <div className="glass rounded-card p-6 sm:p-10" aria-hidden="true">
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="shimmer h-3.5 w-24 rounded-full" />
              <div className="shimmer h-12 rounded-xl" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {[80, 96, 72, 88, 110, 76, 90].map((w, i) => (
            <div key={i} className="shimmer h-10 rounded-full" style={{ width: w }} />
          ))}
        </div>
        <div className="shimmer h-36 rounded-xl" />
        <div className="shimmer ml-auto h-14 w-48 rounded-full" />
      </div>
    </div>
  );
}
