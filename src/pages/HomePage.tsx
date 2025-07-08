import Hero from "../components/Hero";
import ServicesSection from "../components/Services";
import OurApproachSection from "../components/features";
import FeaturedProjectsSection from "../components/Projects";
import CallToActionSection from "../components/Cta";


function HomePage() {
    return ( 
        <>
        <Hero />
        <ServicesSection />
        <OurApproachSection />
        <FeaturedProjectsSection />
        <CallToActionSection />
        </>
     );
}

export default HomePage;