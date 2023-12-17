import React from "react";
import AddButton from "./AddButton";
import Search from "./Search";
import ToggleButton from "./ToggleButton";

export default function Topbar({ onSearch, onChangeTheme }) {
  return (
    <div className="h-16 w-5/6 px-6 border-b-2 flex items-center justify-between">
      <div className="flex space-x-4">
        <AddButton />
        <Search onSearch={onSearch} />
      </div>
      <div>
        <ToggleButton onChangeTheme={onChangeTheme} />
      </div>
    </div>
  );
}
