import { Link } from "react-router-dom";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { images } from "@/data/hotel";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "Luxe Haven | Page Not Found",
    "The page you were looking for is no longer here. Return to Luxe Haven Hotel or explore our rooms and suites.",
  );

  return (
    <>
      <PageHero
        eyebrow="404"
        title={"This page has\nchecked out."}
        subtitle="The address you followed no longer exists — but the hotel is very much open. Let us point you back in the right direction."
        image={images.lobby}
        alt="The warmly lit lobby of Luxe Haven Hotel"
        compact
        align="center"
      >
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/" size="lg" arrow>
            Return Home
          </Button>
          <Button to="/rooms" variant="outline" size="lg">
            View Rooms &amp; Suites
          </Button>
        </div>
        <p className="mt-8 text-center text-[10px] uppercase tracking-wide2 text-sand/45">
          Or{" "}
          <Link to="/booking" className="text-champagne underline decoration-gold/40 underline-offset-4 hover:text-gold">
            check availability
          </Link>{" "}
          for your dates
        </p>
      </PageHero>
    </>
  );
}
