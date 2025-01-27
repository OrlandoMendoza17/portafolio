
import Hero from "@/components/pages/home/Hero";
import DarkMode from "@/components/widgets/DarkMode";
import Header from "@/components/widgets/Header";
import WorkExperience from "@/components/pages/home/WorkExperience";
import Projects from "@/components/pages/home/Projects";
import AboutMe from "@/components/pages/home/AboutMe";
import Footer from "@/components/widgets/Footer";
import Testimonials from "@/components/pages/home/Testimonials";

const Home = () => {
  return (
    <DarkMode>
      <Header />
      <main id="main" className="px-4">
        <Hero />
        <WorkExperience />
        <Projects />
        <Testimonials />
        <AboutMe />
      </main>
      <Footer/>
    </DarkMode>
  )
}

export default Home;