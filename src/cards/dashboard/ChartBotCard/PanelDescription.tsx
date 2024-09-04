import Image from "next/image";
import { Chip, Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon";
import ArrowDownIcon from "@/components/Icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import DashboardIcon from "@/components/Icon/DashboardIcon";

interface Props {
  coinName: string;
  presetName: string;
  totalProfit: number;
  totalProfitRate: number;
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
        {/* <Image
          src="/icons/crypto/btc-30.png"
          alt="btc"
          width={25}
          height={30}
        /> */}

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
          ₩ {totalProfit}
        </Typography>
        <Chip
          className={`font-bold ${totalProfitRate > 0 ? "text-[#F46565]" : "text-[#223CE9]"}`}
          icon={totalProfitRate > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
          label={`${Number(totalProfitRate).toFixed(1)}%`}
          size="small"
          style={{
            background: totalProfitRate > 0 ? "#FDE0E0" : "#DCE1FF",
          }}
        />
      </Stack>
    </Stack>
  );
}
