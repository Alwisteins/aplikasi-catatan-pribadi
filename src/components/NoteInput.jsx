import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterLeft: 50,
      title: "",
      content: "",
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeContentHandler = this.onChangeContentHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, content } = this.state;
    if (!title || !content) return;

    this.props.addNote({ title, content });
    this.setState({ title: "", content: "", characterLeft: 50 });
  }

  onChangeTitleHandler(event) {
    const characterLimit = 50;
    if (event.target.value.length > characterLimit) return;

    this.setState(() => {
      return {
        title: event.target.value,
        characterLeft: characterLimit - event.target.value.length,
      };
    });
  }

  onChangeContentHandler(event) {
    this.setState(() => {
      return { content: event.target.value };
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2 className="form-title">Tambah catatan</h2>
        <span className="note-input__title__char-limit">
          Karakter Tersisa: {this.state.characterLeft}
        </span>
        <input
          className="note-input__title"
          type="text"
          placeholder="Tulis judul catatan disini..."
          value={this.state.title}
          onChange={this.onChangeTitleHandler}
        />
        <textarea
          className="note-input__body"
          placeholder="Tulis isi catatan disini..."
          value={this.state.content}
          onChange={this.onChangeContentHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;
