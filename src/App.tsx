import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/Services";
import OurApproachSection from "./components/features";
import FeaturedProjectsSection from "./components/Projects";
import LatestBlogPostsSection from "./components/Blog"; 
import CallToActionSection from "./components/Cta"; 
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <OurApproachSection />
      <FeaturedProjectsSection />
      <LatestBlogPostsSection />
      <CallToActionSection />
      <Footer />
      {/* Add any additional sections or components here */}
    </>
  );
}

export default App;
