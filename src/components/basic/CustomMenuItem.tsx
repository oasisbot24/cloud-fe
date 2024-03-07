import React from "react";
import { MenuItem } from "@mui/material";

type Props = {
  children: string;
};

function CustomMenuItem({ children }: Props) {
  return (
    <MenuItem
      sx={{
        "&:hover": {
          background: "#373B5C",
          color: "#fff",
        },
      }}
    >
      {children}
    </MenuItem>
  );
}

export default CustomMenuItem;
