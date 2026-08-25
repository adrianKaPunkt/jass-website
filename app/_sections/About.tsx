const About = () => {
  return (
    <section className="profile" id="profil">
      <div className="wrap">
        <div className="profile-grid">
          <div className="profile-text">
            <div className="section-label">Unternehmensprofil</div>
            <h2>Eine zentrale Gesamtlösung für komplexe Missionen</h2>
            <p>
              J.A.S.S. bündelt Lufttransport, Einsatzplanung, Sicherheitskoordination und operative
              Unterstützung zu einer integrierten Lösung für nationale und internationale
              Behördeneinsätze.
            </p>
            <p>
              Eigene Flotte, eigene Piloten, eigene Ärzte, eigene Sicherheit — jede Mission wird
              individuell an die Anforderungen des Auftraggebers angepasst.
            </p>
          </div>
          <div className="profile-cards">
            <div className="pcard">
              <div className="num">01</div>
              <h3>Flugtransport</h3>
              <p>Sicherer, zuverlässiger Lufttransport mit passenden Flugzeuglösungen.</p>
            </div>
            <div className="pcard">
              <div className="num">02</div>
              <h3>Sicherheit</h3>
              <p>Spezialisierte Sicherheitskonzepte und geschultes Personal für jede Mission.</p>
            </div>
            <div className="pcard">
              <div className="num">03</div>
              <h3>Planung</h3>
              <p>Umfassende Planung und Koordination aller operativen und logistischen Abläufe.</p>
            </div>
            <div className="pcard">
              <div className="num">04</div>
              <h3>Behörde</h3>
              <p>Behördliche Koordination und Kommunikation auf allen Ebenen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
