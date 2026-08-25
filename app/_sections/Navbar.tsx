const Navbar = () => {
  return (
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
  );
};

export default Navbar;
