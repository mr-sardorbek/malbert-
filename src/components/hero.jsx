import { HeroMobile, HeroTablet, Mbg } from "@/assets";
import { ArrowRight, BadgeCheck, Truck, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { motion, useReducedMotion } from "motion/react";
import { Fragment } from "react";

const features = [
  { key: "quality", Icon: BadgeCheck },
  { key: "delivery", Icon: Truck },
  { key: "technology", Icon: Cpu },
];

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
        {/* Mobile, tablet va desktop rasmlari */}
        <picture>
          <source media="(max-width: 767px)" srcSet={HeroMobile} />
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={HeroTablet}
          />

          <img
            src={Mbg}
            alt="MALBERT printing production"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>

        {/* Content */}
        <div
          className="
            relative z-10 mx-auto
            min-h-[500px] w-full max-w-[1260px]
            px-5 py-10
            sm:min-h-[560px] sm:px-6 sm:py-12
            md:min-h-[calc(100dvh-104px)] md:px-8 md:py-14
            lg:px-6 lg:py-14
            min-[1800px]:py-[-20px]
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
                max-[1600px]:translate-y-[-5px]
                min-[112.5rem]:pt-[10px]
                text-xl font-bold leading-[1.08] tracking-tight text-white
                sm:text-3xl
                md:text-[42px]
                lg:text-5xl
                min-[90.0625rem]:text-[57px]
                min-[112.5rem]:text-[70px]
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
                  className="inline-block"
                >
                  {title.split("\n").map((line, lineIndex) => (
                    <Fragment key={lineIndex}>
                      {lineIndex > 0 && <br className="hidden lg:inline" />}

                      {line.trim().split(/\s+/).map((word, index) => (
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
                    </Fragment>
                  ))}
                </motion.span>
              </span>
            </h1>

            {/* Hero tugmasi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: "easeOut",
              }}
              className="
                mt-60 flex w-full min-w-0 max-w-[360px] flex-nowrap items-center gap-2
                sm:mt-128 sm:max-w-[420px] sm:gap-4
                lg:mt-13 lg:max-w-[480px] lg:gap-6
                min-[1800px]:mt-[220px] min-[1800px]:max-w-[560px]
              "
            >
              <Button
                type="button"
                onClick={() =>
                  document.getElementById("products")?.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start",
                  })
                }
                className="
                  group/contact relative inline-flex h-10 w-fit shrink-0
                  -translate-y-49 lg:-translate-y-4
                  cursor-pointer items-center justify-center overflow-hidden
                  rounded-full border border-white/90 bg-white/5 pl-2.5 pr-8
                  text-xs font-semibold text-white shadow-none backdrop-blur-[4px]
                  transition-all duration-500
                  hover:border-primary hover:bg-primary hover:pl-11 hover:pr-3 hover:text-white
                  focus-visible:border-primary focus-visible:bg-primary
                  focus-visible:pl-11 focus-visible:pr-3 focus-visible:text-white
                  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                  sm:h-12 sm:pl-5 sm:pr-14 sm:text-sm
                  sm:hover:pl-14 sm:hover:pr-5
                  sm:focus-visible:pl-14 sm:focus-visible:pr-5
                  min-[1800px]:text-base motion-reduce:transition-none
                "
              >
                <span className="relative z-10 whitespace-nowrap">
                  {t("hero.productsButton")}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    absolute right-1 top-1/2 flex size-9 -translate-y-1/2
                    items-center justify-center rounded-full text-white
                    transition-all duration-500
                    group-hover/contact:right-[calc(100%-40px)]
                    group-hover/contact:rotate-45 group-hover/contact:text-white
                    group-focus-visible/contact:right-[calc(100%-40px)]
                    group-focus-visible/contact:rotate-45 group-focus-visible/contact:text-white
                    sm:right-2.5 sm:size-10
                    sm:group-hover/contact:right-[calc(100%-44px)]
                    sm:group-focus-visible/contact:right-[calc(100%-44px)]
                    motion-reduce:transition-none
                  "
                >
                  <motion.span
                    className="inline-flex"
                    animate={{ x: reduceMotion ? 0 : [0, 4, 0] }}
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
            </motion.div>
          </div>
        </div>

        {/* Rasm ichidagi uchta alohida kartochka */}
        <ul
          className="
            absolute inset-x-4 bottom-4 z-10 mx-auto
            flex w-fit max-w-[calc(100%-2rem)] flex-wrap
            items-center justify-center gap-2
            sm:bottom-6 sm:gap-3
          "
        >
          {features.map(({ key, Icon }) => (
            <li
              key={key}
              className="
                inline-flex max-w-full items-center justify-center gap-1.5
                rounded-xl border border-white/50 bg-white/15
                px-2.5 py-2 backdrop-blur-[4px]
                text-center text-[11px] font-semibold leading-tight text-slate-800
                sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-sm
                lg:px-5 lg:py-3
              "
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.75}
                className="size-4 shrink-0 text-primary sm:size-5"
              />
              <span>{t(`hero.features.${key}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;