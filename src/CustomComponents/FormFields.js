import React from "react";
import {
  TextField,
  useTheme,
  useMediaQuery,
  FormControlLabel,
} from "@material-ui/core";

export function TextInput(props) {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  const getFieldSize = () => (isXS ? "small" : "medium");

  return (
    <TextField
      fullWidth={true}
      variant="outlined"
      size={getFieldSize()}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      {...props}
    />
  );
}

export function Switch(props) {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  const getFieldSize = () => (isXS ? "small" : "medium");

  return (
    <FormControlLabel control={<Switch size={getFieldSize()} />} {...props} />
  );
}
