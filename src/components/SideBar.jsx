export default function SideBar({ onAdd, note, onSelectNote, selectedId }) {
  return (
    <aside className="shadow-black shadow-xl p-10 flex flex-col gap-5 w-1/4 bg-stone-900 text-stone-200 h-screen sticky top-0">
      <h1 className="text-xl text-center font-semibold">Your Notes</h1>
      <div>
        <button
          onClick={() => {
            onAdd();
          }}
          className="mb-5 bg-stone-700 py-1 px-2 rounded-md hover:bg-stone-500 hover:text-stone-900"
        >
          + Add Note
        </button>
      </div>
      <ul>
        {note.map((note) => {
          let listClass =
            "w-full text-left px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800";

          if (note.id === selectedId) {
            listClass += " bg-stone-800 text-stone-200";
          } else {
            listClass += " text-stone-400";
          }

          return (
            <li key={note.id}>
              <button
                onClick={() => onSelectNote(note.id)}
                className={listClass}
              >
                {note.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
