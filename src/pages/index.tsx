
import Hero from "@/components/pages/Hero";
import DarkMode from "@/components/widgets/DarkMode";
import Header from "@/components/widgets/Header";
import WorkExperience from "@/components/pages/WorkExperience";
import { TbCode } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";

const Home = () => {
  return (
    <DarkMode>
      <Header />
      <main className="px-4">
        <Hero />
        <WorkExperience />
        <section>
          <h2><TbCode/> Proyectos</h2>
        </section>
        <section>
          <h2><VscAccount/> Sobre mí</h2>
        </section>
        <div className="py-10"></div>
        <div className="py-10"></div>
        <div className="py-10"></div>
      </main>
    </DarkMode>
  )
}

export default Home