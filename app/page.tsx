import Image from "next/image";
import Navbar from "./_sections/Navbar";
import Hero from "./_sections/Hero";
import { Earth } from "@/components/earth/Earth";
import Fleet from "./_sections/Fleet";
import Services from "./_sections/Services";
import Network from "./_sections/Network";
import Partner from "./_sections/Partner";
import Contact from "./_sections/Contact";
import Footer from "./_sections/Footer";
import About from "./_sections/About";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-inter dark:bg-black">
      <Earth />
      <main className="relative z-10 flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Network />
        <Partner />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
