import Banner from "./assets/components/Banner/Banner"
import Monitoring from "./assets/components/Monitoring/Monitoring"
import NavBar from "./assets/components/NavBar/NavBar"
import Testimonials from "./assets/components/testimonials/Testimonials"
import Pricing from "./assets/components/Pricing/Pricing"
import Footer from "./assets/components/Footer/Footer"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import InformCustomer from "./assets/components/Inform/InformCustomer"
import Contact from "./assets/components/Contact/Contact"
import Faq from "./assets/components/FAQ/FAQ"
import OurValues from "./assets/components/OurValues/OurValues"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,  // Adjust as needed
      once: true,      // Animation runs only once
      offset: 100,     // Start animation 100px before reaching element
    });
  }, []);

  return (
    <>
      <div className="font-[Inter] mx-auto w-full bg-[#0b0c10] max-w-[1920px]">
        <NavBar></NavBar>
        <Banner></Banner>
        <Monitoring></Monitoring>
        {/* <Social /> */}
        <OurValues />
        <InformCustomer />
        {/* <AddMembers /> */}
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
