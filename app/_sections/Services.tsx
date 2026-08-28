import { Container } from "@/components/Container";

const SERVICES = [
  {
    title: "Internationale Gefangenenüberstellungen",
    description: "Planung und Durchführung sicherer Überstellungen mit den zuständigen Behörden.",
    path: "M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z",
    extra: <circle cx="12" cy="12" r="9" />,
  },
  {
    title: "Rückführungs- & Repatriierungsmissionen",
    description: "Organisation staatlicher Rückführungsmissionen inkl. logistischer Koordination.",
    path: "M3 11l18-7-7 18-3-8-8-3z",
  },
  {
    title: "Spezialisierte Fluglösungen",
    description:
      "Dedizierte Fluglösungen für Ministerien, Behörden und internationale Organisationen.",
    path: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6",
  },
  {
    title: "Sicherheits- & Missionskoordination",
    description: "Operative Sicherheitsplanung und Koordination aller beteiligten Einsatzkräfte.",
    path: "M12 20a16 16 0 0 0 8-14 16 16 0 0 0-16 0 16 16 0 0 0 8 14z",
  },
  {
    title: "Ärztliche Begleitung",
    description: "Qualifizierter Arzt für medizinische Unterstützung während der gesamten Mission.",
    path: "M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z",
    extra: <circle cx="12" cy="11" r="2.5" />,
  },
  {
    title: "Dolmetscher- & Sprachdienstleistungen",
    description: "Professionelle Kommunikationsunterstützung für internationale Einsätze.",
    path: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  },
  {
    title: "Einsatzplanung & Behördenkommunikation",
    description: "Zentrale Koordination aller Genehmigungen, Dokumentationen und Abstimmungen.",
    path: "M9 3v18M4 8h5M4 13h5M15 3v18M15 8h5M15 13h5",
  },
  {
    title: "Kommunikations- & Konnektivitätslösungen",
    description: "Permanente Internetverbindung hält Einsatzkräfte mit Behörden verbunden.",
    path: "M5 12a7 7 0 0 1 14 0M5 12v6a2 2 0 0 0 2 2h1v-8H5zM19 12v6a2 2 0 0 1-2 2h-1v-8h3z",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <Container>
        <div className="section-head">
          <div className="section-label mb-3">Leistungsportfolio</div>
          <h2 className="mb-4">Spezialisierte Luft- und Missionsdienstleistungen</h2>
          <p>
            Jede Mission wird individuell geplant und an die operativen, sicherheitsrelevanten und
            organisatorischen Anforderungen des Auftraggebers angepasst.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex min-h-52.5 flex-col justify-between bg-white p-7 transition-colors hover:bg-black/2 dark:bg-black dark:hover:bg-white/4"
            >
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {service.extra}
                <path d={service.path} />
              </svg>
              <div>
                <h3 className="mt-5 text-sm leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
