import { AboutImg } from "@/assets";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="bg-background mt-18  px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto  w-full max-w-[1360px] rounded-4xl bg-white p-6 min-[1800px]:max-w-[1760px] min-[1800px]:p-8">
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
          className="mb-10 text-center min-[1800px]:mb-12"
        >
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl min-[1800px]:text-5xl">
            {t("about.title")}
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 min-[1800px]:gap-16">
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
            className="max-w-xl min-[1800px]:max-w-2xl"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs min-[1800px]:text-sm">
              {t("about.subtitle")}
            </span>

            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl min-[1800px]:text-5xl">
              {t("about.heading")}
            </h3>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base min-[1800px]:mt-6 min-[1800px]:text-xl min-[1800px]:leading-9">
              {t("about.description")}
            </p>

            <p className="mt-5 border-l-2 border-secondary pl-4 text-sm font-medium leading-6 text-foreground min-[1800px]:mt-6 min-[1800px]:pl-5 min-[1800px]:text-lg min-[1800px]:leading-8">
              {t("about.accent")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;