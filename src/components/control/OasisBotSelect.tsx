import React, { Dispatch, SetStateAction } from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";

type Props = {
  id: string;
  title: string;
  variant?: "standard" | "outlined" | "filled";
  items: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  mb?: string;
};

function OasisBotSelect({
  id,
  title,
  variant,
  items,
  value,
  onChange,
  mb,
}: Props) {
  return (
    <div style={{ marginBottom: mb ?? "1rem" }}>
      <InputLabel shrink htmlFor={id} size="normal">
        {title}
      </InputLabel>
      <Select
        fullWidth
        value={value}
        id={id}
        variant={variant}
        onChange={e => onChange(e.target.value)}
      >
        {items.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default OasisBotSelect;
