import React from "react";
import ToggleButton from "./ToggleButton";

export default function Topbar({ onSearch }) {
  return (
    <div className="h-16 w-5/6 px-6 border-b-2 flex items-center">
      <div className="flex space-x-4">
        <button className="w-[133px] h-[40px] shadow-[1px_2px_5px_2px_rgba(0,0,0,0.25)] rounded-lg font-medium">
          + Add Note
        </button>
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
