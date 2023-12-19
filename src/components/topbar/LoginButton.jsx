import React from "react";
import { useState } from "react";
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function LoginButton() {
  const [isHidden, setIsHidden] = useState(true);
  const handleOnClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        sx={{
          backgroundColor: "#A855F7",
          fontWeight: "600",
          borderRadius: "10px",
          fontSize: "14px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#9333ea",
            boxShadow: "none",
          },
        }}
        onClick={handleOnClick}
      >
        <LoginIcon style={{ paddingRight: "6px" }} /> Sign in
      </Button>
      <div className={`absolute top-64 right-96 ${isHidden ? "hidden" : ""}`}>
        <GoogleLoginButton />
        <GithubLoginButton  />
      </div>
    </div>
  );
}
