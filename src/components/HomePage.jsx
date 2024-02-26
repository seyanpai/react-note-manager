import Logo from "../assets/noteslogo.png";

export default function HomePage({ onAdd }) {
  return (
    <div className="flex flex-col gap-5 p-10 w-3/4">
      <img className="mx-auto h-40 w-40 object-contain" src={Logo} alt="" />
      <h2 className=" text-center font-bold text-xl">No Selected Notes</h2>
      <p className="text-center text-sm text-stone-400">Select a note or get started with a new one.</p>
      <button
        onClick={onAdd}
        className="font-semibold text-stone-200 w-1/2 mx-auto bg-stone-700 p-1 rounded-md hover:bg-stone-500 hover:text-stone-900"
      >
        Add Note
      </button>
    </div>
  );
}
