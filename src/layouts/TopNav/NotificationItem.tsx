import { ButtonBase, Stack, Typography } from "@mui/material";

export type NotificationType = "preset" | "bot" | "api" | "backtest";

export interface NotificationDataType {
  title: string;
  type: NotificationType;
  content: string;
  extra?: string;
  date: string;
}

const iconBackground: { [key in NotificationType]: string } = {
  preset: "linear-gradient(213.66deg, #16B4EB 4.85%, #23E73C 119.17%)",
  bot: "linear-gradient(249.49deg, #22A1E9 100%, #223CE9 -15.97%)",
  api: "linear-gradient(136.67deg, #FF409A 8.34%, #C438EF 95.26%)",
  backtest: "linear-gradient(136.67deg, #FFB340 8.34%, #EF4338 95.26%)",
};

const typeToString: { [key in NotificationType]: string } = {
  preset: "프리셋",
  bot: "오아시스Bot",
  api: "API",
  backtest: "백테스트",
};

interface NotificationItemProps {
  notification: NotificationDataType;
}

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  return (
    <Stack direction="row" className="p-4 px-8 gap-2 hover:bg-[#6F6C9920]">
      <Stack
        className="w-[32px] h-[32px] shrink-0 rounded-full items-center justify-center"
        sx={{
          background: iconBackground[notification.type],
        }}
      >
        <Typography
          className="text-white text-center"
          sx={{
            fontFamily: "SF Pro Display",
            fontSize: 14,
            fontWeight: 700,
            lineHeight: "16px",
          }}
        >
          {notification.type[0].toUpperCase()}
        </Typography>
      </Stack>
      <Stack className="w-full gap-2">
        <Stack direction="row" className="gap-2">
          <Typography variant="100B" className="text-font-3">
            {notification.title}
          </Typography>
          <Typography variant="100R" className="text-sub-4">
            {typeToString[notification.type]}
          </Typography>
        </Stack>
        <Typography variant="100R" className="text-[#6F6C99]">
          {notification.content}
        </Typography>
        {notification.extra}
        <Stack direction="row" className="w-full justify-between">
          <Typography variant="100R" className="text-neutral-600">
            {notification.date}
          </Typography>
          <ButtonBase onClick={() => {}}>
            <Typography variant="100R" className="text-neutral-800 underline">
              {typeToString[notification.type]} 보기
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
