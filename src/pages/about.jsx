import { AboutImg } from "@/assets";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="bg-background px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1536px]">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-10 text-center"
        >
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t("about.title")}
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={AboutImg}
              alt="MALBERT CMYK va rulon mahsulotlari"
              className="h-full min-h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:min-h-[380px]"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="max-w-xl"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;