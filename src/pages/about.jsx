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
                      className="size-6 transition-transform cursor-pointer duration-300 group-hover:-translate-x-0.5 motion-reduce:transform-none"
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
                      className="size-6 transition-transform cursor-pointer duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    />
                  </button>
                </div>
              </div>
            </Carousel>
          </div>

          {/* Har bir slayd uchun doim ko‘rinadigan bitta qator */}
          <ol className="grid min-w-0 gap-4">
            {slides.map((slide, index) => {
              const active = index === activeIndex;

              return (
                <motion.li
                  key={slide.id}
                  aria-current={active ? "step" : undefined}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={hasEnteredView ? { opacity: 1, y: 0 } : undefined}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease: REVEAL_EASE,
                  }}
                >
                  <div
                    className={`border-l-2 pl-4 transition-colors duration-500 motion-reduce:transition-none
                      ${active ? "border-primary text-foreground" : "border-border text-muted-foreground"}`}
                  >
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 ${active ? "text-primary" : ""}`}>
                      {slide.subtitle}
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-tight sm:text-xl">
                      {slide.heading}
                    </h3>
                    <p className="mt-1.5 text-sm leading-5">{slide.description}</p>
                    <p className="mt-1 text-sm font-medium">{slide.accent}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;