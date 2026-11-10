import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PageLoader from "./components/common/PageLoader";

const Home = lazy(() => import("./pages/Home"));
const Rooms = lazy(() => import("./pages/Rooms"));
const RoomDetails = lazy(() => import("./pages/RoomDetails"));
const Dining = lazy(() => import("./pages/Dining"));
const Spa = lazy(() => import("./pages/Spa"));
const Experiences = lazy(() => import("./pages/Experiences"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const Events = lazy(() => import("./pages/Events"));
const Information = lazy(() => import("./pages/Information"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:slug" element={<RoomDetails />} />
              <Route path="/dining" element={<Dining />} />
              <Route path="/spa" element={<Spa />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/events" element={<Events />} />
              <Route path="/information/:topic" element={<Information />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
