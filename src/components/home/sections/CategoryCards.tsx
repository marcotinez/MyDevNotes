type CategoryCard = {
  title: string;
  description: string;
  icon: string;
  wide?: boolean;
};

const categoryCards: CategoryCard[] = [
  {
    title: "Fundamentos",
    description: "Conceptos base que ayudan a construir criterio antes de escribir código.",
    icon: "menu_book",
  },
  {
    title: "Arquitectura",
    description: "Formas de organizar sistemas para que crezcan sin perder claridad.",
    icon: "architecture",
  },
  {
    title: "Desarrollo",
    description: "Patrones, estructuras y decisiones prácticas para construir software real.",
    icon: "code",
  },
  {
    title: "Calidad y Operación",
    description: "Prácticas para mantener estabilidad y detectar problemas antes de que escalen.",
    icon: "bug_report",
  },
  {
    title: "Proceso y Agilidad",
    description: "Formas de colaboración que reducen ruido y ayudan a decidir mejor.",
    icon: "schema",
    wide: true,
  },
];

export default function CategoryCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {categoryCards.map((card) => (
        <a
          key={card.title}
          className={`group block bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover:border-primary hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-all relative overflow-hidden ${card.wide ? "md:col-span-2" : ""}`}
          href="#"
        >
          {card.wide ? (
            <div className="absolute top-1/2 -translate-y-1/2 right-xl opacity-10 group-hover:opacity-20 transition-opacity hidden md:block">
              <span className="material-symbols-outlined text-[120px] text-primary">{card.icon}</span>
            </div>
          ) : (
            <div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[80px] text-primary">{card.icon}</span>
            </div>
          )}
          <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-md border border-primary-fixed-dim group-hover:bg-primary group-hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary">{card.icon}</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">{card.title}</h2>
          <p className={`font-body-md text-body-md text-on-surface-variant ${card.wide ? "max-w-lg" : ""}`}>
            {card.description}
          </p>
        </a>
      ))}
    </section>
  );
}
