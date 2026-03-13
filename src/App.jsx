import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjects";
import ProjectForm from "./components/ProjectForm";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [selectedProject, setSelectedProject] = useState();
  const [currentView, setCurrentView] = useState("blank");
  const [prevView, setPrevView] = useState("blank");
  const [projects, setProjects] = useState([
    {
      title: "project one",
      id: 1,
      desc: "this is a description",
      dueDate: "2026-2-12",
    },
    {
      title: "project two",
      id: 2,
      desc: "this is a description",
      dueDate: "2026-2-12",
    },
    {
      title: "project three",
      id: 3,
      desc: "this is a description",
      dueDate: "2026-2-12",
    },
  ]);

  const handleSelectProject = (id) => {
    setSelectedProject(id);
    setCurrentView("project");
  };

  const handleAddProject = () => {
    setPrevView(currentView);
    setCurrentView("form");
  };

  const handleSaveProject = (project) => {
    setProjects((prev) => [...prev, project]);
    handleSelectProject(project.id);
  };

  const handleCancelForm = () => {
    setCurrentView(prevView);
  };

  const handleDeleteProject = (id) => {
    setProjects((prev) => {
      prev.filter((project) => project.id !== id);
    });
    setCurrentView("blank");
  };

  const renderView = () => {
    switch (currentView) {
      case "blank":
        return <NoProjectSelected handleAdd={handleAddProject} />;
      case "project":
        return (
          <ProjectPage
            project={projects.find((project) => project.id === selectedProject)}
          />
        );
      case "form":
        return (
          <ProjectForm onSave={handleSaveProject} onCancel={handleCancelForm} />
        );
      default:
        return <NoProjectSelected handleAdd={handleAddProject} />;
    }
  };

  return (
    <div className="flex flex-row h-full">
      <Sidebar
        projects={projects}
        handleAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
      />
      {renderView()}
    </div>
  );
}

export default App;
