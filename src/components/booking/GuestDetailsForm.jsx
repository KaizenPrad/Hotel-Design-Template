import { useRef, useState } from "react";
import { AlertCircle, ArrowRight, Check } from "lucide-react";
import Field from "@/components/ui/Field";
import { useBooking } from "@/context/BookingContext";
import { validateEmail, validatePhone, validateRequired } from "@/utils/validation";

const emptyGuest = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  requests: "",
};

export default function GuestDetailsForm({ onConfirmed }) {
  const { confirmBooking, selectedRoom, nights } = useBooking();
  const [guest, setGuest] = useState(emptyGuest);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const fieldRefs = useRef({});

  const update = (key, value) => {
    setGuest((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: "" }));
    if (formError) setFormError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedRoom) {
      setFormError("Please select a room before confirming your reservation.");
      return;
    }
    if (nights <= 0) {
      setFormError("Please choose valid check-in and check-out dates before confirming.");
      return;
    }

    const nextErrors = {
      firstName: validateRequired(guest.firstName, "First name"),
      lastName: validateRequired(guest.lastName, "Last name"),
      email: validateEmail(guest.email),
      phone: validatePhone(guest.phone, true),
    };
    setErrors(nextErrors);

    const firstInvalid = ["firstName", "lastName", "email", "phone"].find((key) => nextErrors[key]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    const reservation = confirmBooking({
      firstName: guest.firstName.trim(),
      lastName: guest.lastName.trim(),
      email: guest.email.trim(),
      phone: guest.phone.trim(),
      requests: guest.requests.trim(),
    });
    if (reservation) {
      onConfirmed?.(reservation);
      setGuest(emptyGuest);
    }
  };

  return (
    <form id="guest-form" onSubmit={handleSubmit} noValidate className="border border-line bg-surface/20 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] uppercase tracking-label text-gold">Step 02</p>
          <h2 className="mt-2 font-display text-3xl text-cream">Guest Information</h2>
        </div>
        <span className="hidden border border-line px-2.5 py-1 text-[8px] uppercase tracking-wide2 text-sand/50 sm:inline-block">
          Secure &amp; private
        </span>
      </div>
      <p className="mt-3 text-[12px] leading-relaxed text-sand/70">
        We hold your details only for the duration of your stay. Fields marked with an asterisk are
        required.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="First name *" htmlFor="guest-first-name" error={errors.firstName}>
          <input
            ref={(node) => {
              fieldRefs.current.firstName = node;
            }}
            id="guest-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={guest.firstName}
            onChange={(event) => update("firstName", event.target.value)}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "guest-first-name-error" : undefined}
            className="field-input"
            placeholder="Alexandra"
          />
        </Field>

        <Field label="Last name *" htmlFor="guest-last-name" error={errors.lastName}>
          <input
            ref={(node) => {
              fieldRefs.current.lastName = node;
            }}
            id="guest-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={guest.lastName}
            onChange={(event) => update("lastName", event.target.value)}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "guest-last-name-error" : undefined}
            className="field-input"
            placeholder="Hart"
          />
        </Field>

        <Field label="Email *" htmlFor="guest-email" error={errors.email}>
          <input
            ref={(node) => {
              fieldRefs.current.email = node;
            }}
            id="guest-email"
            name="email"
            type="email"
            autoComplete="email"
            value={guest.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "guest-email-error" : undefined}
            className="field-input"
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Phone *" htmlFor="guest-phone" error={errors.phone}>
          <input
            ref={(node) => {
              fieldRefs.current.phone = node;
            }}
            id="guest-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={guest.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "guest-phone-error" : undefined}
            className="field-input"
            placeholder="+1 (212) 555-0000"
          />
        </Field>

        <Field label="Special requests" htmlFor="guest-requests" optional className="sm:col-span-2">
          <textarea
            id="guest-requests"
            name="requests"
            rows={4}
            value={guest.requests}
            onChange={(event) => update("requests", event.target.value)}
            className="field-input resize-none"
            placeholder="An early arrival, a particular pillow, a table for two — tell us and we will arrange it."
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-[10px] leading-relaxed text-sand/45">
          <Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" strokeWidth={1.5} />
          Complimentary cancellation up to 48 hours before arrival.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 border border-gold bg-gold px-7 py-3.5 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors hover:bg-champagne sm:hidden"
        >
          Confirm Reservation
          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.6} />
        </button>
      </div>

      {formError && (
        <p role="alert" className="mt-4 flex items-start gap-2 text-[11px] text-[#e6a08a]">
          <AlertCircle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
          {formError}
        </p>
      )}
    </form>
  );
}
