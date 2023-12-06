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
    <div>
      {noteCategories.map(({ title, notes }, index) => {
        <div key={index}>
          <h1>
            {title}: {notes.length} catatan
          </h1>
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
        </div>;
      })}
    </div>
  );
}

export default NoteList;
