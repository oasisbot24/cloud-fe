import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  labelId: string;
  selectLabel: string;
  itemList: {
    value: string;
    itemLabel: string;
  }[];
  state: string;
  setState: (value: string) => void;
};

// state, setState는 임시로 해둔 것.
function Selectbox({ labelId, selectLabel, itemList, state, setState }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <FormControl size="small">
      <InputLabel
        id={labelId}
        sx={{
          color: "black",
          "&.Mui-focused": {
            color: "black",
          },
        }}
        className="font-bold font-roboto"
      >
        {selectLabel}
      </InputLabel>
      <Select
        labelId={labelId}
        label={selectLabel}
        value={state}
        onChange={handleChange}
        className="w-72 font-bold font-roboto uppercase"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
        }}
      >
        {itemList.map(({ value, itemLabel }) => (
          <MenuItem
            key={value}
            value={value}
            className="font-bold font-roboto uppercase"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#c8c8c8",
                "&:hover": {
                  backgroundColor: "#c8c8c8",
                },
              },
            }}
          >
            {itemLabel}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Selectbox;
