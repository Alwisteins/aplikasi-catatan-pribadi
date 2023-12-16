import React from "react";
import { Button } from "@mui/material";
import ToggleButton from "./ToggleButton";

export default function Topbar({ onSearch }) {
  return (
    <div className="h-16 w-5/6 px-6 border-b-2 flex items-center">
      <div className="flex space-x-4">
        <Button variant='contained' size="large" sx={{ backgroundColor: '#A855F7', fontWeight: '800', borderRadius: '10px', fontSize: '14px' }}>+ Add Note</Button>
        <input
          type="text"
          placeholder="Search note here..."
          onChange={(event) => onSearch(event.target.value)}
          className='bg-[#D9D9D9] text-xs placeholder:text-black placeholder:font-medium w-60 rounded-lg px-2'
        />
      </div>
      <div>
        <ToggleButton />
      </div>
    </div>
  );
}
