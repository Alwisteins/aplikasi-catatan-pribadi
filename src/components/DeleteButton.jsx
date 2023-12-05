import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-item__delete-button" onDelete={id}>
      delete
    </button>
  );
}

export default DeleteButton;