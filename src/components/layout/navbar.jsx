import { Logo } from "@/assets";
import { navLinks } from "@/data/navigation";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage === "ru" ? "ru" : "uz";
  });

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const { t, i18n } = useTranslation();
  const location = useLocation();

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

  const getSectionId = (link) => link.id;

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

    setActiveSection(sectionId);
    closeMobileMenu();
  };

  const handleRequestClick = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#contact";
      return;
    }

    const contactSection = document.getElementById("contact");

    if (!contactSection) {
      return;
    }

    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection("contact");
    closeMobileMenu();
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 140) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleNavbarScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setIsNavbarVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY + 5) {
        setIsNavbarVisible(false);
        setIsLanguageOpen(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setIsNavbarVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleNavbarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  return (
    <nav
      className={`absolute left-0 top-0 z-50 w-full rounded-b-3xl bg-white backdrop-blur-lg transition-transform duration-300 ease-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      
      <div className="mx-auto flex h-[80px] w-full max-w-[1260px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-6 min-[1441px]:h-[88px] min-[1800px]:max-w-[1760px] min-[1800px]:px-6">
        {/* Logo */}
        <div className="pl-0 sm:pl-2 md:pl-3">
          <img
            src={Logo}
            alt="MALBERT"
            className="h-7 w-auto object-contain sm:h-8 md:h-10 min-[1441px]:h-14"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-11 min-[1441px]:gap-17">
          {navLinks.map((link) => {
            const sectionId = getSectionId(link);

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={(event) =>
                  handleSectionClick(event, sectionId)
                }
                className={({ isActive }) => {
                  const isSectionActive =
                    location.pathname === "/"
                      ? activeSection === sectionId
                      : isActive;

                  return `group relative px-1 py-2 text-[12px] font-medium transition-colors duration-200 xl:text-[15px] min-[1441px]:text-[19px] ${
                    isSectionActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`;
                }}
              >
                {t(`nav.${link.key}`)}

                <span
                  className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 bg-secondary transition-all duration-300 ${
                    location.pathname === "/" &&
                    activeSection === sectionId
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </NavLink>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 min-[1441px]:gap-4">
          {/* Language */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setIsLanguageOpen(!isLanguageOpen)
              }
              className="h-8 w-8 cursor-pointer rounded-lg bg-surface hover:bg-border sm:h-9 sm:w-9 min-[1441px]:h-11 min-[1441px]:w-11"
              aria-label="Language"
            >
              <span className={`fi fi-${language}`} />
            </Button>

            {isLanguageOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-32 rounded-xl border border-border bg-background p-2 shadow-xl sm:w-36">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="ghost"
                    onClick={() =>
                      changeLanguage(lang.code)
                    }
                    className={`h-auto w-full cursor-pointer justify-start gap-3 rounded-lg px-3 py-2 text-xs ${
                      language === lang.code
                        ? "bg-surface text-primary"
                        : "text-foreground"
                    }`}
                  >
                    <span className={`fi fi-${lang.flag}`} />
                    <span>{lang.name}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Request Button */}
          <Button
            onClick={handleRequestClick}
            className="hidden cursor-pointer bg-primary px-5 py-4 text-xs font-medium transition-all duration-300 hover:bg-primary-hover hover:shadow-md lg:inline-flex min-[1441px]:px-7 min-[1441px]:py-5 min-[1441px]:text-[15px]"
          >
            <span>{t("nav.request")}</span>

            <ArrowRight
              size={16}
              className="ml-1 arrow-move min-[1441px]:h-[18px] min-[1441px]:w-[18px]"
            />
          </Button>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="h-8 w-8 cursor-pointer rounded-lg hover:bg-surface lg:hidden"
            aria-label="Menu"
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
        <div className="absolute left-0 top-full z-40 w-full border-b border-border bg-background shadow-lg lg:hidden">
          <div className="mx-auto max-w-[1360px] px-4 py-4 sm:px-5 md:px-6">
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const sectionId = getSectionId(link);

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={(event) =>
                      handleSectionClick(event, sectionId)
                    }
                    className={({ isActive }) => {
                      const isSectionActive =
                        location.pathname === "/"
                          ? activeSection === sectionId
                          : isActive;

                      return `border-b border-border/60 px-2 py-3 text-sm font-medium transition-colors ${
                        isSectionActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`;
                    }}
                  >
                    {t(`nav.${link.key}`)}
                  </NavLink>
                );
              })}
            </div>

            <Button
              onClick={handleRequestClick}
              className="mt-4 w-full cursor-pointer bg-primary py-5 text-sm font-medium transition-all duration-300 hover:bg-primary-hover hover:shadow-md"
            >
              <span>{t("nav.request")}</span>

              <ArrowRight
                size={17}
                className="ml-1 arrow-move"
              />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;