import React from "react";

function NoteHeader({ onSearchHandler }) {
  return (
    <div className="note-app__header">
      <h1>Zettelkasten-notes</h1>
      <input
        type="text"
        placeholder="Cari catatan disini..."
        onChange={(event) => onSearchHandler(event.target.value)}
      />
    </div>
  );
}

export default NoteHeader;
