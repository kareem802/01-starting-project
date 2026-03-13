import { useState } from "react";

export default function ProjectPage({ project }) {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    // setTasks((prev) => [
    //   {
    //     ...prev,
    //     [project.id]: [
    //       ...(prev[project.id] || []),
    //       { id: Date.now(), text: task },
    //     ],
    //   },
    // ]);
  }

  return (
    <div className="wrapper">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <button className="text-extrabold">Delete</button>
      </div>
      <p className="text-[#808080]">{project.dueDate}</p>
      <p>{project.desc}</p>
      <hr />
      <h1 className="text-4xl">Tasks</h1>
      <div className="flex  w-full gap-6 items-center">
        <input className="input w-[60%]" id="task-name" />
        <label className="text-extrabold" htmlFor="task-name">
          Add task
        </label>
      </div>
      <div className="bg-[#D9D9D9] rounded-md p-4 flex flex-col gap-4 min-h-36">
        <div className="flex w-full justify-between">
          <p>Learn Advanced Concepts</p>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
}
