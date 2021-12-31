import { useEffect, useState } from "react";
import "./App.css";
import DUMMY_NOTES from "./DUMMY_NOTES";
import INote from "./interfaces/note.interface";
import Note from "./components/Note/Note";

function App() {
  const [notelist, setList] = useState<INote[]>([]);

  useEffect(() => {
    setList(DUMMY_NOTES);
  }, []);

  const onNoteUpdate = (updatedNote: INote) => {
    const updatedList = notelist.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setList(updatedList);
  };
  return (
    <div className="App">
      <div className="note-list">
        {notelist.map((note) => (
          <Note note={note} onNoteUpdate={onNoteUpdate} key={note?.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
