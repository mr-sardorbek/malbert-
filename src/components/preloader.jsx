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
            x: 120,
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
      {/* L B E R T */}
<motion.div
  className="flex items-center gap-3"
  initial={{
    opacity: 0,
    x: -35,
    scaleX: 0.75,
    transformOrigin: "left center",
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
      </div>
    </motion.div>
  );
};

export default Preloader;