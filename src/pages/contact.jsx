import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    message: false,
  });

  const { t, i18n } = useTranslation();

  const isRussian = i18n.language === "ru";

  const address = isRussian
    ? "г. Ташкент, Мирзо-Улугбекский район, махалля Чингельди, дом 8, ул. Богбон"
    : "Toshkent shahar, Mirzo Ulug‘bek tumani, Chingeldi mahallasi, Bog‘bon 8-uy";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanPhone = phone.replace(/\s/g, "");

    const newErrors = {
      name: !name.trim(),
      phone: cleanPhone.length !== 9,
      message: !message.trim(),
    };

    setErrors(newErrors);

    if (newErrors.name) {
      toast.error(t("contact.validationName"));
      return;
    }

    if (newErrors.phone) {
      toast.error(t("contact.validationPhone"));
      return;
    }

    if (newErrors.message) {
      toast.error(t("contact.validationMessage"));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: `+998${cleanPhone}`,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Xatolik yuz berdi");
      }

      toast.success(t("contact.success"));

      setName("");
      setPhone("");
      setMessage("");

      setErrors({
        name: false,
        phone: false,
        message: false,
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message || t("contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-background px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1260px] min-[1800px]:max-w-[1360px]">
        <div className="grid gap-6 lg:grid-cols-2 min-[1800px]:gap-8">
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
            className="rounded-2xl bg-white p-6 sm:p-8 min-[1800px]:rounded-3xl min-[1800px]:p-10"
          >
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl min-[1800px]:text-5xl">
                {t("contact.title")}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base min-[1800px]:max-w-3xl min-[1800px]:text-lg min-[1800px]:leading-8">
                {t("contact.description")}
              </p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-4 min-[1800px]:mt-12 min-[1800px]:space-y-5"
            >
              <Input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    name: false,
                  }));
                }}
                placeholder={t("contact.name")}
                className={`h-12 cursor-text rounded-xl border bg-background transition-all duration-300 min-[1800px]:h-14 min-[1800px]:rounded-2xl min-[1800px]:px-5 min-[1800px]:text-base ${
                  errors.name
                    ? "border-red-500 focus-visible:!border-red-500 focus-visible:!ring-2 focus-visible:!ring-red-500/20"
                    : "border-border focus-visible:!border-secondary focus-visible:!ring-2 focus-visible:!ring-secondary/20"
                }`}
              />

              <div
                className={`flex h-12 overflow-hidden rounded-xl border bg-background transition-all duration-300 min-[1800px]:h-14 min-[1800px]:rounded-2xl ${
                  errors.phone
                    ? "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20"
                    : "border-border focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20"
                }`}
              >
                <span className="flex items-center border-r border-border px-4 text-sm text-muted-foreground min-[1800px]:px-5 min-[1800px]:text-base">
                  +998
                </span>

                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      phone: false,
                    }));
                  }}
                  placeholder="90 123 45 67"
                  className="h-full rounded-none border-0 bg-transparent focus-visible:ring-0 min-[1800px]:text-base"
                />
              </div>

              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    message: false,
                  }));
                }}
                placeholder={t("contact.message")}
                className={`min-h-32 w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground min-[1800px]:min-h-40 min-[1800px]:rounded-2xl min-[1800px]:px-5 min-[1800px]:py-4 min-[1800px]:text-base ${
                  errors.message
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : "border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                }`}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full cursor-pointer rounded-xl bg-secondary text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-secondary/90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 min-[1800px]:h-14 min-[1800px]:rounded-2xl min-[1800px]:text-lg"
              >
                {isSubmitting ? t("contact.sending") : t("contact.submit")}

                {!isSubmitting && (
                  <ArrowRight
                    size={16}
                    className="ml-1 arrow-move transition-transform duration-300 min-[1800px]:h-5 min-[1800px]:w-5"
                  />
                )}
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
            className="relative h-[360px] overflow-hidden rounded-2xl border border-8 border-white bg-background transition-all duration-300 lg:h-full lg:min-h-[460px] min-[1800px]:min-h-[560px] min-[1800px]:rounded-3xl"
          >
            <div className="absolute left-4 top-4 z-10 rounded-xl bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-md backdrop-blur-md min-[1800px]:left-6 min-[1800px]:top-6 min-[1800px]:rounded-2xl min-[1800px]:px-5 min-[1800px]:py-3 min-[1800px]:text-base">
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
          className="mt-6 grid gap-4 md:grid-cols-3 md:gap-3 min-[1800px]:mt-8 min-[1800px]:gap-6"
        >
          {/* Address */}
          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,87,166,0.16)] md:gap-2 md:p-3 lg:gap-4 lg:p-5 min-[1800px]:gap-4 min-[1800px]:rounded-3xl min-[1800px]:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary md:h-8 md:w-8 lg:h-11 lg:w-11 min-[1800px]:h-14 min-[1800px]:w-14 min-[1800px]:rounded-2xl">
              <MapPin
                size={20}
                strokeWidth={1.8}
                className="md:h-4 md:w-4 lg:h-5 lg:w-5 min-[1800px]:h-6 min-[1800px]:w-6"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground md:text-[11px] lg:text-sm min-[1800px]:text-base">
                {t("contact.addressTitle")}
              </h3>

              <a
                href="https://yandex.com/maps/?ll=69.458803%2C41.332500&z=16&pt=69.458803%2C41.332500%2Cpm2rdm"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block cursor-pointer text-sm leading-5 text-muted-foreground transition-colors duration-300 hover:text-primary md:text-[10px] md:leading-4 lg:text-sm lg:leading-5 min-[1800px]:text-base min-[1800px]:leading-7"
              >
                {address}
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,87,166,0.16)] md:gap-2 md:p-3 lg:gap-4 lg:p-5 min-[1800px]:gap-4 min-[1800px]:rounded-3xl min-[1800px]:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary md:h-8 md:w-8 lg:h-11 lg:w-11 min-[1800px]:h-14 min-[1800px]:w-14 min-[1800px]:rounded-2xl">
              <Clock3
                size={20}
                strokeWidth={1.8}
                className="md:h-4 md:w-4 lg:h-5 lg:w-5 min-[1800px]:h-6 min-[1800px]:w-6"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground md:text-[11px] lg:text-sm min-[1800px]:text-base">
                {t("contact.workingHoursTitle")}
              </h3>

              <p className="mt-1 text-sm font-medium text-foreground md:text-[10px] lg:text-sm min-[1800px]:text-base">
                {t("contact.workingHours")}
              </p>

              <p className="mt-1 text-xs text-muted-foreground md:text-[9px] lg:text-xs min-[1800px]:text-sm">
                {t("contact.workingDays")}
              </p>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:+998901234567"
            className="flex min-w-0 cursor-pointer items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,87,166,0.16)] md:gap-2 md:p-3 lg:gap-4 lg:p-5 min-[1800px]:gap-4 min-[1800px]:rounded-3xl min-[1800px]:p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary md:h-8 md:w-8 lg:h-11 lg:w-11 min-[1800px]:h-14 min-[1800px]:w-14 min-[1800px]:rounded-2xl">
              <Phone
                size={20}
                strokeWidth={1.8}
                className="md:h-4 md:w-4 lg:h-5 lg:w-5 min-[1800px]:h-6 min-[1800px]:w-6"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground md:text-[11px] lg:text-sm min-[1800px]:text-base">
                {t("contact.phoneTitle")}
              </h3>

              <p className="mt-1 text-sm font-medium text-foreground md:text-[10px] lg:text-sm min-[1800px]:text-base">
                +998 90 123 45 67
              </p>

              <p className="mt-1 text-xs text-muted-foreground md:text-[9px] lg:text-xs min-[1800px]:text-sm">
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