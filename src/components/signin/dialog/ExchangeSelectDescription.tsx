import { ButtonBase, Stack, Typography } from "@mui/material";

import Icon from "@/components/Icon";

export default function ExchangeSelectDescription() {
  return (
    <Stack className="w-full items-center gap-4 rounded-2xl bg-neutral-200 px-4 py-6">
      <Stack direction="row" className="gap-2">
        <Icon src="/icons/control/info.png" size={16} />
        <Typography variant="300M" className="text-font-1">
          오아시스 특별혜택 이벤트
        </Typography>
      </Stack>
      <Stack className="w-full items-center">
        <Typography variant="200R" className="text-font-2">
          아래 링크로 OKX 거래소 가입하여 이용하시면
        </Typography>
        <Typography variant="200R" className="text-font-2">
          <span className="text-brand">수수료 50% 할인혜택</span>을 드립니다.
        </Typography>
      </Stack>
      <ButtonBase
        className="w-full rounded-full bg-brand py-3"
        onClick={() => window.open("https://www.okx.com/join/79271938")}
      >
        <Typography variant="300B" className="text-white">
          이벤트 이용하기
        </Typography>
      </ButtonBase>
    </Stack>
  );
}
