import { useState } from "react";
import { Box, Menu, Stack } from "@mui/material";
import Icon from "@/components/Icon";
import DashboardIcon from "@/components/Icon/DashboardIcon";
import CustomMenu from "./CustomMenu";
import PanelDescription from "./PanelDescription";

interface Props {
  setMenuId: React.Dispatch<React.SetStateAction<number>>;
  chartLen: number;
}
export default function Panel({ setMenuId, chartLen }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const listItem = [];
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  for (let index = 0; index < chartLen; index++) {
    listItem.push(<CustomMenu id={index} setMenuId={setMenuId} />);
  }

  return (
    <Box width={1}>
      <Stack
        direction="row"
        className="justify-center items-center bg-[#898FC3] cursor-pointer w-[380px] rounded-xl p-4 gap-2"
        onClick={handleClick}
      >
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
        onClick={handleClose}
        transitionDuration={0}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "transparent",
            boxShadow: "none",
            width: anchorEl && anchorEl.offsetWidth,
          },
        }}
      >
        <Stack gap={1}>{listItem}</Stack>
      </Menu>
    </Box>
    //
  );
}
