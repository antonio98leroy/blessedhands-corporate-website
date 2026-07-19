import CallToAction from "../components/CallToAction";
import EquipmentSection from "../components/EquipmentSection";
import Hero from "../components/Hero";
import NewsSection from "../components/NewsSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import Statistics from "../components/Statistics";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <EquipmentSection />
      <NewsSection />
      <CallToAction />
    </>
  );
}

export default Home;