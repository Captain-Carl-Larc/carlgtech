import Hero from "../components/Hero";
import ServicesSection from "../components/Services";
import OurApproachSection from "../components/features";
import FeaturedProjectsSection from "../components/Projects";
import LatestBlogPostsSection from "../components/Blog";
import CallToActionSection from "../components/Cta";
import Footer from "../components/Footer";


function HomePage() {
    return ( 
        <>
        <Hero />
        <ServicesSection />
        <OurApproachSection />
        <FeaturedProjectsSection />
        <LatestBlogPostsSection />
        <CallToActionSection />
        <Footer />
        </>
     );
}

export default HomePage;