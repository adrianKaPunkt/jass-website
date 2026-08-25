const Services = () => {
  return (
    <section id="leistungen">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">Leistungsportfolio</div>
          <h2>Spezialisierte Luft- und Missionsdienstleistungen</h2>
          <p>
            Jede Mission wird individuell geplant und an die operativen, sicherheitsrelevanten und
            organisatorischen Anforderungen des Auftraggebers angepasst.
          </p>
        </div>
        <div className="services-grid">
          <div className="scard">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
            </svg>
            <h3>Internationale Gefangenenüberstellungen</h3>
            <p>Planung und Durchführung sicherer Überstellungen mit den zuständigen Behörden.</p>
          </div>
          <div className="scard">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 11l18-7-7 18-3-8-8-3z" />
            </svg>
            <h3>Rückführungs- &amp; Repatriierungsmissionen</h3>
            <p>Organisation staatlicher Rückführungsmissionen inkl. logistischer Koordination.</p>
          </div>
          <div className="scard">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
            </svg>
            <h3>Spezialisierte Fluglösungen</h3>
            <p>
              Dedizierte Fluglösungen für Ministerien, Behörden und internationale Organisationen.
            </p>
          </div>
          <div className="scard">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 20a16 16 0 0 0 8-14 16 16 0 0 0-16 0 16 16 0 0 0 8 14z" />
            </svg>
            <h3>Sicherheits- &amp; Missionskoordination</h3>
            <p>Operative Sicherheitsplanung und Koordination aller beteiligten Einsatzkräfte.</p>
          </div>
          <div className="scard">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" />
              <circle cx="12" cy="11" r="2.5" />
            </svg>
            <h3>Ärztliche Begleitung</h3>
            <p>Qualifizierter Arzt für medizinische Unterstützung während der gesamten Mission.</p>
          </div>
          <div className="scard">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <h3>Dolmetscher- &amp; Sprachdienstleistungen</h3>
            <p>Professionelle Kommunikationsunterstützung für internationale Einsätze.</p>
          </div>
          <div className="scard">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 3v18M4 8h5M4 13h5M15 3v18M15 8h5M15 13h5" />
            </svg>
            <h3>Einsatzplanung &amp; Behördenkommunikation</h3>
            <p>Zentrale Koordination aller Genehmigungen, Dokumentationen und Abstimmungen.</p>
          </div>
          <div className="scard">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12a7 7 0 0 1 14 0M5 12v6a2 2 0 0 0 2 2h1v-8H5zM19 12v6a2 2 0 0 1-2 2h-1v-8h3z" />
            </svg>
            <h3>Kommunikations- &amp; Konnektivitätslösungen</h3>
            <p>Permanente Internetverbindung hält Einsatzkräfte mit Behörden verbunden.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
