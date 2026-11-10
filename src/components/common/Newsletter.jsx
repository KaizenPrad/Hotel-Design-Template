import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { validateEmail } from "@/utils/validation";

const STORAGE_KEY = "luxe-haven.newsletter";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) setSubscribed(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = validateEmail(email);
    setError(message);
    if (message) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, email.trim().toLowerCase());
    } catch {
      /* storage unavailable */
    }
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-soft py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-[120px]"
      />
      <div className="container-luxe relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow align="center">The Luxe Haven Circle</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-6 text-cream">Stay in the Know</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="body-copy mx-auto mt-5 max-w-md">
              Receive invitations, seasonal offers and stories from Luxe Haven.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            {subscribed ? (
              <div
                role="status"
                className="mx-auto mt-10 flex max-w-lg items-start gap-4 border border-gold/30 bg-gold/[0.06] px-6 py-5 text-left"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
                <div>
                  <p className="text-sm text-cream">
                    Thank you. You&apos;re now part of the Luxe Haven circle.
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-sand/70">
                    Look out for our next letter — sent quietly, and only when there is something worth saying.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 max-w-lg">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Your email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="YOUR EMAIL ADDRESS"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (error) setError("");
                      }}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "newsletter-error" : undefined}
                      className="field-input h-[52px] bg-ink/40 text-center tracking-wide2 placeholder:text-[10px] placeholder:tracking-wide2 sm:text-left"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex h-[52px] items-center justify-center gap-3 border border-gold bg-gold px-7 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors duration-300 hover:border-champagne hover:bg-champagne"
                  >
                    Join Our List
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.7} />
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error" role="alert" className="mt-3 text-[11px] text-[#e6a08a]">
                    {error}
                  </p>
                )}
                <p className="mt-4 text-[10px] leading-relaxed tracking-wide text-sand/45">
                  No noise. Unsubscribe at any time. Read our{" "}
                  <Link to="/information/privacy" className="underline decoration-sand/30 underline-offset-4 hover:text-champagne">
                    privacy policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
