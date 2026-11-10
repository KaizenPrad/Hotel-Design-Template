import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:border focus:border-gold focus:bg-ink focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-wide2 focus:text-champagne"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <div
        aria-hidden="true"
        className="grain pointer-events-none fixed inset-0 z-[95] opacity-[0.028] mix-blend-soft-light"
      />
    </div>
  );
}
