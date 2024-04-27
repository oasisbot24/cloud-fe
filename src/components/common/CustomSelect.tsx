import React, { Dispatch, SetStateAction } from "react";
import { MenuItem, Select } from "@mui/material";

type SelectProps = {
  label?: string;
  options: Option[];
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  indicator?: React.ElementType;
};

type Option = {
  value: string;
  label: string;
};

const MenuProps = {
  PaperProps: {
    sx: {
      "& .MuiMenuItem-root": {
        fontSize: 14,
      },
    },
    style: {
      fontSize: 14,
    },
  },
};

function CustomSelect({
  label,
  options,
  state,
  setState,
  indicator,
}: SelectProps) {
  return (
    <Select
      displayEmpty
      value={state}
      onChange={e => setState(e.target.value)}
      renderValue={selected => {
        if (!selected) {
          return label;
        }
        return options.find(option => option.value === selected)?.label;
      }}
      IconComponent={indicator}
      MenuProps={MenuProps}
      sx={{
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          border: 0,
        },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: 0,
          },
        ".MuiSelect-select": {
          padding: 0,
          paddingRight: "32px",
        },
        ".MuiOutlinedInput-input": {
          fontSize: "14px",
        },
        ".MuiSelect-icon": {
          width: "20px",
          height: "20px",
        },
      }}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default CustomSelect;
