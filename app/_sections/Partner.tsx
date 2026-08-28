import { Container } from "@/components/Container";

const PARTNER_CATEGORIES = [
  {
    title: "Europäische Behörden & internationale Organisationen",
    tags: ["Frontex", "Europol", "Cepol", "Eurojust", "Interpol", "IOM", "UNHCR", "ICAO"],
  },
  {
    title: "Polizei & Grenzschutz — Auswahl",
    tags: [
      "Bundespolizei (DE)",
      "Police Nationale (FR)",
      "Polizia di Stato (IT)",
      "Police Fédérale (BE)",
      "Politie (NL)",
      "Fedpol (CH)",
      "Rigspolitiet (DK)",
      "Polismyndigheten (SE)",
    ],
  },
  {
    title: "Ministerien & Migrationsbehörden — Auswahl",
    tags: [
      "BMI (DE)",
      "Ministère de Intérieur (FR)",
      "Ministero Interno (IT)",
      "EJPD (CH)",
      "Migrationsverket (SE)",
    ],
  },
];

const Partner = () => {
  return (
    <section
      className="border-y border-black/10 bg-black/2 py-24 lg:py-32 dark:border-white/10 dark:bg-white/2"
      id="partner"
    >
      <Container>
        <div className="section-head">
          <div className="section-label mb-3">Partnerbehörden</div>
          <h2 className="mb-4">Ausgerichtet auf nationale und internationale Behörden</h2>
          <p>
            Innen- und Justizministerien, Polizei- und Grenzschutzbehörden, Strafverfolgungs- und
            Migrationsbehörden sowie europäische und internationale Organisationen.
          </p>
        </div>
        {PARTNER_CATEGORIES.map((category) => (
          <div key={category.title} className="mb-11">
            <h4 className="mb-4">{category.title}</h4>
            <div className="flex flex-wrap gap-2.5">
              {category.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/15 px-4 py-2 text-xs tracking-wide text-secondary uppercase dark:border-white/15 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        <p className="mt-3 text-xs text-slate-500 italic">
          Die genannten Behörden und Organisationen dienen der Veranschaulichung potenzieller
          Auftraggeber und Einsatzpartner.
        </p>
      </Container>
    </section>
  );
};

export default Partner;
