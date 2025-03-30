
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import PricingPlans from "./components/Pricing";
import CoverageArea from "./components/CoverageArea";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/Contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <PricingPlans/>
      <CoverageArea/>
      <Testimonials />
      <ContactForm/>
      <Footer/>
    </>
  );
}
