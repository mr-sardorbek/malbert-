import { Logo } from "@/assets";
import { navLinks } from "@/data/navigation";

import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");

    return savedLanguage === "ru" ? "ru" : "uz";
  });

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const languages = [
    {
      code: "uz",
      flag: "uz",
      name: "O'zbek",
    },
    {
      code: "ru",
      flag: "ru",
      name: "Русский",
    },
  ];

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative w-full border-b border-border bg-background">
      {/* Main Navbar */}
      <div
        className="
          mx-auto flex h-[58px] max-w-7xl items-center
          justify-between px-4

          sm:px-5

          md:px-6
        "
      >
        {/* Logo */}
        <div className="pl-0 sm:pl-2 md:pl-3">
          <img
            src={Logo}
            alt="MALBERT"
            className="
              h-7 w-auto object-contain

              sm:h-8

              md:h-8
            "
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `group relative px-1 py-2 text-[12px] font-medium
                transition-colors duration-200
                xl:text-[13px]
                ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t(`nav.${link.key}`)}

                  <span
                    className={`
                      absolute bottom-1 left-1/2 h-[2px]
                      -translate-x-1/2 bg-secondary
                      transition-all duration-300

                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="
                h-8 w-8 cursor-pointer rounded-lg
                bg-surface hover:bg-border

                sm:h-9 sm:w-9
              "
            >
              <span className={`fi fi-${language}`} />
            </Button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <div
                className="
                  absolute right-0 top-full z-50 mt-2
                  w-32 rounded-xl border border-border
                  bg-background p-2 shadow-xl

                  sm:w-36
                "
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`
                      flex w-full items-center gap-3
                      rounded-lg px-3 py-2
                      text-xs transition-colors
                      hover:bg-surface

                      ${
                        language === lang.code
                          ? "bg-surface text-primary"
                          : "text-foreground"
                      }
                    `}
                  >
                    <span className={`fi fi-${lang.flag}`} />

                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Request Button - Desktop */}
          <Button
            className="
              hidden
              bg-primary
              px-5 py-4
              text-xs font-medium
              hover:bg-primary-hover

              lg:inline-flex
            "
          >
            {t("nav.request")} →
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              h-8 w-8 cursor-pointer rounded-lg
              hover:bg-surface

              lg:hidden
            "
          >
            {isMobileMenuOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {isMobileMenuOpen && (
        <div
          className="
            absolute left-0 top-full z-40
            w-full border-b border-border
            bg-background shadow-lg

            lg:hidden
          "
        >
          <div
            className="
              mx-auto max-w-7xl
              px-4 py-4

              sm:px-5

              md:px-6
            "
          >
            {/* Navigation Links */}
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `
                      border-b border-border/60
                      px-2 py-3
                      text-sm font-medium
                      transition-colors

                      ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }
                    `
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}
            </div>

            {/* Mobile Request */}
            <Button
              className="
                mt-4 w-full
                bg-primary
                py-5
                text-sm font-medium
                hover:bg-primary-hover
              "
            >
              {t("nav.request")} →
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;