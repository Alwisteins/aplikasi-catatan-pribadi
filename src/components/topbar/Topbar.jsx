import React from "react";
import AddButton from "./AddButton";
import Search from "./Search";
import ToggleButton from "./ToggleButton";

export default function Topbar({ onSearch }) {
  return (
    <div className="h-16 w-5/6 px-6 border-b-2 flex items-center">
      <div className="flex space-x-4">
        <AddButton />
        <Search />
      </div>
      <div>
        <ToggleButton />
      </div>
    </div>
  );
}
