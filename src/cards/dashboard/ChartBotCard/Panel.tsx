import { useState } from "react";
import {
  Box,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import { useAtom } from "jotai";
import { ChartType } from "@/apis/chart/dashboardChart";
import Icon from "@/components/Icon";
import DashboardIcon from "@/components/Icon/DashboardIcon";
import exchangeAtom from "@/datas/exchange";
import CustomMenu from "./CustomMenu";
import PanelDescription from "./PanelDescription";

interface Props {
  setMenuId: React.Dispatch<React.SetStateAction<number>>;
  menuId: number;
  chart: ChartType[];
}
export default function Panel({ setMenuId, menuId, chart }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [exchange] = useAtom(exchangeAtom);
  const open = Boolean(anchorEl);
  const listItem = [];
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  for (let index = 0; index < chart.length; index++) {
    listItem.push(
      <CustomMenu
        key={index}
        id={index}
        setMenuId={setMenuId}
        coinName={chart[index]["coinName"]}
        presetName={chart[index]["presetName"]}
        totalProfit={chart[index]["totalProfit"]}
        totalProfitRate={chart[index]["totalProfitRate"]}
        exchange={exchange}
      />,
    );
  }

  return (
    <Box width={1}>
      <Stack
        direction="row"
        className="justify-center items-center bg-[#898FC3] cursor-pointer w-[380px] rounded-xl p-4 gap-2"
        onClick={handleClick}
      >
        <PanelDescription
          coinName={chart.length > 0 ? chart[menuId]["coinName"] : ""}
          presetName={chart.length > 0 ? chart[menuId]["presetName"] : ""}
          totalProfit={chart.length > 0 ? chart[menuId]["totalProfit"] : 0}
          totalProfitRate={
            chart.length > 0 ? chart[menuId]["totalProfitRate"] : 0
          }
        />
        <Stack direction="row" spacing={2}>
          <Stack justifyContent="center" alignItems="center">
            <Icon src="/icons/arrow/down-circle.png" size={20} />
          </Stack>
        </Stack>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        open={open}
        keepMounted
        onClose={handleClose}
        onClick={handleClose}
        transitionDuration={0}
        // disableRestoreFocus={true}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "transparent",
            boxShadow: "none",
            width: anchorEl && anchorEl.offsetWidth,
            maxHeight: 200, // 메뉴의 최대 높이 설정
          },
        }}
      >
        <Stack>{listItem}</Stack>
      </Menu>
    </Box>
  );
}
