import CategoryCards from "./sections/CategoryCards";

export default function HomePage() {
  return (
    <>
      <div className="w-full px-lg">
        <main
          data-pagefind-body
          className="flex-1 w-full max-w-content_max_width mx-auto py-xl flex flex-col gap-md"
        >
          <section className="pt-xl pb-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-lg">
              <div className="text-left max-w-2xl">
                <h1 className="font-headline-xl text-headline-xl text-on-surface dark:text-slate-50 mb-sm">
                  MyDevNotes
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-slate-300">
                  Una wiki pública y personal donde guardo cosas que quiero
                  repasar, ideas que me interesa aprender mejor y temas de
                  informática e ingeniería de software que quiero tener a mano.
                </p>
              </div>
              <a
                href="/inicio/bienvenida"
                className="inline-flex w-fit items-center gap-xs rounded-lg border border-primary bg-primary text-on-primary px-lg py-sm font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors"
              >
                Explorar la wiki
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </section>
          <CategoryCards />
        </main>
      </div>
    </>
  );
}
