import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div>
      {notes.length === 0 ? (
        <div className="notes-list__empty-message">
          Belum ada catatan untuk ditampilkan.
        </div>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NoteList;
