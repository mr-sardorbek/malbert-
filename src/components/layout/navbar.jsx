import { Logo } from "@/assets";
import { navLinks } from "@/data/navigation";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Menu, X } from "lucide-react";
import { motion } from "motion/react";

const Navbar = () => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage === "ru" ? "ru" : "uz";
  });

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [hoveredNav, setHoveredNav] = useState(null);

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

  // Active section
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

  // Navbar scroll behavior
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

  // Show Navbar when mouse reaches the top of the screen
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY <= 80) {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav className="fixed left-2 right-2 top-0 z-50 rounded-b-3xl border-b border-white/20 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[80px] w-full max-w-[1260px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-6 min-[1441px]:h-[88px] min-[1800px]:max-w-[1360px] min-[1800px]:px-6">
        {/* Logo */}
        <div className="pl-0 sm:pl-2 md:pl-3">
          <img
            src={Logo}
            alt="MALBERT"
            className="h-7 w-auto object-contain sm:h-8 md:h-10 min-[1441px]:h-14"
          />
        </div>

{/* Desktop Navigation */}
<nav
  onMouseLeave={() => setHoveredNav(null)}
  className="
    hidden lg:flex mt-2 items-center gap-1
    rounded-full border 
    bg-gray-100 p-1.5
    shadow-[0_8px_30px_rgba(50,80,120,0.06),inset_0_1px_2px_rgba(255,255,255,0.15)]
    backdrop-blur-2xl
    xl:gap-1.5
    min-[1441px]:gap-2
  "
>
  {navLinks.map((link) => {
    const sectionId = getSectionId(link);

    const isSectionActive =
      location.pathname === "/"
        ? activeSection === sectionId
        : location.pathname === link.path;

    const isHighlighted = hoveredNav
      ? hoveredNav === link.path
      : isSectionActive;

    return (
      <NavLink
        key={link.path}
        to={link.path}
        end={link.path === "/"}
        onMouseEnter={() => setHoveredNav(link.path)}
        onClick={(event) => handleSectionClick(event, sectionId)}
        className={`
          relative isolate flex items-center justify-center
          rounded-full px-4 py-2.5
          text-[12px] font-medium
          transition-colors duration-300
          xl:px-5 xl:text-[15px]
          min-[1441px]:px-6 min-[1441px]:py-3
          min-[1441px]:text-[17px]
          ${
            isHighlighted
              ? "text-primary"
              : "text-foreground hover:text-primary"
          }
        `}
      >
        {isHighlighted && (
          <motion.span
            layoutId="malbert-liquid-indicator"
            className="
              absolute inset-0 -z-10 rounded-full
              border 
              
              shadow-[0_3px_12px_rgba(60,90,130,0.08),inset_0_1px_2px_rgba(255,255,255,0.25)]
              backdrop-blur-3xl
            "
            transition={{
  type: "spring",
  stiffness: 180,
  damping: 28,
  mass: 1.2,
}}
          />
        )}

        <span className="relative z-10 whitespace-nowrap">
          {t(`nav.${link.key}`)}
        </span>
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
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="h-8 w-8 cursor-pointer rounded-lg bg-surface border-lg hover:bg-border sm:h-9 sm:w-9 min-[1441px]:h-11 min-[1441px]:w-11"
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
                    onClick={() => changeLanguage(lang.code)}
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

          {/* Phone Number */}
          <a
            href="tel:+998781134040"
            className="inline-flex h-10 shrink-0 items-center gap-2.5 rounded-full bg-surface border px-4 text-sm font-medium 
            text-foreground transition-colors hover:bg-border sm:h-11 sm:gap-3 sm:px-5 sm:text-base lg:px-6 min-[1441px]:h-12 min-[1441px]:text-lg"
            aria-label="Call +998 78 113 40 40"
          >
            <Phone size={20} className="shrink-0 sm:h-[21px] sm:w-[21px]" />
            <span className="whitespace-nowrap">78 113 40 40</span>
          </a>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-8 w-8 cursor-pointer rounded-lg hover:bg-surface lg:hidden"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
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
                    onClick={(event) => handleSectionClick(event, sectionId)}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
