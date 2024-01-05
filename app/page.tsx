import Image from "next/image";
import {
  Hero,
  Nav,
  Services,
  About,
  Testimonials,
  ContactUs,
  Footer,
} from "../components";
export default function Home() {
  const mainLogo = "./syncthify-main-logo.jpg";
  return (
    <main className="text-center text-indigo-600">
      Syncthify Printing Solutions
      <img src={mainLogo}></img>
      <Hero />
      <Nav />
      <Services />
      <About />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
}
