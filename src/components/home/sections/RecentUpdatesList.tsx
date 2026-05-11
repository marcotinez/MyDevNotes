type UpdateItem = {
  title: string;
  meta: string;
};

const updates: UpdateItem[] = [
  {
    title: "RFC de autenticación en microservicios actualizado",
    meta: "Arquitectura • Actualizado hace 2 horas por Sarah Jenkins",
  },
  {
    title: "Nuevos componentes de frontend para Q3",
    meta: "Desarrollo • Actualizado ayer por Mike Chen",
  },
  {
    title: "Despliegue de nueva estrategia de caché en CI",
    meta: "Calidad y Operación • Actualizado hace 3 días por el equipo DevOps",
  },
];

export default function RecentUpdatesList() {
  return (
    <section className="mt-lg border-t border-outline-variant pt-lg">
      <h3 className="font-headline-lg text-headline-lg text-on-surface mb-md">Actualizaciones recientes</h3>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden divide-y divide-outline-variant">
        {updates.map((update) => (
          <a
            key={update.title}
            className="block p-md hover:bg-surface-container-low transition-colors flex items-start gap-md"
            href="#"
          >
            <span className="material-symbols-outlined text-outline mt-1">description</span>
            <div>
              <div className="font-label-md text-label-md text-on-surface mb-xs">{update.title}</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">{update.meta}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
