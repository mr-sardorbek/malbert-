import { AboutImg } from "@/assets";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={AboutImg}
              alt="MALBERT CMYK va rulon mahsulotlari"
              className="h-full min-h-[300px] w-full object-cover sm:min-h-[380px]"
            />
          </div>

          <div className="max-w-xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
              {t("about.subtitle")}
            </span>

            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              {t("about.heading")}
            </h3>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              {t("about.description")}
            </p>

            <p className="mt-5 border-l-2 border-secondary pl-4 text-sm font-medium leading-6 text-foreground">
              {t("about.accent")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;