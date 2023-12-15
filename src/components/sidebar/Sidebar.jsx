import React from "react";
import Collections from "./collections";

export default function Sidebar() {
  return (
    <div className="box-border w-1/4 h-screen p-6 border-r-2 border-[#D9D9D9]">
      <div className="flex items-center">
        <img src="/notes.svg" alt="logo" className="w-12" />
        <h1 className="font-bold text-3xl">ZETTELKASTEN</h1>
      </div>
      <Collections />
    </div>
  );
}
