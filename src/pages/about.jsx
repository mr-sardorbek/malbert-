import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView, useReducedMotion } from "motion/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { AboutImg1, AboutImg2, AboutImg3 } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

const SLIDE_DURATION = 3000;
const EASE = [0.22, 1, 0.36, 1];

const slides = [
  { id: "company", image: AboutImg1 },
  { id: "materials", image: AboutImg2 },
  { id: "mission", image: AboutImg3 },
];

const paragraphVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.045,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 5,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: EASE,
    },
  },
};

const arrowClass = `
  pointer-events-auto h-9 w-12 shrink-0 cursor-pointer rounded-lg
  border border-white/70 bg-white/70 p-0 text-slate-700
  shadow-sm backdrop-blur-md
  transition-colors duration-200
  hover:bg-white/90 hover:text-slate-900
  focus-visible:ring-2 focus-visible:ring-slate-600
  disabled:pointer-events-none disabled:opacity-50
  [&_svg]:size-5
`;

function AboutParagraph({ text, active, reduceMotion }) {
  return (
    <p
      className={`
        text-base font-semibold leading-snug tracking-tight lg:text-lg
        transition-colors duration-500 motion-reduce:transition-none
        ${active ? "text-black" : "text-black/40"}
      `}
    >
      {active && !reduceMotion ? (
        <motion.span
          key={text}
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          {text.trim().split(/\s+/).map((word, index) => (
            <span key={`${index}-${word}`}>
              {index > 0 && " "}
              <motion.span className="inline-block" variants={wordVariants}>
                {word}
              </motion.span>
            </span>
          ))}
        </motion.span>
      ) : (
        text
      )}
    </p>
  );
}

export default function About() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const isInView = useInView(sectionRef, { amount: 0.2 });
  const hasEntered = useInView(sectionRef, {
    amount: 0.2,
    once: true,
  });

  const lastIndex = slides.length - 1;
  const progress = ((activeIndex + 1) / slides.length) * 100;

  const stopAutoplay = useCallback(() => {
    setIsManual(true);
  }, []);

  useEffect(() => {
    if (!api) return;

    let dragStartIndex = null;

    const syncSlide = () => {
      const index = api.selectedScrollSnap();
      setActiveIndex(index);

      if (dragStartIndex !== null && index !== dragStartIndex) {
        stopAutoplay();
      }
    };

    const handlePointerDown = () => {
      dragStartIndex = api.selectedScrollSnap();
      setIsDragging(true);
    };

    const handlePointerUp = () => {
      syncSlide();
      dragStartIndex = null;
      setIsDragging(false);
    };

    syncSlide();

    api.on("select", syncSlide);
    api.on("reInit", syncSlide);
    api.on("pointerDown", handlePointerDown);
    api.on("pointerUp", handlePointerUp);

    return () => {
      api.off("select", syncSlide);
      api.off("reInit", syncSlide);
      api.off("pointerDown", handlePointerDown);
      api.off("pointerUp", handlePointerUp);
    };
  }, [api, stopAutoplay]);

  useEffect(() => {
    if (
      !api ||
      !isInView ||
      isManual ||
      isDragging ||
      activeIndex === lastIndex
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      api.scrollNext();
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [api, isInView, isManual, isDragging, activeIndex, lastIndex]);

  const goToSlide = (index) => {
    if (!api) return;

    stopAutoplay();
    api.scrollTo(index);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        mt-12 scroll-mt-24 bg-background px-4 py-12
        sm:px-6 sm:py-16 lg:py-20
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1260px] rounded-3xl bg-white p-4
          sm:rounded-[32px] sm:p-6 lg:p-8
          min-[1800px]:max-w-[1360px]
        "
      >
        <h2
          className="
            mb-6 text-center text-3xl font-bold tracking-tight text-black
            sm:mb-8 sm:text-4xl lg:text-5xl
          "
        >
          {t("nav.about")}
        </h2>

        <div className="grid min-w-0 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Chap taraf: rasmlar va karusel boshqaruvi */}
          <div
            className="min-w-0"
            onKeyDownCapture={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
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
              aria-label={t("about.carouselLabel")}
              className="w-full min-w-0"
            >
              <div className="relative isolate overflow-hidden rounded-2xl">
                <CarouselContent className="ml-0">
                  {slides.map((slide, index) => (
                    <CarouselItem key={slide.id} className="min-w-0 pl-0">
                      <div className="aspect-[5/3] max-h-[360px] w-full bg-muted">
                        <img
                          src={slide.image}
                          alt={t(`about.images.${slide.id}`)}
                          draggable={false}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="block h-full w-full select-none object-cover object-center"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Rasmning ichida: tugmalar tepada, progress pastki chetda */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2">
                  <div className="mr-3 hidden items-center gap-2 self-end md:flex">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className={arrowClass}
                      disabled={!api || activeIndex === 0}
                      onClick={() => goToSlide(activeIndex - 1)}
                      aria-label={t("about.previous")}
                    >
                      <HiChevronLeft aria-hidden="true" />
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className={arrowClass}
                      disabled={!api || activeIndex === lastIndex}
                      onClick={() => goToSlide(activeIndex + 1)}
                      aria-label={t("about.next")}
                    >
                      <HiChevronRight aria-hidden="true" />
                    </Button>
                  </div>

                  <Progress
                    value={progress}
                    min={0}
                    max={100}
                    aria-label={t("about.progressLabel")}
                    className="
                      w-full min-w-0 gap-0
                      [&_[data-slot=progress-track]]:h-1.5
                      [&_[data-slot=progress-track]]:w-full
                      [&_[data-slot=progress-track]]:rounded-none
                      [&_[data-slot=progress-track]]:bg-white/75
                      [&_[data-slot=progress-indicator]]:rounded-none
                      [&_[data-slot=progress-indicator]]:bg-secondary
                      [&_[data-slot=progress-indicator]]:transition-[width]
                      [&_[data-slot=progress-indicator]]:duration-500
                      motion-reduce:[&_[data-slot=progress-indicator]]:duration-0
                    "
                  />
                </div>
              </div>
            </Carousel>
          </div>

          {/* O‘ng taraf: faol slaydga mos matn */}
          <ol
            className="
              m-0 grid min-w-0 list-none gap-6 p-2
              lg:aspect-[5/3] lg:content-around lg:gap-0
            "
          >
            {slides.map((slide, index) => {
              const active = hasEntered && index === activeIndex;
              const hidden = !hasEntered || index > activeIndex;

              return (
                <li
                  key={slide.id}
                  aria-hidden={hidden || undefined}
                  aria-current={active ? "step" : undefined}
                  className={`
                    border-l-[3px] pl-3 transition-colors duration-500
                    motion-reduce:transition-none
                    ${hidden ? "invisible" : "visible"}
                    ${active ? "border-amber-400" : "border-amber-400/40"}
                  `}
                >
                  <AboutParagraph
                    text={t(`about.paragraphs.${slide.id}`)}
                    active={active}
                    reduceMotion={reduceMotion}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}