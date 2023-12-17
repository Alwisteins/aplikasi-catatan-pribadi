import React from "react";
import AddButton from "./AddButton";
import Search from "./Search";
import LoginButton from "./LoginButton";
import ToggleButton from "./ToggleButton";

export default function Topbar({ onSearch, onChangeTheme }) {
  return (
    <div className="h-16 w-5/6 px-6 border-b-2 flex items-center justify-between">
      <div className="flex space-x-4 items-center">
        <AddButton />
        <Search onSearch={onSearch} />
      </div>
      <div className="flex space-x-4 items-center">
        <LoginButton />
        <ToggleButton onChangeTheme={onChangeTheme} />
      </div>
    </div>
  );
}

