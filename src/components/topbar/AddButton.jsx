import React from "react";
import { Button } from "@mui/material";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export default function AddButton({ handleNoteModalOpen }) {
  return (
    <Button
      variant="contained"
      size="medium"
      sx={{
        backgroundColor: "#A855F7",
        fontWeight: "600",
        borderRadius: "10px",
        fontSize: "14px",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#9333ea",
          boxShadow: "none",
        },
      }}
      onClick={handleNoteModalOpen}
    >
      <NoteAddIcon style={{ paddingRight: "6px" }} /> Add Note
    </Button>
  );
}
