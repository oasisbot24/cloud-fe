import { ButtonBase, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

import { subscribeMonthAtom } from "@/datas/subscribe";

const buttonStyle = {
  focused: "bg-brand",
  unfocused: "bg-white",
};
export default function SubscribeTitleMonthButton() {
  const [month, setMonth] = useAtom(subscribeMonthAtom);
  return (
    <Stack
      direction="row"
      className="w-fit gap-2 rounded-full border border-solid border-neutral-400 bg-white px-3 py-2"
    >
      <ButtonBase
        onClick={() => setMonth(1)}
        className={`rounded-full px-4 py-2 ${month === 1 ? buttonStyle.focused : buttonStyle.unfocused}`}
      >
        <Typography
          variant={month === 1 ? "300B" : "300R"}
          className={month === 1 ? "text-white" : "text-sub-4"}
        >
          1개월 구독
        </Typography>
      </ButtonBase>
      <ButtonBase
        onClick={() => setMonth(3)}
        className={`flex flex-row gap-1 rounded-full px-4 py-2 ${month === 3 ? buttonStyle.focused : buttonStyle.unfocused}`}
      >
        <Typography
          variant={month === 3 ? "300B" : "300R"}
          className={month === 3 ? "text-white" : "text-sub-4"}
        >
          3개월 구독
        </Typography>
        <Typography variant={month === 3 ? "200B" : "200R"} className="text-sub-3">
          12% 절약
        </Typography>
      </ButtonBase>
    </Stack>
  );
}
