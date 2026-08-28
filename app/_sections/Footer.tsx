import { Container } from "@/components/Container";

const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-white py-8 dark:border-white/10 dark:bg-black">
      <Container className="flex justify-center">
        <p className="text-center text-xs text-slate-500">
          © 2026 Justice Aeronautical Special Services — J.A.S.S.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
