import { Container } from "@/components/Container";

const Contact = () => {
  return (
    <section id="kontakt">
      <Container>
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
      </Container>
    </section>
  );
};

export default Contact;
