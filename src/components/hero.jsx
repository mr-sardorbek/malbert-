import { HeroBg } from "@/assets";
import { ArrowRight, ShieldCheck, Truck, Settings2 } from "lucide-react";

import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[500px] overflow-hidden sm:min-h-[500px] md:min-h-[520px] lg:min-h-[540px]">
      {/* Background Image */}
      <img
        src={HeroBg}
        alt="MALBERT printing production"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center]
           sm:object-[68%_center] md:object-[70%_center] lg:object-center"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r  from-[#00345f]/90 via-[#00345f]/55 to-transparent
           sm:from-[#00345f]/90 sm:via-[#00345f]/50 sm:to-transparent"
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-4 sm:min-h-[500px]
          sm:px-6 md:min-h-[520px] md:px-8 lg:min-h-[540px] lg:px-6"
      >
        <div className="w-full max-w-[480px] sm:max-w-[520px] md:max-w-[580px] lg:max-w-xl">
          {/* Eyebrow */}
          <span
            className=" mb-4 block text-[8px] font-semibold uppercase tracking-[0.2em] text-white/80
 sm:mb-5 sm:text-[9px] sm:tracking-[0.23em] md:text-[10px]
 lg:text-[11px] lg:tracking-[0.25em]"
          >
            {t("hero.eyebrow")}
          </span>

          {/* Heading */}
          <h1
            className=" max-w-[360px] text-3xl font-bold leading-[1.08] tracking-tight text-white
 sm:max-w-[450px] sm:text-4xl md:max-w-[520px] md:text-[44px] lg:max-w-xl lg:text-5xl">

            <span className="text-secondary">CMYK</span>{" "}
            {t("hero.title").replace("CMYK ", "")}
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[340px]
              text-xs
              leading-5
              text-white/80

              sm:mt-5
              sm:max-w-[430px]
              sm:text-sm
              sm:leading-6

              md:max-w-[500px]
              md:text-[15px]

              lg:text-base
            "
          >
            {t("hero.description")}
          </p>

          {/* Buttons */}
          <div
            className="
              mt-6
              flex
              flex-col
              items-stretch
              gap-2

              xs:flex-row

              sm:mt-7
              sm:flex-row
              sm:items-center
              sm:gap-3
            "
          >
            {/* Products */}
            <Button
  className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-xs font-semibold text-gray-900 transition-all duration-200 hover:bg-secondary/90 sm:px-6 sm:py-3 sm:text-sm"
>
  {t("hero.productsButton")}
  <ArrowRight size={15} className="arrow-move sm:h-[17px] sm:w-[17px]" />
</Button>

            {/* About */}
            <Button
  variant="outline"
  className="inline-flex items-center justify-center gap-2 rounded-md border-white/40 bg-white/5 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white sm:px-6 sm:py-3 sm:text-sm"
>
  {t("hero.aboutButton")}
</Button>
          </div>

          {/* Features */}
          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-4
              border-t
              border-white/20
              pt-5

              sm:mt-9
              sm:grid-cols-3
              sm:gap-5
              sm:pt-6

              md:gap-7

              lg:gap-8
            "
          >
            {/* Quality */}
            <div className="flex items-center gap-2.5">
              <ShieldCheck
                size={18}
                strokeWidth={1.7}
                className="shrink-0 text-white sm:h-5 sm:w-5"
              />

              <p
                className="
                  text-[10px]
                  font-medium
                  text-white

                  sm:text-xs
                "
              >
                {t("hero.features.quality")}
              </p>
            </div>

            {/* Delivery */}
            <div className="flex items-center gap-2.5">
              <Truck
                size={18}
                strokeWidth={1.7}
                className="shrink-0 text-white sm:h-5 sm:w-5"
              />

              <p
                className="
                  text-[10px]
                  font-medium
                  text-white

                  sm:text-xs
                "
              >
                {t("hero.features.delivery")}
              </p>
            </div>

            {/* Technology */}
            <div className="flex items-center gap-2.5">
              <Settings2
                size={18}
                strokeWidth={1.7}
                className="shrink-0 text-white sm:h-5 sm:w-5"
              />

              <p
                className="
                  text-[10px]
                  font-medium
                  text-white

                  sm:text-xs
                "
              >
                {t("hero.features.technology")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
