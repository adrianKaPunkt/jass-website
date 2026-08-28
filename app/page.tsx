import Navbar from "./_sections/Navbar";
import Hero from "./_sections/Hero";
import Fleet from "./_sections/Fleet";
import Services from "./_sections/Services";
import Network from "./_sections/Network";
import Partner from "./_sections/Partner";
import Contact from "./_sections/Contact";
import Footer from "./_sections/Footer";
import About from "./_sections/About";
import { Globe } from "@/components/globe/Globe";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-white font-inter dark:bg-black">
      <Globe />
      <main className="relative flex flex-1 w-full flex-col justify-between py-10 bg-transparent">
        <Navbar />
        <Hero />
        <About />
        {/* <Services /> */}
        <Network />
        <Fleet />
        <Partner />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
