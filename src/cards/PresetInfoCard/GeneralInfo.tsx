import { Stack, Typography } from "@mui/material";

interface GeneralInfoProps {
  type: "exchange" | "balance" | "time";
}

const label = {
  exchange: "접속거래소",
  balance: "잔고",
  time: "사용시간",
};

export default function GeneralInfo({ type }: GeneralInfoProps) {
  return (
    <Stack
      direction="row"
      className="w-full gap-8 h-[30px] items-center justify-between"
    >
      <Typography variant="100R" className="w-[60px] shrink-0 text-neutral-600">
        {label[type]}
      </Typography>
      <Stack
        direction="row"
        className="w-full h-full border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 items-center justify-end"
      >
        <Typography variant="200M" className="text-font-2">
          {type === "exchange"
            ? "Binance"
            : type === "balance"
              ? "₩0"
              : "00:00:00"}
        </Typography>
      </Stack>
    </Stack>
  );
}
