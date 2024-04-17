import { Stack } from "@mui/material";
import Icon from "@/components/Icon/index";

interface DashboardIconProps {
  id: DashboardIdType;
}

const iconSrc = {
  "bar-graph": "/icons/dashboard/bar-graph.png",
  "bot-start": "/icons/dashboard/bot-start.png",
  lab: "/icons/dashboard/lab.png",
  "lab-on": "/icons/dashboard/lab-on.png",
  "lab-result": "/icons/dashboard/lab-result.png",
  history: "/icons/dashboard/history.png",
  "pie-chart": "/icons/dashboard/pie-chart.png",
  ranking: "/icons/dashboard/ranking.png",
  "rise-arrow": "/icons/dashboard/rise-arrow.png",
  setting: "/icons/dashboard/setting.png",
  transaction: "/icons/dashboard/transaction.png",
  wallet: "/icons/dashboard/wallet.png",
};

export default function DashboardIcon({ id }: DashboardIconProps) {
  return (
    <Stack className="justify-center items-center rounded-xl bg-neutral-200 w-[44px] h-[44px]">
      <Icon src={iconSrc[id]} size={30} />
    </Stack>
  );
}
