import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import CustomMenu from "./CustomMenu";

interface Props {
  anchorEl: boolean;
  setAnchorEl: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PanelMenu({ anchorEl, setAnchorEl }: Props) {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <Menu
      id="basic-menu"
      //   anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      sx={{
        width: "400px",
      }}
    >
      <CustomMenu />
      {/* <MenuItem onClick={handleClose}></MenuItem> */}
    </Menu>
  );
}
