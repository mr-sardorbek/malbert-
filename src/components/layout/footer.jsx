import { LogoOq } from "@/assets";
import { navLinks } from "@/data/navigation";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-12 md:py-8 min-[1800px]:max-w-[1460px] min-[1800px]:px-6 min-[1800px]:py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr] md:gap-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8 min-[1800px]:gap-12">
          
          <div className="sm:col-span-2 md:col-span-1 md:ml-0 lg:col-span-1 lg:ml-7 min-[1800px]:ml-0">
            <img
              src={LogoOq}
              alt="MALBERT"
              className="h-8 w-auto object-contain min-[1800px]:h-10"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70 min-[1800px]:mt-5 min-[1800px]:max-w-md min-[1800px]:text-base min-[1800px]:leading-7">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold min-[1800px]:text-base">
              {t("footer.navigation")}
            </h3>

            <nav className="mt-4 flex flex-col gap-3 min-[1800px]:mt-5 min-[1800px]:gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="w-fit cursor-pointer text-sm text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white min-[1800px]:text-base"
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold min-[1800px]:text-base">
              {t("footer.follow")}
            </h3>

            <div className="mt-4 flex items-center gap-3 min-[1800px]:mt-5 min-[1800px]:gap-4">
              <a
                href="https://www.instagram.com/malbert.uz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-md min-[1800px]:h-11 min-[1800px]:w-11"
              >
                <FaInstagram
                  size={17}
                  className="min-[1800px]:h-[18px] min-[1800px]:w-[18px]"
                />
              </a>

              <a
                href="https://t.me/malbertuz"
                aria-label="Telegram"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-md min-[1800px]:h-11 min-[1800px]:w-11"
              >
                <FaTelegramPlane
                  size={17}
                  className="min-[1800px]:h-[18px] min-[1800px]:w-[18px]"
                />
              </a>
            </div>

            <div className="mt-6 space-y-3 min-[1800px]:mt-7 min-[1800px]:space-y-4">
              <a
                href="tel:+998901234567"
                className="flex w-fit max-w-full cursor-pointer items-center gap-2 text-sm text-white/80 transition-all duration-300 hover:text-white min-[1800px]:text-base"
              >
                <Phone
                  size={16}
                  className="shrink-0 text-white min-[1800px]:h-[18px] min-[1800px]:w-[18px]"
                />

                <span className="break-words">
                  +998 90 123 45 67
                </span>
              </a>

              <a
                href="mailto:info@malbert.uz"
                className="flex w-fit max-w-full cursor-pointer items-center gap-2 text-sm text-white/80 transition-all duration-300 hover:text-white min-[1800px]:text-base"
              >
                <Mail
                  size={16}
                  className="shrink-0 text-white min-[1800px]:h-[18px] min-[1800px]:w-[18px]"
                />

                <span className="break-all">
                  info@malbert.uz
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 min-[1800px]:mt-12 min-[1800px]:pt-7">
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6">
            <p className="text-xs text-white/50 min-[1800px]:text-sm">
              {t("footer.copyright")}
            </p>

            <p className="text-xs text-white/50 min-[1800px]:text-sm">
              {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;