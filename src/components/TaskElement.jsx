export default function TaskElement({ task, onClear }) {
  return (
    <div className="flex w-full justify-between">
      <p className="capitalize">{task.task}</p>
      <button onClick={() => onClear(task.id)}>Clear</button>
    </div>
  );
}
