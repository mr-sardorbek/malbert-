import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-surface px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1536px]">
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
            {t("contact.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Contact Form */}
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
            className="rounded-2xl border border-border bg-background p-6 sm:p-8"
          >
            <form className="space-y-4">
              <Input
                type="text"
                placeholder={t("contact.name")}
                className="h-12 cursor-text rounded-xl bg-surface"
              />

              <Input
                type="tel"
                placeholder={t("contact.phone")}
                className="h-12 cursor-text rounded-xl bg-surface"
              />

              <textarea
                placeholder={t("contact.message")}
                className="min-h-32 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
              />

              <Button
                type="submit"
                className="h-12 w-full cursor-pointer rounded-xl bg-secondary text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-secondary/90 hover:shadow-md"
              >
                {t("contact.submit")}

                <ArrowRight
                  size={16}
                  className="ml-1 arrow-move transition-transform duration-300"
                />
              </Button>
            </form>
          </motion.div>

          {/* Map */}
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
            className="relative h-[360px] overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:shadow-md sm:h-[420px] lg:h-full lg:min-h-[460px]"
          >
            <div className="absolute left-4 top-4 z-10 rounded-xl bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-md backdrop-blur-md">
              {t("contact.location")}
            </div>

            <iframe
              src="https://yandex.com/map-widget/v1/?ll=69.458803%2C41.332500&z=16&pt=69.458803%2C41.332500%2Cpm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              title="MALBERT location"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;