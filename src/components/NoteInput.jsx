import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterLeft: 50,
      title: "",
      body: "",
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    if (!title || !body) return;

    this.props.addNote({ title, body });
    this.setState({ title: "", body: "", characterLeft: 50 });
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

  onChangeBodyHandler(event) {
    this.setState(() => {
      return { body: event.target.value };
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
          value={this.state.body}
          onChange={this.onChangeBodyHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;
