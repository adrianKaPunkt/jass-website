import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-inter dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <header>
          <nav>
            <div className="brand">
              <div className="brand-mark">⚖</div>
              <div className="brand-text">
                J.A.S.S.<span>Justice Aeronautical Special Services</span>
              </div>
            </div>
            <div className="nav-links">
              <a href="#profil">Profil</a>
              <a href="#leistungen">Leistungen</a>
              <a href="#flotte">Flotte</a>
              <a href="#netzwerk">Netzwerk</a>
              <a href="#partner">Partner</a>
            </div>
            <a className="nav-cta" href="#kontakt">
              Kontakt
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div className="eyebrow">Integrated Government Air Operations</div>
            <h1>
              Luftoperationen für
              <br />
              staatliche <em>Sondermissionen.</em>
            </h1>
            <p>
              J.A.S.S. plant, koordiniert und führt integrierte Luft- und Missionseinsätze für
              Behörden und internationale Organisationen durch — von Rückführungsmissionen bis zu
              komplexen Sondereinsätzen.
            </p>
            <div className="hero-ctas">
              <a className="btn-primary" href="#kontakt">
                Mission anfragen
              </a>
              <a className="btn-ghost" href="#leistungen">
                Leistungen ansehen
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <b>3</b>
                <span>Operationsstandorte weltweit</span>
              </div>
              <div className="stat">
                <b>8.500 km</b>
                <span>Maximale Reichweite (ACJ319)</span>
              </div>
              <div className="stat">
                <b>2</b>
                <span>Speziell konfigurierte Missionsflugzeuge</span>
              </div>
              <div className="stat">
                <b>24/7</b>
                <span>Einsatzkoordination &amp; Behördenanbindung</span>
              </div>
            </div>
          </div>
        </section>

        <div className="flightline">
          <div className="track"></div>
          <svg className="plane" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5z" />
          </svg>
        </div>

        {/* PROFIL */}
        <section className="profile" id="profil">
          <div className="wrap">
            <div className="profile-grid">
              <div className="profile-text">
                <div className="section-label">Unternehmensprofil</div>
                <h2>Eine zentrale Gesamtlösung für komplexe Missionen</h2>
                <p>
                  J.A.S.S. bündelt Lufttransport, Einsatzplanung, Sicherheitskoordination und
                  operative Unterstützung zu einer integrierten Lösung für nationale und
                  internationale Behördeneinsätze.
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
                  <p>
                    Spezialisierte Sicherheitskonzepte und geschultes Personal für jede Mission.
                  </p>
                </div>
                <div className="pcard">
                  <div className="num">03</div>
                  <h3>Planung</h3>
                  <p>
                    Umfassende Planung und Koordination aller operativen und logistischen Abläufe.
                  </p>
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

        {/* LEISTUNGEN */}
        <section id="leistungen">
          <div className="wrap">
            <div className="section-head">
              <div className="section-label">Leistungsportfolio</div>
              <h2>Spezialisierte Luft- und Missionsdienstleistungen</h2>
              <p>
                Jede Mission wird individuell geplant und an die operativen, sicherheitsrelevanten
                und organisatorischen Anforderungen des Auftraggebers angepasst.
              </p>
            </div>
            <div className="services-grid">
              <div className="scard">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
                </svg>
                <h3>Internationale Gefangenenüberstellungen</h3>
                <p>
                  Planung und Durchführung sicherer Überstellungen mit den zuständigen Behörden.
                </p>
              </div>
              <div className="scard">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M3 11l18-7-7 18-3-8-8-3z" />
                </svg>
                <h3>Rückführungs- &amp; Repatriierungsmissionen</h3>
                <p>
                  Organisation staatlicher Rückführungsmissionen inkl. logistischer Koordination.
                </p>
              </div>
              <div className="scard">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                </svg>
                <h3>Spezialisierte Fluglösungen</h3>
                <p>
                  Dedizierte Fluglösungen für Ministerien, Behörden und internationale
                  Organisationen.
                </p>
              </div>
              <div className="scard">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M12 20a16 16 0 0 0 8-14 16 16 0 0 0-16 0 16 16 0 0 0 8 14z" />
                </svg>
                <h3>Sicherheits- &amp; Missionskoordination</h3>
                <p>
                  Operative Sicherheitsplanung und Koordination aller beteiligten Einsatzkräfte.
                </p>
              </div>
              <div className="scard">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <h3>Ärztliche Begleitung</h3>
                <p>
                  Qualifizierter Arzt für medizinische Unterstützung während der gesamten Mission.
                </p>
              </div>
              <div className="scard">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
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
                  stroke-width="1.5"
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
                  stroke-width="1.5"
                >
                  <path d="M5 12a7 7 0 0 1 14 0M5 12v6a2 2 0 0 0 2 2h1v-8H5zM19 12v6a2 2 0 0 1-2 2h-1v-8h3z" />
                </svg>
                <h3>Kommunikations- &amp; Konnektivitätslösungen</h3>
                <p>Permanente Internetverbindung hält Einsatzkräfte mit Behörden verbunden.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FLOTTE */}
        <section className="fleet" id="flotte">
          <div className="wrap">
            <div className="section-head">
              <div className="section-label">Mission Fleet</div>
              <h2>Speziell konfigurierte Missionsluftfahrzeuge</h2>
              <p>
                Zwei Plattformen, flexibel eingesetzt nach Einsatzprofil, Personenkapazität und
                operativen Anforderungen.
              </p>
            </div>
            <div className="fleet-cards">
              <div className="fcard">
                <div>
                  <div className="tag">Long Range Mission Platform</div>
                  <h3>Airbus ACJ319</h3>
                  <p>
                    Speziell konzipierte Missionskabine mit getrennten Funktionsbereichen für
                    Einsatzführung, medizinische Versorgung und sicheren Transport auf
                    internationalen Langstrecken.
                  </p>
                  <div className="specs">
                    <div>
                      <b>8.500 km</b>
                      <span>Reichweite</span>
                    </div>
                    <div>
                      <b>37</b>
                      <span>Kapazität</span>
                    </div>
                  </div>
                </div>
                <div className="profile-list">
                  <ul>
                    <li>Internationale Behördenmissionen</li>
                    <li>Rückführungsmissionen</li>
                    <li>Langstreckeneinsätze</li>
                    <li>Komplexe internationale Operationen</li>
                  </ul>
                </div>
              </div>
              <div className="fcard">
                <div>
                  <div className="tag">Rapid Response Platform</div>
                  <h3>Bombardier Challenger 604</h3>
                  <p>
                    Kompakte, wirtschaftliche Kabinenkonfiguration für kurzfristige Behördeneinsätze
                    — auch auf kleineren Flughäfen einsetzbar.
                  </p>
                  <div className="specs">
                    <div>
                      <b>7.000 km</b>
                      <span>Reichweite</span>
                    </div>
                    <div>
                      <b>12</b>
                      <span>Kapazität</span>
                    </div>
                  </div>
                </div>
                <div className="profile-list">
                  <ul>
                    <li>Kurzfristige Behördeneinsätze</li>
                    <li>Schnelle Verlegung kleiner Einsatzteams</li>
                    <li>Flexible Sondermissionen</li>
                    <li>Nutzung kleinerer Flughäfen möglich</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="fleet-future">
              <div className="l">
                <span>In Evaluierung — Q4 2027</span>Airbus ACH175
              </div>
              <div className="r">
                Geplante Ergänzung der Flotte für regionale Kurzstreckeneinsätze, unabhängig von der
                Flughafeninfrastruktur.
              </div>
            </div>
          </div>
        </section>

        {/* NETZWERK */}
        <section id="netzwerk">
          <div className="wrap">
            <div className="section-head">
              <div className="section-label">Global Operations Network</div>
              <h2>Internationale Präsenz für weltweite Behördenmissionen</h2>
              <p>
                Zentrale Einsatzsteuerung aus Luxemburg kombiniert mit regionalen Stützpunkten für
                kurze Reaktionszeiten.
              </p>
            </div>
            <div className="network-grid">
              <div className="map-box">
                <svg viewBox="0 0 400 288" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M20 0H0V20"
                        fill="none"
                        stroke="rgba(185,143,79,0.08)"
                        stroke-width="1"
                      />
                    </pattern>
                    <marker id="dot" markerWidth="8" markerHeight="8" refX="4" refY="4">
                      <circle cx="4" cy="4" r="3" fill="#d4ac6e" />
                    </marker>
                  </defs>
                  <rect width="400" height="288" fill="url(#grid)" />
                  <path
                    d="M120 90 L170 170"
                    stroke="#b98f4f"
                    stroke-width="1.2"
                    stroke-dasharray="4 4"
                    fill="none"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="60"
                      to="0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path
                    d="M170 170 L300 150"
                    stroke="#b98f4f"
                    stroke-width="1.2"
                    stroke-dasharray="4 4"
                    fill="none"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="60"
                      to="0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <circle cx="120" cy="90" r="5" fill="#d4ac6e" />
                  <text
                    x="132"
                    y="86"
                    fill="#f2efe6"
                    font-family="Oswald,sans-serif"
                    font-size="11"
                    letter-spacing="1"
                  >
                    LUX
                  </text>
                  <circle cx="170" cy="170" r="5" fill="#d4ac6e" />
                  <text
                    x="182"
                    y="166"
                    fill="#f2efe6"
                    font-family="Oswald,sans-serif"
                    font-size="11"
                    letter-spacing="1"
                  >
                    TBJ
                  </text>
                  <circle cx="300" cy="150" r="5" fill="#d4ac6e" />
                  <text
                    x="312"
                    y="146"
                    fill="#f2efe6"
                    font-family="Oswald,sans-serif"
                    font-size="11"
                    letter-spacing="1"
                  >
                    TMJ
                  </text>
                </svg>
              </div>
              <div>
                <p>
                  Die Kombination aus zentraler Einsatzsteuerung und regionalen Stützpunkten
                  ermöglicht eine flexible Durchführung von Behörden-, Rückführungs- und
                  Sondermissionen weltweit.
                </p>
                <div className="net-list">
                  <div className="net-item">
                    <b>LUX — Luxemburg</b>
                    <span>Headquarters, Missionsplanung, Compliance</span>
                  </div>
                  <div className="net-item">
                    <b>TBJ — Tunesien</b>
                    <span>J.A.S.S. Africa Division, Rückführungsmissionen</span>
                  </div>
                  <div className="net-item">
                    <b>TMJ — Usbekistan</b>
                    <span>J.A.S.S. Asia Division, Drehscheibe Zentralasien</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNER */}
        <section className="partners" id="partner">
          <div className="wrap">
            <div className="section-head">
              <div className="section-label">Partnerbehörden</div>
              <h2>Ausgerichtet auf nationale und internationale Behörden</h2>
              <p>
                Innen- und Justizministerien, Polizei- und Grenzschutzbehörden, Strafverfolgungs-
                und Migrationsbehörden sowie europäische und internationale Organisationen.
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
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt">
          <div className="wrap">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="section-label">Kontakt</div>
                <h2>Mission anfragen</h2>
                <p>
                  Für Behörden, Ministerien und internationale Organisationen — J.A.S.S. koordiniert
                  Ihre Anfrage vertraulich und mit kurzer Reaktionszeit.
                </p>
                <div className="rows">
                  <div className="row">
                    <span>Hauptsitz</span>
                    <span>Luxemburg</span>
                  </div>
                  <div className="row">
                    <span>Divisionen</span>
                    <span>Africa (TBJ) · Asia (TMJ)</span>
                  </div>
                  <div className="row">
                    <span>Erreichbarkeit</span>
                    <span>24/7 Einsatzkoordination</span>
                  </div>
                </div>
              </div>
              <form>
                <div className="field">
                  <label htmlFor="org">Behörde / Organisation</label>
                  <input id="org" type="text" placeholder="z. B. Bundespolizei" required />
                </div>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="mail">E-Mail</label>
                  <input id="mail" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="msg">Anliegen</label>
                  <textarea
                    id="msg"
                    placeholder="Kurze Beschreibung der Mission oder Anfrage"
                  ></textarea>
                </div>
                <button className="submit-btn" type="submit">
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="wrap footer-inner">
            <p>© 2026 Justice Aeronautical Special Services — J.A.S.S.</p>
            <p>Integrated Government Air Operations</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
