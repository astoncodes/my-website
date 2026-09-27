"use client";

import { useRef, useState } from "react";
import { LINKS } from "@/data/links";

type Field = "name" | "email" | "message";
type Values = Record<Field, string> & { website: string };
type Errors = Partial<Record<Field, string>>;

const FIELDS: Field[] = ["name", "email", "message"];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (!v.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL.test(v.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (!v.message.trim()) errors.message = "Write a message.";
  return errors;
}

function FieldShell({
  field,
  label,
  error,
  className,
  children,
}: {
  field: Field;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={`contact-${field}`} className="mb-1.5 block font-display text-sm text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`contact-${field}-error`} className="mt-1.5 text-[0.9375rem] text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Hands the message to the visitor's email app via mailto:. There's no
 * server-side sending yet, so the messages say exactly what happens.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "invalid" | "opened">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function update(field: keyof Values, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    // Once a field shows an error, re-check it while typing so the message clears when fixed.
    if (field !== "website" && errors[field]) {
      setErrors((e) => ({ ...e, [field]: validate(next)[field] }));
    }
    if (status === "opened") setStatus("idle");
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (values.website) return; // honeypot: only bots fill the hidden field

    const found = validate(values);
    setErrors(found);
    const firstInvalid = FIELDS.find((f) => found[f]);
    if (firstInvalid) {
      setStatus("invalid");
      formRef.current?.querySelector<HTMLElement>(`#contact-${firstInvalid}`)?.focus();
      return;
    }

    const subject = encodeURIComponent(`Message from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`
    );
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  const describe = (f: Field) => (errors[f] ? `contact-${f}-error` : undefined);

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-labelledby="contact-form-heading">
      <h3 id="contact-form-heading" className="font-display text-[0.9375rem] font-medium text-ink">
        Send a message
      </h3>
      <p className="mt-1 text-[0.9375rem] text-muted">This opens your email app with the message filled in.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FieldShell field="name" label="Name" error={errors.name}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className="field"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describe("name")}
          />
        </FieldShell>

        <FieldShell field="email" label="Email" error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="field"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describe("email")}
          />
        </FieldShell>

        <FieldShell field="message" label="Message" error={errors.message} className="sm:col-span-2">
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className="field resize-y"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describe("message")}
          />
        </FieldShell>
      </div>

      {/* Honeypot: hidden from people, often filled in by spam bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button type="submit" className="btn btn-primary">Send</button>
        <p role="status" className="min-w-0 flex-1 basis-60 text-[0.9375rem]">
          {status === "invalid" && <span className="text-danger">Check the highlighted fields.</span>}
          {status === "opened" && (
            <span className="text-ink">
              Your email app should now be open with the message ready to send. Nothing opened? Email{" "}
              <a href={`mailto:${LINKS.email}`} className="link">{LINKS.email}</a>.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
