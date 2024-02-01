import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function NoteInput({ addNote }) {
  const [characterLeft, setCharacterLeft] = useState(50);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitEventHandler = (event) => {
    event.preventDefault();

    //jika state title atau body masih kosong
    if (!title || !body) return;

    //jika state title dan body telah terisi
    addNote({ title, body });
    setTitle("");
    setBody("");
    setCharacterLeft(50);
  };

  const onChangeTitleHandler = (event) => {
    //jika title melebihi character limit
    const characterLimit = 50;
    if (event.target.value.length > characterLimit) return;

    //penggantian title
    setTitle(event.target.value);
    setCharacterLeft(characterLimit - event.target.value.length);
  };

  const onChangeBodyHandler = (event) => {
    setBody(event.target.value);
  };

  return (
    <form className="space-y-3" onSubmit={onSubmitEventHandler}>
      <Typography
        variant="h4"
        style={{ fontWeight: "700", textAlign: "center", fontFamily: "Inter" }}
      >
        Create Note
      </Typography>
      <Typography variant="body2">Character Left: {characterLeft}</Typography>
      <TextField
        id="outlined-basic"
        label="Tulis judul catatan disini..."
        variant="outlined"
        value={title}
        onChange={onChangeTitleHandler}
        className="w-full"
      />
      <TextField
        id="outlined-multiline-static"
        label="Tulis isi catatan disini..."
        multiline
        rows={4}
        value={body}
        onChange={onChangeBodyHandler}
        className="w-full"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#A855F7",
          fontWeight: "600",
          borderRadius: "10px",
          fontSize: "14px",
          marginLeft: 15,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#9333ea",
            boxShadow: "none",
          },
        }}
      >
        Create <AddCircleIcon style={{ paddingLeft: "6px" }} />
      </Button>
    </form>
  );
}
