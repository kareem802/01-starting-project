import Button from "./Button.jsx";

export default function Sidebar({
  projects,
  handleAddProject,
  onSelectProject,
  selectedProject,
}) {
  let baseClasses =
    "text-white text-xl capitalize  w-full text-left p-1.5 pl-3 pr-3 rounded-sm hover:bg-white hover:text-black active:bg-gray-300";

  return (
    <div className="bg-black p-8 w-[32%] rounded-tr-[3rem]">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-white text-4xl ">Your Projects</h2>
        </div>
        <Button onClick={handleAddProject}>+ Add Project</Button>
        <div className="flex flex-col gap-2">
          {projects.map((project) => {
            let cssClasses = baseClasses;
            return (
              <button
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className={`${baseClasses} ${project.id === selectedProject ? " bg-stone-400" : ""}`}
              >
                {project.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
