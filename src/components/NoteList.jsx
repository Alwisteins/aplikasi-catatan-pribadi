import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archiveNotes = notes.filter((note) => note.archived);

  const noteCategories = [
    { title: "Catatan aktif", notes: activeNotes },
    { title: "Catatan arsip", notes: archiveNotes },
  ];

  return (
    <>
      {noteCategories.map(({ title, notes }, index) => (
        <div key={index}>
          <h2>
            {title}: {notes.length} catatan
          </h2>
          <div className="notes-list">
            {notes.length === 0 ? (
              <p className="notes-list__empty-message">Tidak ada catatan.</p>
            ) : (
              notes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onDelete={onDelete}
                  onArchive={onArchive}
                />
              ))
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default NoteList;
