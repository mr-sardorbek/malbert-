import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView, useReducedMotion } from "motion/react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

import { AboutImg } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

const SLIDE_DURATION = 5000;
const REVEAL_EASE = [0.22, 1, 0.36, 1];

const RevealText = ({
  text,
  show,
  reduceMotion,
  delay = 0.25,
  stagger = 0.12,
}) => {
  const words = String(text).trim().split(/\s+/);

  return (
    <span className="block overflow-hidden">
      <span className="sr-only">{text}</span>

      <motion.span
        aria-hidden="true"
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        variants={{
          hidden: {
            transition: {
              staggerChildren: 0,
              delayChildren: 0,
            },
          },
          visible: {
            transition: {
              staggerChildren: reduceMotion ? 0 : stagger,
              delayChildren: reduceMotion ? 0 : delay,
            },
          },
        }}
        className="block"
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: reduceMotion ? 0 : 35,
                  filter: reduceMotion ? "blur(0px)" : "blur(25px)",
                  transition: {
                    duration: 0,
                  },
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: reduceMotion ? 0 : 0.65,
                    ease: REVEAL_EASE,
                  },
                },
              }}
              className="inline-block max-w-full align-top"
            >
              {word}
            </motion.span>

            {index < words.length - 1 ? " " : null}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const About = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const manualRef = useRef(false);

  const [api, setApi] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    amount: 0.2,
  });

  const hasEnteredView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const slides = [
    {
      id: "company",
      image: AboutImg,
      alt: "MALBERT poligrafiya mahsulotlari",
      subtitle: t("about.subtitle"),
      heading: t("about.heading"),
      description: t("about.description"),
      accent: t("about.accent"),
    },
    {
      id: "inks",
      // Ikkinchi rasmingni shu yerga qo'y.
      image: AboutImg,
      alt: "MALBERT CMYK bo‘yoqlari",
      subtitle: t("about.inks.subtitle", {
        defaultValue: "MALBERT — CMYK BO‘YOQLAR",
      }),
      heading: t("about.inks.heading", {
        defaultValue: "Har bir rangda yorqin natija",
      }),
      description: t("about.inks.description", {
        defaultValue:
          "Poligrafiya loyihalaringiz uchun CMYK bo‘yoqlarini taklif qilamiz. Bosma ehtiyojingizga mos mahsulotni tanlashda yordam beramiz.",
      }),
      accent: t("about.inks.accent", {
        defaultValue: "G‘oyangizni ranglar bilan ifodalang.",
      }),
    },
    {
      id: "rolls",
      // Uchinchi rasmingni shu yerga qo'y.
      image: AboutImg,
      alt: "MALBERT rulon mahsulotlari",
      subtitle: t("about.rolls.subtitle", {
        defaultValue: "MALBERT — RULON MAHSULOTLARI",
      }),
      heading: t("about.rolls.heading", {
        defaultValue: "Ishlab chiqarishingizga mos materiallar",
      }),
      description: t("about.rolls.description", {
        defaultValue:
          "Poligrafiya va qadoqlash ishlari uchun rulon mahsulotlarini taklif qilamiz. Vazifangizga mos material va o‘lchamlarni birgalikda tanlaymiz.",
      }),
      accent: t("about.rolls.accent", {
        defaultValue: "Mos material — sifatli natijaning asosi.",
      }),
    },
  ];

  const slideCount = slides.length;

  // Progress har doim faol slaydga bog'langan.
  const progress = ((activeIndex + 1) / slideCount) * 100;

  const stopAutoplay = useCallback(() => {
    manualRef.current = true;
    clearTimeout(timerRef.current);
    setIsManual(true);
  }, []);

  // Arrow, swipe yoki autoplay:
  // barchasi bitta activeIndex orqali sinxronlashadi.
  useEffect(() => {
    if (!api) return;

    const syncSlide = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    syncSlide();

    api.on("select", syncSlide);
    api.on("reInit", syncSlide);
    api.on("pointerDown", stopAutoplay);

    return () => {
      api.off("select", syncSlide);
      api.off("reInit", syncSlide);
      api.off("pointerDown", stopAutoplay);
    };
  }, [api, stopAutoplay]);

  // Har 5 sekundda keyingi slayd.
  // Oxirgi slaydda yoki user boshqarganda to'xtaydi.
  useEffect(() => {
    if (
      !api ||
      !isInView ||
      isManual ||
      activeIndex === slideCount - 1
    ) {
      return;
    }

    timerRef.current = setTimeout(() => {
      if (!manualRef.current) {
        api.scrollNext();
      }
    }, SLIDE_DURATION);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [api, activeIndex, isInView, isManual, slideCount]);

  const goToSlide = (index) => {
    if (!api) return;

    stopAutoplay();
    api.scrollTo(index);
  };

  const arrowButtonClass = `
    group flex size-11 items-center justify-center
    rounded-full border border-primary/20
    bg-white text-primary
    transition-colors duration-300
    hover:border-primary hover:bg-primary hover:text-white
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-primary focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-30
  `;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mt-12 overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1260px] rounded-3xl bg-white p-4 sm:rounded-[32px] sm:p-6 lg:p-8 min-[1800px]:max-w-[1360px]">
        {/* Section title */}
        <motion.h2
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: REVEAL_EASE,
          }}
          className="mb-7 text-center text-2xl font-bold tracking-tight text-foreground sm:mb-10 sm:text-3xl lg:text-4xl min-[1800px]:text-5xl"
        >
          {t("about.title")}
        </motion.h2>

        <div className="grid min-w-0 items-center gap-7 sm:gap-9 lg:grid-cols-2 lg:gap-12">
          {/* Rasm va progress */}
          <div
            className="min-w-0"
            onKeyDownCapture={(event) => {
              if (
                event.key === "ArrowLeft" ||
                event.key === "ArrowRight"
              ) {
                stopAutoplay();
              }
            }}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
                duration: reduceMotion ? 0 : 30,
              }}
              className="w-full min-w-0"
              aria-label={t("about.carouselLabel", {
                defaultValue: "MALBERT haqida",
              })}
            >
              <CarouselContent className="ml-0">
                {slides.map((slide, index) => (
                  <CarouselItem
                    key={slide.id}
                    className="min-w-0 pl-0"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:aspect-[3/2] lg:aspect-[4/3]">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        draggable={false}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="h-full w-full select-none object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-4 flex items-center gap-4 sm:mt-5">
                {/* Base UI Progress: raqamsiz */}
                <Progress
                  value={progress}
                  min={0}
                  max={100}
                  aria-label={t("about.progressLabel", {
                    defaultValue: "Slaydlar progressi",
                  })}
                  className="
                    min-w-0 flex-1 gap-0
                    [&_[data-slot=progress-track]]:h-1.5
                    [&_[data-slot=progress-track]]:w-full
                    [&_[data-slot=progress-track]]:overflow-hidden
                    [&_[data-slot=progress-track]]:rounded-full
                    [&_[data-slot=progress-track]]:bg-primary/10
                    [&_[data-slot=progress-indicator]]:h-full
                    [&_[data-slot=progress-indicator]]:rounded-full
                    [&_[data-slot=progress-indicator]]:bg-primary
                    [&_[data-slot=progress-indicator]]:transition-[width]
                    [&_[data-slot=progress-indicator]]:duration-500
                    [&_[data-slot=progress-indicator]]:ease-out
                    motion-reduce:[&_[data-slot=progress-indicator]]:duration-0
                  "
                />

                {/* Mobil ekranda arrowlar yashirin */}
                <div className="hidden shrink-0 gap-2 md:flex">
                  <button
                    type="button"
                    disabled={!api || activeIndex === 0}
                    onClick={() => goToSlide(activeIndex - 1)}
                    aria-label={t("about.previous", {
                      defaultValue: "Oldingi slayd",
                    })}
                    className={arrowButtonClass}
                  >
                    <HiArrowLongLeft
                      aria-hidden="true"
                      className="size-6 transition-transform duration-300 group-hover:-translate-x-0.5 motion-reduce:transform-none"
                    />
                  </button>

                  <button
                    type="button"
                    disabled={
                      !api || activeIndex === slideCount - 1
                    }
                    onClick={() => goToSlide(activeIndex + 1)}
                    aria-label={t("about.next", {
                      defaultValue: "Keyingi slayd",
                    })}
                    className={arrowButtonClass}
                  >
                    <HiArrowLongRight
                      aria-hidden="true"
                      className="size-6 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    />
                  </button>
                </div>
              </div>
            </Carousel>
          </div>

          {/* Matnlar: balandlik almashganda sakramaydi */}
          <div className="grid min-w-0">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const show = isActive && hasEnteredView;

              return (
                <div
                  key={slide.id}
                  aria-hidden={!isActive}
                  style={{
                    gridArea: "1 / 1",
                    visibility: isActive ? "visible" : "hidden",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  className="min-w-0 self-center break-words"
                >
                  <div className="text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-primary sm:text-xs min-[1800px]:text-sm">
                    <RevealText
                      text={slide.subtitle}
                      show={show}
                      reduceMotion={reduceMotion}
                      delay={0.1}
                      stagger={0.08}
                    />
                  </div>

                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl min-[1800px]:text-4xl">
                    <RevealText
                      text={slide.heading}
                      show={show}
                      reduceMotion={reduceMotion}
                      delay={0.25}
                      stagger={0.12}
                    />
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base min-[1800px]:text-lg min-[1800px]:leading-8">
                    <RevealText
                      text={slide.description}
                      show={show}
                      reduceMotion={reduceMotion}
                      delay={0.45}
                      stagger={0.035}
                    />
                  </p>

                  <p className="mt-5 border-l-2 border-secondary pl-4 text-sm font-medium leading-6 text-foreground sm:mt-6 sm:text-base min-[1800px]:text-lg">
                    <RevealText
                      text={slide.accent}
                      show={show}
                      reduceMotion={reduceMotion}
                      delay={0.65}
                      stagger={0.06}
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;