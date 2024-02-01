import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RootLayout from "./layout/root";
import InputModal from "./components/InputModal";
import NoteInput from "./components/NoteInput";
import CollectionInput from "./components/CollectionInput";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";
import { getInitialCollections, getInitialNotes } from "./utils/index";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App() {
  //notes state
  const [notes, setNotes] = useState(getInitialNotes);
  const [isSearch, setIsSearch] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  //theme button state
  const [isDark, setIsDark] = useState(false);
  //collections state
  const [collections, setCollections] = useState(getInitialCollections);
  const [name, setName] = useState("collection name");
  const [length, setLength] = useState(0);
  const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);

  const onSearchHandler = (query) => {
    const filteredNotes = query
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];
    setIsSearch(!!query);
    setFilteredNotes(filteredNotes);
  };

  const onAddNoteHandler = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes((notes) => [...notes, newNote]);
    console.log(notes);
  };

  const onDeleteHandler = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const onArchiveHandler = (id) => {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const onAddCollectionHandler = (name) => {
    const newCollection = {
      name,
      length,
    };

    setCollections((collections) => [...collections, newCollection]);
  };

  const handleChangeTheme = (isDark) => setIsDark(isDark);
  //handler note modal state
  const handleNoteModalOpen = () => setIsNoteModalOpen(true);
  const handleNoteModalClose = () => setIsNoteModalOpen(false);
  //handler collection modal state
  const handleCollectionModalOpen = () => setIsCollectionModalOpen(true);
  const handleCollectionModalClose = () => setIsCollectionModalOpen(false);

  const noteToRender = isSearch ? filteredNotes : notes;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <RootLayout
        onChangeTheme={handleChangeTheme}
        handleNoteModalOpen={handleNoteModalOpen}
        handleCollectionModalOpen={handleCollectionModalOpen}
        collectionList={collections}
        addCollection={onAddCollectionHandler}
      >
        <div>
          {/* <NoteHeader onSearch={onSearchHandler} /> */}
          <InputModal
            isOpen={isNoteModalOpen}
            handleClose={handleNoteModalClose}
            addNote={onAddNoteHandler}
            childComponent={NoteInput}
          />
          <InputModal
            isOpen={isCollectionModalOpen}
            handleClose={handleCollectionModalClose}
            addCollection={onAddCollectionHandler}
            childComponent={CollectionInput}
          />
        </div>
      </RootLayout>
    </ThemeProvider>
  );
}
