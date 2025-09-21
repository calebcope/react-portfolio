import Sidebar from "./components/Sidebar";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    // Main container that fills the viewport height
    <div className="flex h-screen">
      {/* Left Sidebar - Static */}
      <div className="flex flex-1 justify-center items-start p-8">
        <Sidebar />
      </div>

      {/* Right Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-3xl"> {/* Constrain content width for readability */}
          <About />
          <ExperienceSection />
          <ProjectsSection />
          {/* Add more content here if you want to test the scrolling */}
        </div>
      </div>
    </div>
  );
}

export default App;