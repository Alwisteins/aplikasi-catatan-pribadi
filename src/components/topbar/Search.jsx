import * as React from "react";
import { Input as BaseInput, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default function Search({ onSearch }) {
  return (
    <Input
      disableUnderline={true}
      aria-label="Demo input"
      placeholder="Search note here..."
      onChange={(event) => onSearch(event.target.value)}
      endAdornment={
        <InputAdornment position="end" style={{ marginLeft: "-1.5rem" }}>
          <SearchIcon fontSize="small" style={{ color: '#B0B8C4' }} />
        </InputAdornment>
      }
    />
  );
}

const purple = {
  100: "#f3e8ff",
  200: "#e9d5ff",
  400: "#c084fc",
  500: "#a855f7",
  600: "#9333ea",
};

const grey = {
  50: "#F3F6F9",
  200: "#DAE2ED",
  300: "#C7D0DD",
  700: "#434D5B",
  900: "#1C2025",
};

const InputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#F8F8F8"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${purple[400]};
  }

  &:focus {
    border-color: ${purple[400]};
    box-shadow: 0 0 0 2px ${
      theme.palette.mode === "dark" ? purple[600] : purple[400]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
