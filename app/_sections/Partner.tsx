import { Container } from "@/components/Container";

const Partner = () => {
  return (
    <section className="partners" id="partner">
      <Container>
        <div className="section-head">
          <div className="section-label">Partnerbehörden</div>
          <h2>Ausgerichtet auf nationale und internationale Behörden</h2>
          <p>
            Innen- und Justizministerien, Polizei- und Grenzschutzbehörden, Strafverfolgungs- und
            Migrationsbehörden sowie europäische und internationale Organisationen.
          </p>
        </div>
        <div className="partner-cat">
          <h4>Europäische Behörden &amp; internationale Organisationen</h4>
          <div className="partner-tags">
            <span>Frontex</span>
            <span>Europol</span>
            <span>Cepol</span>
            <span>Eurojust</span>
            <span>Interpol</span>
            <span>IOM</span>
            <span>UNHCR</span>
            <span>ICAO</span>
          </div>
        </div>
        <div className="partner-cat">
          <h4>Polizei &amp; Grenzschutz — Auswahl</h4>
          <div className="partner-tags">
            <span>Bundespolizei (DE)</span>
            <span>Police Nationale (FR)</span>
            <span>Polizia di Stato (IT)</span> <span>Police Fédérale (BE)</span>
            <span>Politie (NL)</span>
            <span>Fedpol (CH)</span> <span>Rigspolitiet (DK)</span>
            <span>Polismyndigheten (SE)</span>
          </div>
        </div>
        <div className="partner-cat">
          <h4>Ministerien &amp; Migrationsbehörden — Auswahl</h4>
          <div className="partner-tags">
            <span>BMI (DE)</span>
            <span>Ministère de Intérieur (FR)</span>
            <span>Ministero Interno (IT)</span> <span>EJPD (CH)</span>
            <span>Migrationsverket (SE)</span>
          </div>
        </div>
        <p className="partner-note">
          Die genannten Behörden und Organisationen dienen der Veranschaulichung potenzieller
          Auftraggeber und Einsatzpartner.
        </p>
      </Container>
    </section>
  );
};

export default Partner;
