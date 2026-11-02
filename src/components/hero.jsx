import { HeroMobile,  HeroTablet,  Mbg } from "@/assets";

import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { motion, useReducedMotion } from "motion/react";

const Hero = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const title = t("hero.title2").replace(/^CMYK\s*/, "");

  return (
    <section
      id="home"
      className="pt-[80px] min-[1441px]:pt-[88px] scroll-mt-24"
    >
      <div className="relative m-2 mb-4 overflow-hidden rounded-3xl sm:rounded-4xl">
        {/* Mobile, tablet va desktop uchun alohida rasmlar */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={HeroMobile}
          />

          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={HeroTablet}
          />

          <img
            src={Mbg}
            alt="MALBERT printing production"
            className="
              absolute inset-0 h-full w-full
              object-cover object-center
            "
          />
        </picture>

        {/* Content */}
        <div
          className="
            relative z-10 mx-auto
            min-h-[500px] w-full max-w-[1260px]
            px-5 py-12
            sm:min-h-[560px] sm:px-6 sm:py-12
            md:min-h-[calc(100dvh-104px)] md:px-8 md:py-14
            lg:px-6 lg:py-14
            min-[1800px]:max-w-[1360px]
            min-[1800px]:py-16
          "
        >
          <div
            className="
              flex w-full min-w-0 flex-col items-start
              max-w-[600px]
              sm:max-w-[680px]
              md:max-w-[760px]
              lg:max-w-[850px]
              min-[1441px]:max-w-[950px]
              min-[1800px]:max-w-[1100px]
            "
          >
            {/* Main title */}
            <h1
              className="
                w-full
                max-md:translate-y-7
                max-lg:translate-y-19
                max-[1600px]:translate-y-6
               min-[1800px]:translate-y-[70px]
                text-2xl font-bold leading-[1.08] tracking-tight text-white
                sm:text-3xl
                md:text-[42px]
                lg:text-5xl
                min-[1441px]:text-9xl
                min-[1800px]:text-[240px]
              "
            >
              <span className="block max-w-full overflow-hidden">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.25,
                      },
                    },
                  }}
                  className=""
                >
                  {title.split(" ").map((word, index) => (
                    <motion.span
                      key={`${word}-${index}`}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 35,
                          filter: "blur(25px)",
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                      className="mr-[0.25em] inline-block text-[#4b90f2]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            </h1>

            {/* Pastroqda joylashgan ixcham panel */}
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
                duration: 0.7,
                delay: 0.55,
                ease: "easeOut",
              }}
              className="
                mt-60 w-full min-w-0 max-w-[360px]
                rounded-2xl border border-blue/30
                bg-white/30 p-4 backdrop-blur-sm
                sm:mt-128 sm:max-w-[420px] sm:p-5
                lg:mt-26 lg:max-w-[480px]
                lg:rounded-[20px] lg:p-6
                min-[1800px]:mt-[120px] min-[1800px]:max-w-[560px]
              "
            >
              {/* Description */}
              <p
                className="
                  break-words text-[13px]  leading-[1.65] text-black
                  sm:text-sm
                  lg:text-base
                  min-[1800px]:text-lg
                "
              >
                {t("hero.description")}
              </p>

              {/* Responsive tugmalar */}
              <div
                className="
                  mt-4 flex flex-wrap items-center gap-2
                  sm:mt-5 sm:gap-9
                  lg:gap-15
                "
              >
                <Button
                  type="button"
                  onClick={() =>
                    document.getElementById("products")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="
                    inline-flex h-auto min-h-11
                    min-w-0 flex-[1_1_125px] cursor-pointer
                    items-center justify-center gap-2
                    whitespace-normal rounded-[10px] border-0
                    bg-secondary px-3 py-2.5
                    text-center text-xs font-semibold leading-5
                    text-gray-900 shadow-none
                    transition-colors duration-300
                    hover:bg-secondary/90
                    focus-visible:ring-2 focus-visible:ring-primary
                    focus-visible:ring-offset-2
                    sm:flex-[0_1_auto] sm:px-4 sm:text-sm
                    lg:px-5
                    min-[1800px]:text-base
                  "
                >
                  {t("hero.productsButton")}

                  {/* Doimiy, yumshoq arrow animatsiyasi */}
                  <motion.span
                    aria-hidden="true"
                    className="inline-flex shrink-0"
                    animate={{
                      x: reduceMotion ? 0 : [0, 4, 0],
                    }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : {
                            duration: 1.4,
                            repeat: Infinity,
                            repeatDelay: 0.35,
                            ease: "easeInOut",
                          }
                    }
                  >
                    <ArrowRight className="size-4" />
                  </motion.span>
                </Button>

                {/* Biz haqimizda — iconsiz */}
          <Button
  type="button"
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    })
  }
  className="
    group/contact relative inline-flex
    h-11 w-fit max-w-full shrink-0
    cursor-pointer items-center justify-center
    overflow-hidden rounded-full border-primary
    bg-transparent py-1 pl-5 pr-14
    text-xs font-semibold text-primary
    shadow-none
    transition-all duration-500
    hover:bg-primary hover:text-white
    hover:pl-14 hover:pr-5
    focus-visible:bg-primary focus-visible:text-white
    focus-visible:pl-14 focus-visible:pr-5
    focus-visible:ring-2 focus-visible:ring-primary
    focus-visible:ring-offset-2
    sm:h-12 sm:text-sm
    min-[1800px]:text-base
    motion-reduce:transition-none
  "
>
  <span className="relative z-10 whitespace-nowrap">
    {t("nav.request")}
  </span>

  <span
    aria-hidden="true"
    className="
      absolute right-2.5  top-1/2
      flex size-9 -translate-y-1/2
      items-center justify-center rounded-full
      bg-transparent text-primary
      transition-all duration-500
      group-hover/contact:right-[calc(100%-40px)]
      group-hover/contact:rotate-45
      group-hover/contact:text-white
      group-focus-visible/contact:right-[calc(100%-40px)]
      group-focus-visible/contact:rotate-45
      group-focus-visible/contact:text-white
      sm:size-10
      sm:group-hover/contact:right-[calc(100%-44px)]
      sm:group-focus-visible/contact:right-[calc(100%-44px)]
      motion-reduce:transition-none
    "
  >
    <motion.span
      className="inline-flex"
      animate={{
        x: reduceMotion ? 0 : [0, 4, 0],
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: "easeInOut",
            }
      }
    >
      <ArrowRight className="size-4" />
    </motion.span>
  </span>
</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;