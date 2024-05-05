import { CardHeader as MuiCardHeader, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import DashboardIcon from "@/components/Icon/DashboardIcon";

interface CardHeaderProps {
  id: DashboardIdType;
  title: string;
  action?: React.ReactNode;
}

export default function CardHeader({ id, title, action }: CardHeaderProps) {
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
          <Typography variant="300B" className="text-font-1">
            {title}
          </Typography>
          <Typography
            variant="100R"
            className="text-neutral-500"
          >{`오늘 ${hm} 기준`}</Typography>
        </Stack>
      }
      action={action}
    />
  );
}
