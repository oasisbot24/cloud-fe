import { useState } from "react";
import { Box, Menu, Stack } from "@mui/material";
import Icon from "@/components/Icon";
import DashboardIcon from "@/components/Icon/DashboardIcon";
import CustomMenu from "./CustomMenu";
import PanelDescription from "./PanelDescription";

export default function Panel() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box width={1}>
      <Stack
        direction="row"
        className="justify-center items-center bg-[#898FC3] cursor-pointer w-[380px] rounded-xl p-4 gap-2"
        onClick={handleClick}
      >
        <DashboardIcon id="bar-graph" />
        <PanelDescription />
        <Stack direction="row" spacing={2}>
          <Stack justifyContent="center" alignItems="center">
            <Icon src="/icons/arrow/down-circle.png" size={20} />
          </Stack>
        </Stack>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transitionDuration={0}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "transparent",
            boxShadow: "none",
            width: anchorEl && anchorEl.offsetWidth,
          },
        }}
      >
        <CustomMenu />
      </Menu>
    </Box>
  );
}
