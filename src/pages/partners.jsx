import { useTranslation } from "react-i18next";

const partners = [
  { id: 1,  color: "1557a6", text: "PO" },
  { id: 2,   color: "7c3aed", text: "PT" },
  { id: 3,   color: "059669", text: "PR" },
  { id: 4,  color: "ea580c", text: "PF" },
  { id: 5,  color: "be185d", text: "PX" },
  { id: 6,   color: "0f766e", text: "PS" },
  { id: 7,   color: "ca8a04", text: "CM" },
  { id: 8,   color: "ca2a78", text: "PE" },
];

const PartnerLogo = ({ partner }) => {
  return (
    <img
      src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
        partner.text
      )}&backgroundColor=${partner.color}&textColor=ffffff&fontWeight=700`}
      
      className="relative z-10 h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
    />
  );
};

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary sm:text-xs">
            <span className="h-[2px] w-6 bg-secondary" />
            {t("partners.eyebrow")}
            <span className="h-[2px] w-6 bg-secondary" />
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("partners.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {t("partners.description")}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
  key={partner.id}
  className="group flex h-28 cursor-pointer items-center justify-center rounded-2xl border border-white/70 bg-white/60 px-6 shadow-[0_12px_30px_rgba(21,87,166,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(21,87,166,0.15),inset_0_1px_0_rgba(255,255,255,1)] sm:h-32"
  style={{ perspective: "1000px" }}
>
  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white to-slate-100 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_8px_18px_rgba(31,41,55,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 sm:h-20 sm:w-20">
    <div className="absolute inset-1 rounded-full border border-white/70" />

    <PartnerLogo partner={partner} />
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;