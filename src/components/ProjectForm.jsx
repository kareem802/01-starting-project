import { useRef } from "react";
import Input from "./Input";

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

      <Input
        labelText={"title"}
        placeholder="Project Title"
        id="title"
        ref={titleRef}
        required
      />
      <Input
        labelText={"desription"}
        inputType={"textarea"}
        placeholder="Project Description"
        id="description"
        ref={descRef}
      />
      <Input
        required
        labelText={"due date"}
        id="date"
        type="date"
        ref={dateRef}
      />
    </form>
  );
}
