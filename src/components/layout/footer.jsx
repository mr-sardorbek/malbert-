import { LogoOq } from "@/assets";
import { navLinks } from "@/data/navigation";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const handleSectionClick = (event, sectionId) => {
    if (location.pathname !== "/") {
      return;
    }

    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
          
          {/* Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1 lg:ml-7">
            <img
              src={LogoOq}
              alt="MALBERT"
              className="h-8 w-auto object-contain"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold">
              {t("footer.navigation")}
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={(event) =>
                    handleSectionClick(event, link.id)
                  }
                  className="w-fit cursor-pointer text-sm text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-sm font-semibold">
              {t("footer.follow")}
            </h3>

            <div className="mt-4 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/malbert.uz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-md"
              >
                <FaInstagram size={17} />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/malbertuz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-md"
              >
                <FaTelegramPlane size={17} />
              </a>
            </div>

            {/* Phone + Email */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+998901234567"
                className="flex w-fit max-w-full cursor-pointer items-center gap-2 text-sm text-white/80 transition-all duration-300 hover:text-white"
              >
                <Phone
                  size={16}
                  className="shrink-0 text-white"
                />

                <span className="break-words">
                  +998 90 123 45 67
                </span>
              </a>

              <a
                href="mailto:info@malbert.uz"
                className="flex w-fit max-w-full cursor-pointer items-center gap-2 text-sm text-white/80 transition-all duration-300 hover:text-white"
              >
                <Mail
                  size={16}
                  className="shrink-0 text-white"
                />

                <span className="break-all">
                  info@malbert.uz
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6">
            <p className="text-xs text-white/50">
              {t("footer.copyright")}
            </p>

            <p className="text-xs text-white/50">
              {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;