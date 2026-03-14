import emptyImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ handleAdd }) {
  return (
    <div className="flex flex-col justify-center content-center items-center gap-8 w-full max-h-[80%]">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={emptyImage} alt="No projects selected" className="w-30 " />
        <h2 className="text-[#424140] font-[6000] text-2xl">
          No Project Selected
        </h2>
      </div>
      <h5 className="text-[#96928F]">
        Select a project or get started with a new task
      </h5>
      <Button onClick={handleAdd}>Create New Project</Button>
    </div>
  );
}
