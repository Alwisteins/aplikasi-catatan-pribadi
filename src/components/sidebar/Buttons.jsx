import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const iconStyle = { fontSize: "medium", paddingBottom: "2px" };
const buttonData = [
  {
    icon: <EditIcon style={iconStyle} />,
    name: "Edit",
  },
  {
    icon: <DeleteIcon style={iconStyle} />,
    name: "Delete",
  },
];

export function Buttons({ isHidden, handleOnClickOption }) {
  return (
    <div className={`flex justify-between ${isHidden ? "hidden" : ""}`}>
      {buttonData.map((button, index) => (
        <Button
          key={index}
          startIcon={button.icon}
          size="small"
          sx={{
            color: button.name === 'Delete' ? '#E74C3C' : "#A855F7",
            fontSize: "12px",
          }}
          onClick={() => handleOnClickOption(button.name)}
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
}
