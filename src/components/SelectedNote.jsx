import Task from "./Task";

export default function SelectedNote({ tasks, note, onDelete, onAddTask, onDeleteTask }) {
  //   const formattedDate = new Date(note.date).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   });

  return (
    <div className="w-3/4 p-10">
      <header className="pb-4 mb-5 border-b-2 border-stone-300">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{note.title}</h1>
          <button
            onClick={onDelete}
            className="bg-stone-900 text-stone-200 rounded-md py-2 px-3 text-sm font-semibold hover:text-stone-900 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
        <p className="mt-10 mb-5 text-sm text-stone-600">{note.date}</p>
        <p className="text-stone-800 font-medium whitespace-pre-wrap">
          {note.note}
        </p>
      </header>
      <Task tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
