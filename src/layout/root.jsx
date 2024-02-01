import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

export default function RootLayout({ onChangeTheme, handleNoteModalOpen, handleCollectionModalOpen, collectionList, children }) {
  return (
    <div className="flex">
      <Sidebar collectionList={collectionList} handleCollectionModalOpen={handleCollectionModalOpen} />
      <Topbar onChangeTheme={onChangeTheme} handleNoteModalOpen={handleNoteModalOpen} />
      <div className="p-5">{children}</div>
    </div>
  );
};