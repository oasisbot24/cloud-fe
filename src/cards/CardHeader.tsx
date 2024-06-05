import { CardHeader as MuiCardHeader, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import DashboardIcon from "@/components/Icon/DashboardIcon";

interface CardHeaderProps {
  id: DashboardIdType;
  title: string;
  description?: string;
  action?: React.ReactNode;
  isDark?: boolean;
}

export default function CardHeader({
  id,
  title,
  description,
  action,
  isDark,
}: CardHeaderProps) {
  const hm = dayjs().format("HH:mm");
  return (
    <MuiCardHeader
      sx={{
        "& .MuiCardHeader-action": {
          margin: "auto 0",
        },
      }}
      avatar={<DashboardIcon id={id} />}
      title={
        <Stack className="gap-1">
          <Typography
            variant="300B"
            className={!isDark ? "text-font-1" : "text-neutral-100"}
          >
            {title}
          </Typography>
          <Typography
            variant="100R"
            className={!isDark ? "text-neutral-500" : "text-neutral-300"}
          >
            {description ?? `오늘 ${hm} 기준`}
          </Typography>
        </Stack>
      }
      action={action}
    />
  );
}
