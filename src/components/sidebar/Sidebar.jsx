import React from "react";
import Collections from "./collections";

export default function Sidebar() {
  return (
    <div className="box-border w-80 h-screen p-6 outline outline-3 outline-[#D9D9D9]">
      <div className="flex items-center">
        <img src="/notes.svg" alt="logo" className="w-12" />
        <h1 className="font-bold text-3xl">ZETTELKASTEN</h1>
      </div>
      <Collections />
    </div>
  );
}
