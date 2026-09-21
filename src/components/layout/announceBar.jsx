import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MapPin, Phone } from "lucide-react";

const AnnounceBar = () => {
  return (
    <div className="w-full border-b border-primary-hover bg-primary ">
      <div
        className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-3 h-8
        text-[9px] text-white sm:h-9 sm:px-5 sm:text-[10px] md:px-6 md:text-[11px] lg:h-9">

        {/* Location */}
        <div
          className="flex items-center gap-1.5 whitespace-nowrap" >
          <MapPin className="shrink-0" size={13} strokeWidth={1.8} />

          <span className="hidden xs:inline sm:inline">
            Toshkent, O‘zbekiston
          </span>
        </div>

        {/* Center */}
        <div
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span
            className="text-[7px] font-medium tracking-[0.25em] sm:text-[8px] sm:tracking-[0.3em] md:text-[9px]
             md:tracking-[0.4em]">
            FLEXO SOLUTIONS
          </span>
        </div>

        {/* Right */}
        <div
          className="ml-auto flex items-cente gap-2 sm:gap-3 md:gap-4">
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="hidden transition-opacity hover:opacity-70 sm:block"
          >
            <FaInstagram size={13} />
          </a>

          {/* Telegram */}
          <a
            href="#"
            aria-label="Telegram"
            className="hidden transition-opacity hover:opacity-70 sm:block"
          >
            <FaTelegramPlane size={13} />
          </a>

          {/* Separator */}
          <span
            className="
              hidden
              h-3.5
              w-px
              bg-white/30

              sm:block
            "
          />

          {/* Phone */}
          <a
            href="tel:+998901234567"
            className="
              flex
              items-center
              gap-1.5
              whitespace-nowrap
              transition-opacity
              hover:opacity-80
            "
          >
            <Phone className="shrink-0" size={13} strokeWidth={1.8} />

            {/* Phone number */}
            <span
              className="
                hidden

                sm:inline
              "
            >
              +998 90 123 45 67
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnounceBar;
