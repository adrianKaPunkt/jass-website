const Network = () => {
  return (
    <section id="netzwerk">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">Global Operations Network</div>
          <h2>Internationale Präsenz für weltweite Behördenmissionen</h2>
          <p>
            Zentrale Einsatzsteuerung aus Luxemburg kombiniert mit regionalen Stützpunkten für kurze
            Reaktionszeiten.
          </p>
        </div>
        <div className="network-grid">
          <div className="map-box">
            <svg viewBox="0 0 400 288" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0H0V20" fill="none" stroke="rgba(185,143,79,0.08)" strokeWidth="1" />
                </pattern>
                <marker id="dot" markerWidth="8" markerHeight="8" refX="4" refY="4">
                  <circle cx="4" cy="4" r="3" fill="#d4ac6e" />
                </marker>
              </defs>
              <rect width="400" height="288" fill="url(#grid)" />
              <path
                d="M120 90 L170 170"
                stroke="#b98f4f"
                strokeWidth="1.2"
                strokeDasharray="4 4"
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
                strokeWidth="1.2"
                strokeDasharray="4 4"
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
                fontFamily="Oswald,sans-serif"
                fontSize="11"
                letterSpacing="1"
              >
                LUX
              </text>
              <circle cx="170" cy="170" r="5" fill="#d4ac6e" />
              <text
                x="182"
                y="166"
                fill="#f2efe6"
                fontFamily="Oswald,sans-serif"
                fontSize="11"
                letterSpacing="1"
              >
                TBJ
              </text>
              <circle cx="300" cy="150" r="5" fill="#d4ac6e" />
              <text
                x="312"
                y="146"
                fill="#f2efe6"
                fontFamily="Oswald,sans-serif"
                fontSize="11"
                letterSpacing="1"
              >
                TMJ
              </text>
            </svg>
          </div>
          <div>
            <p>
              Die Kombination aus zentraler Einsatzsteuerung und regionalen Stützpunkten ermöglicht
              eine flexible Durchführung von Behörden-, Rückführungs- und Sondermissionen weltweit.
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
  );
};

export default Network;
