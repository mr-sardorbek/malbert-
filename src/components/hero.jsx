import { Mbg } from "@/assets";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Settings2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const Hero = () => {
  const { t } = useTranslation();

  const title = t("hero.title").replace(/^CMYK\s*/, "");

  const featureContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.15,
      },
    },
  };

  const featureItem = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[500px] overflow-hidden sm:min-h-[500px] md:min-h-[520px] lg:min-h-[640px] min-[1441px]:min-h-[880px]"
    >
      {/* Background Image */}
    <img 
  src={Mbg} 
  alt="MALBERT printing production" 
  className="absolute inset-0 h-full w-full object-cover object-[85%_center] sm:object-[68%_center] md:object-[70%_center] min-[1441px]:scale-[1.04]" 
/>
      

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-4 sm:min-h-[500px] sm:px-6 md:min-h-[520px] md:px-8 lg:min-h-[640px] lg:px-6 min-[1441px]:min-h-[880px]">
        <div className="w-full max-w-[480px] sm:max-w-[520px] md:max-w-[580px] lg:max-w-xl">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-4 block text-[8px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:mb-5 sm:text-[9px] sm:tracking-[0.23em] md:text-[10px] lg:text-[11px] lg:tracking-[0.25em]"
          >
            {t("hero.eyebrow")}
          </motion.span>

          {/* Heading */}
          <h1 className="max-w-[360px] text-3xl font-bold leading-[1.08] tracking-tight text-white sm:max-w-[450px] sm:text-4xl md:max-w-[520px] md:text-[44px] lg:max-w-xl lg:text-5xl">
            {/* CMYK */}
            <motion.span
              initial={{
                opacity: 0,
                x: -25,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-2 inline-block origin-left text-secondary"
            >
              CMYK
            </motion.span>

            {/* Main Title Reveal */}
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: "0%",
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {title}
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: "easeOut",
            }}
            className="mt-4 max-w-[340px] text-xs leading-5 text-white/80 sm:mt-5 sm:max-w-[430px] sm:text-sm sm:leading-6 md:max-w-[500px] md:text-[15px] lg:text-base"
          >
            {t("hero.description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: "easeOut",
            }}
            className="mt-6 flex flex-col items-stretch gap-2 xs:flex-row sm:mt-7 sm:flex-row sm:items-center sm:gap-3"
          >
            {/* Products */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.78,
                ease: "easeOut",
              }}
            >
              <Button
                onClick={() =>
                  document.getElementById("products")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-xs font-semibold text-gray-900 transition-all duration-300 hover:bg-secondary/90 hover:shadow-md sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              >
                {t("hero.productsButton")}

                <ArrowRight
                  size={15}
                  className="arrow-move sm:h-[17px] sm:w-[17px]"
                />
              </Button>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.9,
                ease: "easeOut",
              }}
            >
              <Button
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                variant="outline"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-white/40 bg-white/5 px-5 
                py-2.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white 
                hover:shadow-md sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              >
                {t("hero.aboutButton")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={featureContainer}
            className="mt-7 grid grid-cols-1 gap-4 border-t border-white/20 pt-5 sm:mt-9 sm:grid-cols-3 sm:gap-5 sm:pt-6 md:gap-7 lg:gap-8"
          >
            {/* Quality */}
            <motion.div
              variants={featureItem}
              className="flex items-center gap-2.5"
            >
              <ShieldCheck
                size={18}
                strokeWidth={1.7}
                className="shrink-0 text-white sm:h-5 sm:w-5"
              />

              <p className="text-[10px] font-medium text-white sm:text-xs">
                {t("hero.features.quality")}
              </p>
            </motion.div>

            {/* Delivery */}
            <motion.div
              variants={featureItem}
              className="flex items-center gap-2.5"
            >
              <Truck
                size={18}
                strokeWidth={1.7}
                className="shrink-0 text-white sm:h-5 sm:w-5"
              />

              <p className="text-[10px] font-medium text-white sm:text-xs">
                {t("hero.features.delivery")}
              </p>
            </motion.div>

            {/* Technology */}
            <motion.div
              variants={featureItem}
              className="flex items-center gap-2.5"
            >
              <Settings2
                size={18}
                strokeWidth={1.7}
                className="shrink-0 text-white sm:h-5 sm:w-5"
              />

              <p className="text-[10px] font-medium text-white sm:text-xs">
                {t("hero.features.technology")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;