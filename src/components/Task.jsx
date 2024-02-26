import NewTask from "./NewTask";

export default function Task({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This note does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="flex flex-col gap-5 p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li className="flex justify-between" key={task.id}>
              <span>{task.task}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
