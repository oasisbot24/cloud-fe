import React from "react";
import { InputLabel, TextField } from "@mui/material";

type Props = {
  id: string;
  title: string;
  variant?: "standard" | "outlined" | "filled";
  mb?: string;
};

function CustomTextField({ id, title, variant, mb }: Props) {
  return (
    <div style={{ marginBottom: mb ?? "1rem" }}>
      <InputLabel shrink htmlFor={id} size="normal">
        {title}
      </InputLabel>
      <TextField
        fullWidth
        defaultValue=""
        id={id}
        variant={variant}
        size="small"
      />
    </div>
  );
}

export default CustomTextField;
