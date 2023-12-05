import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItem({
  id,
  onDelete,
  onArchive,
  isArchived,
  title,
  createdAt,
  body,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h1 className="note-item__title">{title}</h1>
        <p className=".note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
        <div className="note-item__action">
          <DeleteButton id={id} onDelete={onDelete} isArchived={isArchived} />
          <ArchiveButton id={id} onArchive={onArchive} />
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
