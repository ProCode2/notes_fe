import React, { FC, FocusEvent } from "react";
import INote from "../../interfaces/note.interface";

import "./Note.css";

type Props = {
  note: INote;
  onNoteUpdate: Function;
};

const Note: FC<Props> = ({ note, onNoteUpdate }) => {
  const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
    console.log("Note text changed");
    console.log(event.currentTarget.textContent);
    note.text = event.currentTarget.textContent || "";
    onNoteUpdate(note);
  };

  return (
    <div className="note">
      <div
        onBlur={noteTextUpdated}
        className="note-text"
        contentEditable
        suppressContentEditableWarning
      >
        {note?.text}
      </div>
      <div className="note-link">
        <a href={note?.link}>{note?.link}</a>
      </div>
    </div>
  );
};

export default Note;
