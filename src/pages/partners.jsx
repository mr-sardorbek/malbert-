import {
  Brother,
  Canon,
  Epson,
  HP,
  Microsoft,
  TSC,
  Zebra,
} from "@/assets";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const partners = [
  {
    id: 1,
    name: "Microsoft",
    logo: Microsoft,
  },
  {
    id: 2,
    name: "Canon",
    logo: Canon,
  },
  {
    id: 3,
    name: "HP",
    logo: HP,
  },
  {
    id: 4,
    name: "Epson",
    logo: Epson,
  },
  {
    id: 5,
    name: "Zebra",
    logo: Zebra,
  },
  {
    id: 6,
    name: "TSC",
    logo: TSC,
  },
  {
    id: 7,
    name: "Brother",
    logo: Brother,
  },
];

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section
      id="partners"
      className=" overflow-hidden bg-background px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
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
          className="text-center"
        >
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("partners.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {t("partners.description")}
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-5 [perspective:1200px] sm:gap-6">
          {partners.map((partner, index) => {
            const rotations = [
              "-rotate-6",
              "rotate-3",
              "-rotate-2",
              "rotate-1",
              "-rotate-3",
              "rotate-2",
              "-rotate-5",
            ];

            const offsets = [
              "translate-y-2",
              "-translate-y-1",
              "translate-y-1",
              "-translate-y-2",
              "translate-y-1",
              "-translate-y-1",
              "translate-y-2",
            ];

            return (
              <div
                key={partner.id}
                className="partner-float"
                style={{
                  animationDelay: `${index * 0.4}s`,
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className={`group flex h-28 w-36 cursor-pointer items-center justify-center rounded-2xl border border-border 
                    bg-white/80 p-6 shadow-[0_14px_30px_rgba(21,87,166,0.08)] backdrop-blur-md transition-all duration-500 
                    hover:-translate-y-3 hover:scale-105 hover:shadow-[0_22px_40px_rgba(21,87,166,0.14)] ${rotations[index]} 
                    ${offsets[index]}`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-14 max-w-[110px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;