import { M, A, L, B, E, R, T } from "@/assets";
import { motion } from "motion/react";

const rightLetters = [
  { src: L, alt: "L" },
  { src: B, alt: "B" },
  { src: E, alt: "E" },
  { src: R, alt: "R" },
  { src: T, alt: "T" },
];

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
    >
      {/* Final logo group */}
      <div className="relative flex items-center justify-center">
        {/* M */}
        <motion.img
          src={M}
          alt="M"
          className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28"
          initial={{
            opacity: 0,
            x: 35,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            delay: 1.15,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* A */}
        <motion.img
          src={A}
          alt="A"
          className="mx-2 h-16 w-auto object-contain sm:mx-2.5 sm:h-20 md:mx-3 md:h-24 lg:h-28"
          initial={{
            opacity: 0,
            x: 55,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            opacity: {
              duration: 0.35,
            },
            scale: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
            x: {
              delay: 0.65,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        />

        {/* L B E R T */}
        <motion.div
          className="ml-[-7px] flex items-center gap-3"
          initial={{
            opacity: 0,
            x: -35,
            scaleX: 0.75,
            transformOrigin: "center right",
          }}
          animate={{
            opacity: 1,
            x: 8,
            scaleX: 1,
          }}
          transition={{
            delay: 1.25,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {rightLetters.map((letter) => (
            <img
              key={letter.alt}
              src={letter.src}
              alt={letter.alt}
              className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28"
            />
          ))}
        </motion.div>

        {/* FLEXO SOLUTIONS */}
        <motion.div
          initial={{
            opacity: 0,
            y: -5,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1.75,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold tracking-[0.25em] text-secondary sm:mt-3 sm:text-[10px] sm:tracking-[0.3em] md:text-[11px] md:tracking-[0.35em] lg:text-xs lg:tracking-[0.4em]"
        >
          FLEXO SOLUTIONS
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;