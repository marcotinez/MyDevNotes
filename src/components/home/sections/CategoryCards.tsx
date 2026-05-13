type CategoryCard = {
  title: string;
  description: string;
  icon: string;
  href?: string;
  disabled?: boolean;
  wide?: boolean;
};

const categoryCards: CategoryCard[] = [
  {
    title: "Fundamentos",
    description: "Conceptos base que ayudan a construir criterio antes de escribir código.",
    icon: "menu_book",
    href: "/fundamentos",
  },
  {
    title: "Arquitectura",
    description: "Formas de organizar sistemas para que crezcan sin perder claridad.",
    icon: "architecture",
    disabled: true,
  },
  {
    title: "Desarrollo",
    description: "Patrones, estructuras y decisiones prácticas para construir software real.",
    icon: "code",
    disabled: true,
  },
  {
    title: "Calidad y Operación",
    description: "Prácticas para mantener estabilidad y detectar problemas antes de que escalen.",
    icon: "bug_report",
    disabled: true,
  },
  {
    title: "Proceso y Agilidad",
    description: "Formas de colaboración que reducen ruido y ayudan a decidir mejor.",
    icon: "schema",
    disabled: true,
    wide: true,
  },
];

export default function CategoryCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {categoryCards.map((card) => {
        const isDisabled = card.disabled;
        const className = `group block bg-surface-container-lowest dark:bg-[#111319] border border-outline-variant dark:border-slate-800 rounded-xl p-lg transition-all relative overflow-hidden ${card.wide ? "md:col-span-2" : ""} ${
          isDisabled
            ? "cursor-not-allowed"
            : "hover:border-primary hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
        }`;

        const content = (
          <>
            {card.wide ? (
              <div className={`absolute top-1/2 -translate-y-1/2 right-xl hidden md:block ${isDisabled ? "opacity-10" : "opacity-10 group-hover:opacity-20 transition-opacity"}`}>
                <span className={`material-symbols-outlined text-[120px] ${isDisabled ? "text-outline dark:text-slate-800" : "text-primary dark:text-[#1d3f7a]"}`}>{card.icon}</span>
              </div>
            ) : (
              <div className={`absolute top-0 right-0 p-lg ${isDisabled ? "opacity-10" : "opacity-10 group-hover:opacity-20 transition-opacity"}`}>
                <span className={`material-symbols-outlined text-[80px] ${isDisabled ? "text-outline dark:text-slate-800" : "text-primary dark:text-[#1d3f7a]"}`}>{card.icon}</span>
              </div>
            )}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-md border ${
              isDisabled
                ? "bg-surface-container dark:bg-[#171a22] border-outline-variant dark:border-slate-700"
                : "bg-primary-fixed dark:bg-[#16284e] border-primary-fixed-dim dark:border-[#29437a] group-hover:bg-primary group-hover:text-on-primary transition-colors"
            }`}>
              <span className={`material-symbols-outlined ${isDisabled ? "text-outline dark:text-slate-500" : "text-primary dark:text-slate-100 group-hover:text-on-primary"}`}>{card.icon}</span>
            </div>
            <h2 className={`font-headline-md text-headline-md mb-sm ${isDisabled ? "text-on-surface-variant dark:text-slate-500" : "text-on-surface dark:text-slate-100"}`}>{card.title}</h2>
            <p className={`font-body-md text-body-md ${card.wide ? "max-w-lg" : ""} ${isDisabled ? "text-outline dark:text-slate-600" : "text-on-surface-variant dark:text-slate-300"}`}>
              {card.description}
            </p>
            {isDisabled && (
              <>
                <div className="absolute inset-0 bg-surface/55 dark:bg-[#090a0d]/60" aria-hidden="true" />
                <div className="absolute inset-x-lg bottom-lg inline-flex w-fit items-center rounded-full border border-outline-variant dark:border-slate-700 bg-surface-container dark:bg-[#171a22] px-sm py-xs font-label-sm text-label-sm text-on-surface-variant dark:text-slate-400">
                  Próximamente
                </div>
              </>
            )}
          </>
        );

        if (isDisabled) {
          return (
            <div key={card.title} className={className} aria-disabled="true">
              {content}
            </div>
          );
        }

        return (
          <a key={card.title} className={className} href={card.href ?? "#"}>
            {content}
          </a>
        );
      })}
    </section>
  );
}
