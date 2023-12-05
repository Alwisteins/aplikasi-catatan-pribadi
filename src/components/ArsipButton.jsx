import React from "react";

function ArsipButton({ id, onArsip }) {
  return (
    <button className="note-item__arsip-button" onArsip={id}>
      arsip
    </button>
  );
}

export default ArsipButton;