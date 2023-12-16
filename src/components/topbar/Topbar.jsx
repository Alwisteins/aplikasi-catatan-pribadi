import React from "react";
import { Button } from "@mui/material";
import ToggleButton from "./ToggleButton";
import Search from './Search'

export default function Topbar({ onSearch }) {
  return (
    <div className="h-16 w-5/6 px-6 border-b-2 flex items-center">
      <div className="flex space-x-4">
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#A855F7",
            fontWeight: "700",
            borderRadius: "10px",
            fontSize: "14px",
          }}
        >
          + Add Note
        </Button> 
        <Search />
      </div>
      <div>
        <ToggleButton />
      </div>
    </div>
  );
}
