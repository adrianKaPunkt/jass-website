import { Container } from "@/components/Container";

const inputClassName =
  "border border-black/15 bg-transparent px-4 py-3 text-sm text-secondary placeholder:text-slate-400 focus:border-primary focus:outline-none dark:border-white/15 dark:text-white";

const labelClassName = "text-xs font-semibold tracking-[0.1em] text-slate-500 uppercase";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <div className="section-label mb-3">Kontakt</div>
            <h2 className="mb-4">Mission anfragen</h2>
            <p className="max-w-md">
              Für Behörden, Ministerien und internationale Organisationen — J.A.S.S. koordiniert
              Ihre Anfrage vertraulich und mit kurzer Reaktionszeit.
            </p>
            <div className="mt-10 flex flex-col divide-y divide-black/10 border-t border-black/10 dark:divide-white/10 dark:border-white/10">
              <div className="flex items-baseline justify-between gap-4 py-4 text-sm">
                <span className={labelClassName}>Hauptsitz</span>
                <span className="text-secondary dark:text-white">Luxemburg</span>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-4 text-sm">
                <span className={labelClassName}>Divisionen</span>
                <span className="text-secondary dark:text-white">Africa (TBJ) · Asia (TMJ)</span>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-4 text-sm">
                <span className={labelClassName}>Erreichbarkeit</span>
                <span className="text-secondary dark:text-white">24/7 Einsatzkoordination</span>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="org" className={labelClassName}>
                Behörde / Organisation
              </label>
              <input
                id="org"
                type="text"
                placeholder="z. B. Bundespolizei"
                required
                className={inputClassName}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClassName}>
                Name
              </label>
              <input id="name" type="text" required className={inputClassName} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mail" className={labelClassName}>
                E-Mail
              </label>
              <input id="mail" type="email" required className={inputClassName} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="msg" className={labelClassName}>
                Anliegen
              </label>
              <textarea
                id="msg"
                placeholder="Kurze Beschreibung der Mission oder Anfrage"
                className={`min-h-30 resize-y ${inputClassName}`}
              ></textarea>
            </div>
            <button
              className="mt-2 bg-primary px-6 py-4 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-secondary dark:hover:bg-white dark:hover:text-secondary"
              type="submit"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
