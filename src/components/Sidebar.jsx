import Button from "./Button.jsx";

export default function Sidebar({
  projects,
  handleAddProject,
  onSelectProject,
}) {
  return (
    <div className="bg-black p-8 w-[32%] rounded-tr-[3rem]">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-white text-4xl ">Your Projects</h2>
        </div>
        <Button onClick={handleAddProject}>+ Add Project</Button>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="text-white text-xl capitalize bg-none w-fit p-1.5 pl-3 pr-3 rounded-sm hover:bg-white hover:text-black active:bg-gray-300"
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
