import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon";
import DashboardIcon from "@/components/Icon/DashboardIcon";

interface Props {
  coinName: string;
  presetName: string;
  totalProfit: number;
  totalProfitRate: number;
}
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
      <Image
        src={`/icons/arrow/profitloss/${arrow}-small.png`}
        width={16}
        height={16}
        alt="small"
      />
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

export default function PanelDescription({
  coinName,
  presetName,
  totalProfit,
  totalProfitRate,
}: Props) {
  return (
    <Stack direction="row" className="w-full justify-between items-center">
      <Stack direction="row" spacing={1}>
        <DashboardIcon id="bar-graph" />
        <Stack className="gap-2">
          <Typography variant="300B" className="text-[#FFFFFF]">
            {coinName}
          </Typography>
          <Typography variant="200R" className="text-[#FFFFFF]">
            {presetName}
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
          {totalProfit}
        </Typography>
        <PLchip pl={totalProfitRate} />
      </Stack>
    </Stack>
  );
}
