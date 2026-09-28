import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const isRussian = i18n.language === "ru";

  const address = isRussian
    ? "г. Ташкент, Мирзо-Улугбекский район, махалля Чингельди, дом 8, ул. Богбон"
    : "Toshkent shahar, Mirzo Ulug‘bek tumani, Chingeldi mahallasi, Bog‘bon 8-uy";

  return (
    <section
      id="contact"
      className="bg-background mt-[-260px] px-4 py-16 sm:px-6 md:py-20 min-[1441px]:flex min-[1441px]:min-h-[880px] min-[1441px]:items-center"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Side - Heading + Form */}
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
            className="rounded-2xl bg-white p-6 sm:p-8"
          >
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("contact.title")}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                {t("contact.description")}
              </p>
            </div>

            {/* Contact Form */}
            <form className="mt-10 space-y-4">
              <Input
                type="text"
                placeholder={t("contact.name")}
                className="h-12 cursor-text rounded-xl border border-border bg-background transition-all duration-300 focus-visible:!border-secondary focus-visible:!ring-2 focus-visible:!ring-secondary/20"
              />

              <Input
                type="tel"
                placeholder={t("contact.phone")}
                className="h-12 cursor-text rounded-xl border border-border bg-background transition-all duration-300 focus-visible:!border-secondary focus-visible:!ring-2 focus-visible:!ring-secondary/20"
              />

              <textarea
                placeholder={t("contact.message")}
                className="min-h-32 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20"
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

          {/* Right Side - Map */}
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
            className="relative h-[360px] overflow-hidden rounded-2xl border border-8 border-white bg-background transition-all duration-300 lg:h-full lg:min-h-[460px]"
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

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-6 grid gap-4 md:grid-cols-3"
        >
          {/* Address */}
          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,87,166,0.16)]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <MapPin size={20} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {t("contact.addressTitle")}
              </h3>

              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                {t("contact.address")}
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,87,166,0.16)]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <Clock3 size={20} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {t("contact.workingHoursTitle")}
              </h3>

              <p className="mt-1 text-sm font-medium text-foreground">
                {t("contact.workingHours")}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {t("contact.workingDays")}
              </p>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:+998901234567"
            className="flex cursor-pointer items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,87,166,0.16)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <Phone size={20} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {t("contact.phoneTitle")}
              </h3>

              <p className="mt-1 text-sm font-medium text-foreground">
                +998 90 123 45 67
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {t("contact.phoneDescription")}
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;