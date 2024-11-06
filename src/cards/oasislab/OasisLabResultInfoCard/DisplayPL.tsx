import { Stack, Typography } from "@mui/material";

import Icon from "@/components/Icon/index";

export default function DisplayPL({ pl }: { pl: number }) {
  return (
    <Stack direction="row" className="items-center gap-1">
      {pl > 0 ? (
        <Icon src="/icons/arrow/profitloss/up-medium.png" alt="up" />
      ) : (
        <Icon src="/icons/arrow/profitloss/down-medium.png" alt="down" />
      )}
      <Typography
        fontFamily="San Francisco"
        fontWeight={700}
        fontSize={28}
        lineHeight="36px"
        className={pl > 0 ? "text-sub-3" : "text-brand"}
      >
        {pl >= 0 ? pl : -pl}%
      </Typography>
    </Stack>
  );
}
