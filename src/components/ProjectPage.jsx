import { useState, useRef, useReducer } from "react";
import TaskElement from "./TaskElement";

export default function ProjectPage({ project, onDelete }) {
  const [tasks, setTasks] = useState({});
  const taskRef = useRef();

  function handleAddTask() {
    const taskText = taskRef.current.value;
    setTasks((prev) => {
      return {
        ...prev,
        [project.id]: [
          ...(prev[project.id] || []),
          { id: Date.now(), task: taskText },
        ],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setTasks((prev) => {
      return {
        ...prev,
        [project.id]: [
          ...prev[project.id].filter((task) => task.id !== taskId),
        ],
      };
    });
  }

  return (
    <div className="wrapper">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-bold capitalize">{project.title}</h1>
        <button className="text-extrabold" onClick={() => onDelete(project.id)}>
          Delete
        </button>
      </div>
      <p className="text-[#808080]">{project.dueDate}</p>
      <p>{project.desc}</p>
      <hr />
      <h1 className="text-4xl">Tasks</h1>
      <div className="flex  w-full gap-6 items-center">
        <input className="input w-[60%]" id="task-name" ref={taskRef} />
        <button onClick={handleAddTask} className="text-extrabold">
          Add task
        </button>
      </div>
      <div className="bg-[#D9D9D9] rounded-md p-4 flex flex-col gap-4 min-h-36">
        {tasks[project.id] &&
          tasks[project.id].map((task) => {
            return (
              <TaskElement
                task={task}
                key={task.id}
                onClear={handleDeleteTask}
              />
            );
          })}
      </div>
    </div>
  );
}
