import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function CollectionInput({ isOpen, addCollection }) {
  const [name, setName] = useState("");
  const [characterLeft, setCharacterLeft] = useState(0);

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    // if collection name is empty, submit button doesn't do anything
    if (!name) return;
    // if collection name not empty, execute addCollection handler
    addCollection(name);
    // then close modal & reset the states
    isOpen = false;
    setName("");
    characterLeft(0);
  };

  const onChangeNameHandler = (event) => {
    // if name more than characterLimit
    const characterLimit = 50;
    if (event.target.value.length > characterLimit) return;

    //changingName
    setName(event.target.value);
    setCharacterLeft(characterLimit - event.target.value.length);
  };

  return (
    <form className="space-y-3" onSubmit={onSubmitEventHandler}>
      <Typography
        variant="h4"
        style={{ fontWeight: "700", textAlign: "center", fontFamily: "Inter" }}
      >
        Create Collection
      </Typography>
      <Typography variant="body2">Character Left: {characterLeft}</Typography>
      <TextField
        id="outlined-basic"
        label="Tulis judul catatan disini..."
        variant="outlined"
        value={name}
        onChange={onChangeNameHandler}
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
