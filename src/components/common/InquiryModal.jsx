import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Check, Mail, Phone, User, Users } from "lucide-react";
import Modal from "@/components/ui/Modal";
import Field from "@/components/ui/Field";
import { cn } from "@/utils/cn";
import { todayISO } from "@/utils/date";
import { validateEmail, validateRequired } from "@/utils/validation";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "2",
  notes: "",
};

export default function InquiryModal({
  open,
  onClose,
  eyebrow = "Enquiries",
  title = "Make an Enquiry",
  description,
  subject = "General enquiry",
  cta = "Send Enquiry",
  successTitle = "Your request is with us",
}) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  }, [open, subject]);

  const minDate = useMemo(() => todayISO(), []);

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {
      name: validateRequired(form.name, "Your name"),
      email: validateEmail(form.email),
      date: form.date && form.date < minDate ? "Please choose today or a future date." : "",
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;
    setSubmitted(true);
    try {
      const key = "luxe-haven.enquiries";
      const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]");
      window.localStorage.setItem(
        key,
        JSON.stringify([...existing, { ...form, subject, createdAt: new Date().toISOString() }]),
      );
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      eyebrow={eyebrow}
      title={submitted ? successTitle : title}
      size="md"
    >
      {submitted ? (
        <div className="py-4 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.08]">
            <Check className="h-6 w-6 text-gold" strokeWidth={1.5} />
          </span>
          <p className="mt-6 font-display text-2xl text-cream">Thank you, {form.name.split(" ")[0]}.</p>
          <p className="body-copy mx-auto mt-3 max-w-sm text-sm">
            Your {subject.toLowerCase()} request has been received. A member of our team will be in touch
            within one business day to confirm the details.
          </p>
          <dl className="mx-auto mt-7 max-w-sm divide-y divide-line border-y border-line text-left text-xs">
            <div className="flex items-center justify-between py-3">
              <dt className="text-sand/60">Subject</dt>
              <dd className="text-cream">{subject}</dd>
            </div>
            <div className="flex items-center justify-between py-3">
              <dt className="text-sand/60">Preferred date</dt>
              <dd className="text-cream">{form.date || "Flexible"}</dd>
            </div>
            <div className="flex items-center justify-between py-3">
              <dt className="text-sand/60">Guests</dt>
              <dd className="text-cream">{form.guests}</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={onClose}
            className="mt-7 inline-flex border border-gold bg-gold px-7 py-3.5 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors hover:bg-champagne"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {description && <p className="mb-6 text-sm leading-relaxed text-sand">{description}</p>}

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="inquiry-name" error={errors.name}>
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sand/40" strokeWidth={1.5} />
                <input
                  id="inquiry-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "inquiry-name-error" : undefined}
                  className="field-input pl-10"
                  placeholder="Your name"
                />
              </div>
            </Field>

            <Field label="Email" htmlFor="inquiry-email" error={errors.email}>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sand/40" strokeWidth={1.5} />
                <input
                  id="inquiry-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "inquiry-email-error" : undefined}
                  className="field-input pl-10"
                  placeholder="you@example.com"
                />
              </div>
            </Field>

            <Field label="Phone" htmlFor="inquiry-phone" optional>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sand/40" strokeWidth={1.5} />
                <input
                  id="inquiry-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  className="field-input pl-10"
                  placeholder="+1 (212) 555-0000"
                />
              </div>
            </Field>

            <Field label="Preferred date" htmlFor="inquiry-date" error={errors.date} optional>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sand/40" strokeWidth={1.5} />
                <input
                  id="inquiry-date"
                  type="date"
                  min={minDate}
                  value={form.date}
                  onChange={(event) => update("date", event.target.value)}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? "inquiry-date-error" : undefined}
                  className="field-input pl-10"
                />
              </div>
            </Field>

            <Field label="Guests" htmlFor="inquiry-guests">
              <div className="relative">
                <Users className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sand/40" strokeWidth={1.5} />
                <select
                  id="inquiry-guests"
                  value={form.guests}
                  onChange={(event) => update("guests", event.target.value)}
                  className="select-dark pl-10"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8", "10", "12", "24", "50+"].map((value) => (
                    <option key={value} value={value} className="bg-ink-soft">
                      {value} {value === "1" ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>
            </Field>

            <Field label="Subject" htmlFor="inquiry-subject">
              <input
                id="inquiry-subject"
                type="text"
                value={subject}
                readOnly
                className={cn("field-input cursor-default text-sand/80")}
              />
            </Field>
          </div>

          <Field label="Notes" htmlFor="inquiry-notes" optional className="mt-5">
            <textarea
              id="inquiry-notes"
              rows={4}
              value={form.notes}
              onChange={(event) => update("notes", event.target.value)}
              className="field-input resize-none"
              placeholder="Tell us anything that would help us prepare."
            />
          </Field>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] leading-relaxed tracking-wide text-sand/45">
              This is a portfolio demonstration. No real reservation is created.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center border border-gold bg-gold px-7 py-3.5 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors hover:bg-champagne"
            >
              {cta}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
