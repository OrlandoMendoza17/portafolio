
import Hero from "@/components/pages/Hero";
import DarkMode from "@/components/widgets/DarkMode";
import Header from "@/components/widgets/Header";
import WorkExperience from "@/components/pages/WorkExperience";
import Proyects from "@/components/pages/Proyects";
import AboutMe from "@/components/pages/AboutMe";
import Footer from "@/components/widgets/Footer";
import Testimonials from "@/components/pages/Testimonials";

const Home = () => {
  return (
    <DarkMode>
      <Header />
      <main id="main" className="px-4">
        <Hero />
        <WorkExperience />
        <Proyects />
        <Testimonials />
        <AboutMe />
      </main>
      <Footer/>
    </DarkMode>
  )
}

export default Home;