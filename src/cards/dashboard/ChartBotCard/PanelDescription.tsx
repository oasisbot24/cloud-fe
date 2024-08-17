import { Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon";
import DashboardIcon from "@/components/Icon/DashboardIcon";

function PLchip({ pl }: { pl: number }) {
  const backgroundColor = pl > 0 ? "#FDE0E0" : "#D1D6F9";
  const color = pl > 0 ? "#F46565" : "#223CE9";
  const arrow = pl > 0 ? "up" : "down";

  return (
    <Stack
      direction="row"
      className="justify-between items-center w-14 h-6 px-2 rounded-full"
      sx={{ backgroundColor }}
    >
      <Icon src={`/icons/arrow/profitloss/${arrow}-small.png`} size={16} />
      <Typography
        fontFamily="SF Pro Display"
        fontWeight={700}
        fontSize={14}
        lineHeight="16px"
        color={color}
      >
        {pl}%
      </Typography>
    </Stack>
  );
}

export default function PanelDescription() {
  return (
    <Stack direction="row" className="w-full justify-between items-center">
      <Stack direction="row" spacing={1}>
        <DashboardIcon id="bar-graph" />
        <Stack className="gap-2">
          <Typography variant="300B" className="text-[#FFFFFF]">
            종합
          </Typography>
          <Typography variant="200R" className="text-[#FFFFFF]">
            ALL
          </Typography>
        </Stack>
      </Stack>
      <Stack className="gap-1 items-end">
        <Typography
          variant="200R"
          fontFamily="SF Pro Display"
          fontWeight={600}
          fontSize={18}
          lineHeight="22px"
          className="text-white"
        >
          $230,7777
        </Typography>
        <PLchip pl={1} />
      </Stack>
    </Stack>
  );
}
