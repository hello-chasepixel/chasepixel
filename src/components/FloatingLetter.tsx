import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingLetterProps {
  children: ReactNode;
  className?: string;
  /** Color class for the glow, e.g. "primary" or "accent" */
  glow?: "primary" | "accent" | "acid";
  /** Duration of the float cycle in seconds */
  duration?: number;
  /** Delay before animation starts */
  delay?: number;
  /** How far it floats (px) */
  distance?: number;
}

const glowColors = {
  primary: "drop-shadow-[0_0_25px_hsl(333,100%,50%,0.3)]",
  accent: "drop-shadow-[0_0_25px_hsl(271,75%,45%,0.3)]",
  acid: "drop-shadow-[0_0_25px_hsl(66,100%,67%,0.25)]",
};

const FloatingLetter = ({
  children,
  className = "",
  glow = "primary",
  duration = 8,
  delay = 0,
  distance = 15,
}: FloatingLetterProps) => {
  return (
    <motion.div
      className={`absolute ${glowColors[glow]} ${className}`}
      animate={{
        y: [-distance, distance, -distance],
        x: [-distance * 0.5, distance * 0.5, -distance * 0.5],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingLetter;
