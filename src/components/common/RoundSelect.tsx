import React from "react";
import { MenuItem, Select, SelectProps } from "@mui/material";

type RoundSelectProps = {
  items: SelectItem[];
};

function RoundSelect<T>(props: RoundSelectProps & SelectProps<T>) {
  const { label, items, value, onChange } = props;
  return (
    <Select
      displayEmpty
      size="small"
      value={value}
      onChange={onChange}
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
