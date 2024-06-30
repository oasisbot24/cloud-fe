import React from "react";
import { InputLabel, Stack, TextField } from "@mui/material";

type Props = {
  id: string;
  label?: string;
  className?: string;
  variant?: "standard" | "outlined" | "filled";
};

function CustomTextField({
  id,
  label,
  variant = "standard",
  className = "",
}: Props) {
  return (
    <Stack className={className}>
      {label && (
        <InputLabel shrink htmlFor={id} size="normal">
          {label}
        </InputLabel>
      )}
      <TextField
        fullWidth
        defaultValue=""
        id={id}
        variant={variant}
        size="small"
        className="h-[30px] items-center justify-center"
      />
    </Stack>
  );
}

export default CustomTextField;
