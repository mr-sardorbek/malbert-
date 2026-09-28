import { motion } from "motion/react";
import { useEffect } from "react";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const letters = "MALBERT".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-primary"
    >
      <div className="relative flex flex-col items-center">
        {/* Main MALBERT Animation */}
        <div className="flex overflow-hidden px-4">
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl font-bold tracking-[0.08em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Underline */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "75%",
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 h-[3px] rounded-full bg-white sm:mt-7 sm:h-1"
        />

        {/* Subtle secondary line */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 1.15,
            ease: "easeOut",
          }}
          className="mt-4 text-[9px] font-medium uppercase tracking-[0.45em] text-white/60 sm:text-[10px] sm:tracking-[0.55em]"
        >
          FLEXO SOLUTIONS
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;