import Cursor from "./components/Cursor"
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="texture-overlay">
    <div className="flex flex-col md:flex-row justify-evenly md:h-screen relative z-10">
      <div className="flex-9">
        <div className="w-fit pl-5 md:pl-20 justify-self-center">
        <Sidebar />
        </div>
      </div>
      <div className="flex-10 overflow-y-auto scroll-smooth">
        <div className="max-w-2xl pt-24">
          <About />
          <ExperienceSection />
          <ProjectsSection />
        </div>
      </div>
    </div>
    </div>
  );
}


export default App;