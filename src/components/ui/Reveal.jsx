import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.85,
  once = true,
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </Component>
  );
}

export { EASE };
