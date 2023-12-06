import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItem({
  note,
  onDelete,
  onArchive,
  isArchived,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h1 className="note-item__title">{note.title}</h1>
        <p className=".note-item__date">{note.createdAt}</p>
        <p className="note-item__body">{note.body}</p>
        <div className="note-item__action">
          <DeleteButton id={note.id} onDelete={onDelete} isArchived={isArchived} />
          <ArchiveButton id={note.id} onArchive={onArchive} />
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
