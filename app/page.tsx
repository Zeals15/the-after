import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Industries = dynamic(() => import("@/components/Industries"));
const Process = dynamic(() => import("@/components/Process"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CtaBanner = dynamic(() => import("@/components/CtaBanner"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Process />
        <Portfolio />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
