import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewNote({ onCancel, onSave }) {
  const modal = useRef();

  const inTitle = useRef();
  const inNote = useRef();
  const inDate = useRef();

  function handleSave() {
    const title = inTitle.current.value;
    const note = inNote.current.value;
    const date = inDate.current.value;

    if (title.trim() === "" || note.trim() === "" || date.trim() === "") {
      //show error modal => create new component "Modal"
      modal.current.open();
      return; //para di na sya mag onSave pag error
    }

    onSave({
      title: title,
      note: note,
      date: date,
      id: Math.random(),
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-red-700 font-semibold">Invalid</h2>
        <p className="text-sm tracking-wider">Please check your input.</p>
      </Modal>
      <div className="p-10 flex flex-col gap-5 w-3/4">
        <div>
          <Input ref={inTitle} label="Title" />
          <Input ref={inNote} textarea label="Note" />
          <Input ref={inDate} type="date" label="Date" />
        </div>
        <menu className="flex gap-5 justify-end">
          <button onClick={onCancel} className="hover:text-red-500">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-stone-500 font-bold text-stone-200 p-2 rounded-md hover:bg-stone-800"
          >
            Save
          </button>
        </menu>
      </div>
    </>
  );
}
