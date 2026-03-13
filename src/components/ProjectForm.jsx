import { useRef } from "react";

export default function ProjectForm({ onSave, onCancel }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const project = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      dueDate: dateRef.current.value,
      id: Date.now(),
    };
    onSave(project);
  }

  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <div className="flex justify-end w-full gap-5 pt-3">
        <button type="button" className="text-extrabold" onClick={onCancel}>
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#322E2B] text-white rounded-md pl-5 pr-5 p-2"
        >
          Save
        </button>
      </div>

      <div className="label-div">
        <label htmlFor="title" className="label">
          TITLE
        </label>
        <input
          type="text"
          placeholder="Project Name"
          id="title"
          className="input"
          ref={titleRef}
        />
      </div>

      <div className="label-div">
        <label htmlFor="description" className="label">
          DESCRIPTION
        </label>
        <textarea
          type="text"
          placeholder="Project Description"
          id="description"
          className="input"
          ref={descRef}
        />
      </div>

      <div className="label-div">
        <label htmlFor="date" className="label">
          DUE DATE
        </label>
        <input
          type="date"
          placeholder="Project Date"
          id="date"
          className="input"
          ref={dateRef}
        />
      </div>
    </form>
  );
}
