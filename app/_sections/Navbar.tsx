import { Container } from "@/components/Container";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 h-28 z-50 w-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <Container>
        <nav className="flex items-center justify-between py-4 text-white">
          <a href="#">
            <div
              aria-label="JASS Logo"
              className="h-8 w-49 bg-white [mask:url('/images/jass.svg')_center/contain_no-repeat]"
            />
            <div className="text-[9px] mt-2 uppercase">Justice Aeronautical Special Services</div>
          </a>
          <div className="flex gap-8 text-sm">
            <a href="#profil">Profil</a>
            <a href="#leistungen">Leistungen</a>
            <a href="#flotte">Flotte</a>
            <a href="#netzwerk">Netzwerk</a>
            <a href="#partner">Partner</a>
          </div>
          <a className="text-sm" href="#kontakt">
            Kontakt
          </a>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
