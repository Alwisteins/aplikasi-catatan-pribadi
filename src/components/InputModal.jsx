import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NoteInput from "./NoteInput";
import CollectionInput from './CollectionInput'

const style = {
  position: "absolute",
  borderRadius: "10px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InputModal({ isOpen, handleClose, addNote, addCollection, childComponent: ChildComponent }) {
  const noteIsOpen = (state) => state;
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ChildComponent addNote={addNote} addCollection={addCollection}  />
        </Box>
      </Modal>
    </div>
  );
}
