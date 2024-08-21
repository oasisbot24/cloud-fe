import React, { Dispatch, SetStateAction } from "react";
import { MenuItem, Select } from "@mui/material";

type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;

type Props = {
  label?: string;
  items: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange?:
    | Dispatch<SetStateAction<string>>
    | SetAtom<[SetStateAction<string>], void>;
};

function RoundSelect({ label, items, value, onChange }: Props) {
  return (
    <Select
      displayEmpty
      size="small"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      inputProps={{
        "aria-label": "Without label",
      }}
      SelectDisplayProps={{
        style: {
          paddingTop: "5px",
          paddingBottom: "5px",
        },
      }}
      sx={{ borderRadius: "30px" }}
      classes={{
        root: "p-0",
      }}
    >
      {label && <MenuItem value="">{label}</MenuItem>}
      {items.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default RoundSelect;
