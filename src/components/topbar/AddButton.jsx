import React from "react";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function AddButton() {
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
    >
      <AddCircleIcon style={{ paddingRight: "6px" }} /> Add Note
    </Button>
  );
}
