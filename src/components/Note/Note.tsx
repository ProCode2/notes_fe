import React, { FC, FocusEvent } from "react";
import INote from "../../interfaces/note.interface";

import "./Note.css";

type Props = {
  note: INote;
};

const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
  console.log("Note text changed");
  console.log(event.currentTarget.textContent);
};

const Note: FC<Props> = ({ note }) => {
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
