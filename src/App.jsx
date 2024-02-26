import { useState } from "react";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import NewNote from "./components/NewNote";
import SelectedNote from "./components/SelectedNote";

export default function App() {
  const [state, setState] = useState({
    selected: undefined,
    notes: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        task: text,
        id: taskId,
        noteId: prevState.selected,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectNote(id) {
    setState((prevState) => {
      return {
        ...prevState,
        selected: id, //so either undefined, null, or id yung ilalabas sa page
      };
    });
  }

  function handleAdd() {
    setState((prevState) => {
      return {
        ...prevState,
        selected: null,
      };
    });
  }

  function handleCancel() {
    setState((prevState) => {
      return {
        ...prevState,
        selected: undefined,
      };
    });
  }

  function handleSave(note) {
    // console.log(note);
    setState((prevState) => {
      const newNote = {
        ...note,
      };

      return {
        ...prevState,
        selected: undefined,
        notes: [...prevState.notes, newNote],
      };
    });
  }

  function handleDelete() {
    setState((prevState) => {
      return {
        ...prevState,
        selected: undefined,
        notes: prevState.notes.filter((note) => note.id !== prevState.selected),
        //filter out / remove mo yung nagssatisfy ng note.id !== prevState.selected
      };
    });
  }

  const selectedNote = state.notes.find((note) => note.id === state.selected);

  let display = (
    <SelectedNote
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDelete}
      note={selectedNote}
      tasks={state.tasks}
    />
  );

  if (state.selected === undefined) {
    display = <HomePage onAdd={handleAdd} />;
  } else if (state.selected === null) {
    display = <NewNote onSave={handleSave} onCancel={handleCancel} />;
  }

  return (
    <main className="flex">
      <SideBar
        onSelectNote={handleSelectNote}
        onAdd={handleAdd}
        note={state.notes}
        selectedId={state.selected}
      />
      {display}
    </main>
  );
}
