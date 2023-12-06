import React from "react";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";
import { getInitialData } from "./utils/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      isSearch: false,
      filteredNotes: [],
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onSearchHandler(query) {
    const { notes } = this.state;

    if (!query) return this.setState({ isSearch: false, filteredNotes: [] });
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredNotes, isSearch: true });
  }

  onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.setState((previousNotes) => {
      return {
        notes: [...previousNotes.notes, newNote],
        filteredNotes: [], //ini nanti coba hapus
        isSearch: false, //sama ini
      };
    });
  }

  onDeleteHandler(id) {
    const { notes } = this.state;
    const newNotes = notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  onArchiveHandler(id) {
    const { notes } = this.state;
    const note = notes.find((note) => note.id === id);
    note.archived = !note.archived;
    this.setState({ notes });
  }

  render() {
    const { isSearch, filteredNotes, notes } = this.state;
    const noteToRender = isSearch ? filteredNotes : notes;

    return (
      <div>
        <NoteHeader onSearch={this.onSearchHandler} />
        <NoteBody
          addNote={this.onAddNoteHandler}
          notes={noteToRender}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default App;
