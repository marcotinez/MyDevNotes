import CategoryCards from "./sections/CategoryCards";

export default function HomePage() {
  return (
    <>
      <main className="flex-1 w-full max-w-content_max_width mx-auto px-lg py-xl flex flex-col gap-md">
        <section className="pt-xl pb-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-lg">
            <div className="text-left max-w-2xl">
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-sm">MyDevNotes</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Compilado personal de prácticas, patrones y referencias de ingeniería de software que uso en
                proyectos reales.
              </p>
            </div>
            <a
              href="/inicio/bienvenida"
              className="inline-flex w-fit items-center gap-xs rounded-lg border border-primary bg-primary text-on-primary px-lg py-sm font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors"
            >
              Comenzar
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
          <div className="relative w-full mt-lg shadow-md rounded-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[24px]">
              search
            </span>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-3 pl-12 pr-6 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim transition-all"
              placeholder="Buscar artículos, guías o endpoints de API..."
              type="text"
            />
          </div>
        </section>
        <CategoryCards />
      </main>
    </>
  );
}
