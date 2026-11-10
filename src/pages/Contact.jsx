import { useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  CarFront,
  Check,
  Clock3,
  Footprints,
  Mail,
  MapPin,
  Phone,
  Send,
  TrainFront,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import MapPanel from "@/components/common/MapPanel";
import Button from "@/components/ui/Button";
import Field from "@/components/ui/Field";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/common/CtaBand";
import { hotel, images } from "@/data/hotel";
import { usePageMeta } from "@/hooks/usePageMeta";
import { validateEmail, validatePhone, validateRequired } from "@/utils/validation";

const topics = [
  "General enquiry",
  "Room reservation",
  "Dining reservation",
  "Spa & wellness",
  "Events & private dining",
  "Press & partnerships",
  "Accessibility",
  "Careers",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  topic: topics[0],
  message: "",
};

const details = [
  {
    icon: MapPin,
    label: "The Hotel",
    value: `${hotel.address}, ${hotel.city}`,
    href: hotel.directionsUrl,
    external: true,
  },
  { icon: Phone, label: "Telephone", value: hotel.phone, href: hotel.phoneHref },
  { icon: Mail, label: "Email", value: hotel.email, href: `mailto:${hotel.email}` },
];

const hours = [
  { label: "Reservations", value: "24 hours, every day" },
  { label: "Concierge", value: "24 hours, every day" },
  { label: "Reception", value: "7:00 AM – 11:00 PM" },
];

const gettingHere = [
  {
    icon: Footprints,
    title: "On foot",
    text: "Twelve minutes from Grand Central Terminal, five from Fifth Avenue.",
  },
  {
    icon: TrainFront,
    title: "By subway",
    text: "E or M to Fifth Avenue / 53rd Street, then two blocks east.",
  },
  {
    icon: CarFront,
    title: "By car",
    text: "Valet parking at the entrance on East 50th Street. Airport transfers on request.",
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = useRef({});

  usePageMeta(
    "Luxe Haven | Contact",
    "Contact Luxe Haven Hotel at 200 East 50th Street, New York. Reach reservations, the concierge, dining, spa or events — by phone, email or enquiry form.",
  );

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageError = !form.message.trim()
      ? "Please tell us a little about your enquiry."
      : form.message.trim().length < 10
        ? "A few more words would help us help you."
        : "";

    const nextErrors = {
      name: validateRequired(form.name, "Your name"),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
      message: messageError,
    };

    setErrors(nextErrors);

    const firstInvalid = ["name", "email", "phone", "message"].find((key) => nextErrors[key]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    try {
      const key = "luxe-haven.enquiries";
      const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]");
      window.localStorage.setItem(
        key,
        JSON.stringify([
          ...existing,
          {
            ...form,
            subject: form.topic,
            createdAt: new Date().toISOString(),
          },
        ]),
      );
    } catch {
      /* storage unavailable */
    }

    setSubmitted(true);
  };

  const reset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  const firstName = useMemo(() => form.name.trim().split(" ")[0], [form.name]);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={"At Your\nService"}
        subtitle="A question, a preference, a plan that needs a quiet word. Write to us, or call the desk — someone is always here."
        image={images.reception}
        alt="The reception desk at Luxe Haven Hotel, with warm wood and soft lighting"
        compact
        meta={[
          { label: "Telephone", value: hotel.phone },
          { label: "Email", value: hotel.email },
          { label: "Concierge", value: "24 hours" },
        ]}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Write to us</Eyebrow>
                <h2 className="mt-5 font-display text-3xl text-cream sm:text-4xl">
                  Send an Enquiry
                </h2>
                <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-sand/65">
                  We answer every message personally, usually within one business day. For anything
                  urgent, please call the desk.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-8 border border-line bg-ink-soft p-6 sm:p-8">
                  {submitted ? (
                    <div role="status" className="py-6 text-center">
                      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.08]">
                        <Check aria-hidden="true" className="h-6 w-6 text-gold" strokeWidth={1.5} />
                      </span>
                      <p className="mt-6 font-display text-3xl text-cream">
                        Thank you{firstName ? `, ${firstName}` : ""}.
                      </p>
                      <p className="body-copy mx-auto mt-3 max-w-sm text-sm">
                        Your message is with us. A member of our team will reply to{" "}
                        <span className="text-cream">{form.email}</span> within one business day.
                      </p>
                      <dl className="mx-auto mt-7 max-w-sm divide-y divide-line border-y border-line text-left text-xs">
                        <div className="flex items-center justify-between gap-4 py-3">
                          <dt className="text-sand/60">Subject</dt>
                          <dd className="text-right text-cream">{form.topic}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-4 py-3">
                          <dt className="text-sand/60">Reference</dt>
                          <dd className="font-mono text-[11px] tracking-[0.16em] text-champagne">
                            LH-{new Date().getFullYear()}-
                            {String(Math.abs(form.message.length * 37 + form.name.length * 11)).padStart(4, "0")}
                          </dd>
                        </div>
                      </dl>
                      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                        <Button onClick={reset} variant="outline">
                          Send Another Message
                        </Button>
                        <Button to="/booking" arrow>
                          Check Availability
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Full name" htmlFor="contact-name" error={errors.name}>
                          <input
                            ref={(node) => {
                              fieldRefs.current.name = node;
                            }}
                            id="contact-name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={(event) => update("name", event.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "contact-name-error" : undefined}
                            className="field-input"
                            placeholder="Your name"
                          />
                        </Field>

                        <Field label="Email" htmlFor="contact-email" error={errors.email}>
                          <input
                            ref={(node) => {
                              fieldRefs.current.email = node;
                            }}
                            id="contact-email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={(event) => update("email", event.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "contact-email-error" : undefined}
                            className="field-input"
                            placeholder="you@example.com"
                          />
                        </Field>

                        <Field label="Phone" htmlFor="contact-phone" error={errors.phone} optional>
                          <input
                            ref={(node) => {
                              fieldRefs.current.phone = node;
                            }}
                            id="contact-phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={(event) => update("phone", event.target.value)}
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                            className="field-input"
                            placeholder="+1 (212) 555-0000"
                          />
                        </Field>

                        <Field label="Subject" htmlFor="contact-topic">
                          <select
                            id="contact-topic"
                            value={form.topic}
                            onChange={(event) => update("topic", event.target.value)}
                            className="select-dark"
                          >
                            {topics.map((topic) => (
                              <option key={topic} value={topic} className="bg-ink-soft">
                                {topic}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>

                      <Field
                        label="Message"
                        htmlFor="contact-message"
                        error={errors.message}
                        className="mt-5"
                      >
                        <textarea
                          ref={(node) => {
                            fieldRefs.current.message = node;
                          }}
                          id="contact-message"
                          rows={6}
                          value={form.message}
                          onChange={(event) => update("message", event.target.value)}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "contact-message-error" : undefined}
                          className="field-input resize-none"
                          placeholder="Tell us how we can help."
                        />
                      </Field>

                      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-xs text-[10px] leading-relaxed text-sand/40">
                          This is a portfolio demonstration. Your message is stored locally and never
                          sent.
                        </p>
                        <button
                          type="submit"
                          className="group inline-flex items-center justify-center gap-3 border border-gold bg-gold px-7 py-3.5 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors hover:border-champagne hover:bg-champagne"
                        >
                          Send Enquiry
                          <Send
                            aria-hidden="true"
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                            strokeWidth={1.6}
                          />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="border border-line bg-surface/20 p-6 sm:p-8">
                  <h2 className="text-[10px] font-medium uppercase tracking-label text-gold">
                    The Hotel
                  </h2>
                  <dl className="mt-5 divide-y divide-line border-y border-line">
                    {details.map((detail) => {
                      const Icon = detail.icon;
                      return (
                        <div key={detail.label} className="py-4">
                          <dt className="sr-only">{detail.label}</dt>
                          <dd>
                            <a
                              href={detail.href}
                              target={detail.external ? "_blank" : undefined}
                              rel={detail.external ? "noreferrer" : undefined}
                              className="group flex items-start gap-4"
                            >
                              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-gold/80">
                                <Icon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.4} />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[8px] uppercase tracking-label text-sand/45">
                                  {detail.label}
                                </span>
                                <span className="mt-1 block break-words text-[13px] leading-relaxed text-cream transition-colors group-hover:text-champagne">
                                  {detail.value}
                                </span>
                              </span>
                            </a>
                          </dd>
                        </div>
                      );
                    })}
                  </dl>

                  <h3 className="mt-8 inline-flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-label text-gold">
                    <Clock3 aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.4} />
                    Hours
                  </h3>
                  <dl className="mt-4 space-y-3">
                    {hours.map((entry) => (
                      <div key={entry.label} className="flex items-baseline justify-between gap-4">
                        <dt className="text-[9px] uppercase tracking-label text-sand/55">
                          {entry.label}
                        </dt>
                        <dd className="text-[12px] text-cream">{entry.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <a
                    href={hotel.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide2 text-champagne transition-colors hover:text-gold"
                  >
                    Get Directions
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-5 border border-gold/25 bg-gold/[0.05] px-6 py-5">
                  <p className="font-display text-xl text-cream">Staying with us?</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-sand/60">
                    The concierge can arrange cars, tables, tickets and anything else the day requires
                    — before you arrive or once you are here.
                  </p>
                  <Button to="/booking" variant="bare" arrow className="mt-3">
                    Reserve a Room
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-soft py-20 sm:py-24">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Getting here</Eyebrow>
                <h2 className="display-md mt-6 text-cream">
                  In the middle
                  <br />
                  <span className="italic text-champagne">of it all</span>
                </h2>
                <p className="body-copy mt-5 max-w-md">
                  On East 50th Street, between the avenues. Close enough to walk to the city&apos;s best
                  rooms; far enough to sleep soundly.
                </p>
              </Reveal>

              <div className="mt-8 divide-y divide-line border-y border-line">
                {gettingHere.map((route, index) => {
                  const Icon = route.icon;
                  return (
                    <Reveal key={route.title} delay={0.06 * index}>
                      <div className="flex items-start gap-4 py-4">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-gold/80">
                          <Icon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.4} />
                        </span>
                        <div>
                          <p className="text-[10px] uppercase tracking-label text-cream">{route.title}</p>
                          <p className="mt-1 text-[12px] leading-relaxed text-sand/60">{route.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Button
                    href={hotel.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    arrow
                  >
                    Open Directions
                  </Button>
                  <a
                    href={hotel.phoneHref}
                    className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-sand transition-colors hover:text-champagne"
                  >
                    Call the Desk
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <MapPanel />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Your stay"
        title="We Will Keep a Room"
        description="Reserve directly with us for the best available rate, flexible cancellation and a warmer welcome."
        image={images.lobbyAlt}
        imageAlt="The lounge at Luxe Haven Hotel"
        primary={
          <Button to="/booking" size="lg" arrow>
            Check Availability
          </Button>
        }
        secondary={
          <Button to="/rooms" variant="outline" size="lg">
            Explore Rooms
          </Button>
        }
      />
    </>
  );
}
