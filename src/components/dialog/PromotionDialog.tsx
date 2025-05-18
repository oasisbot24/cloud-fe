import Image from "next/image";

import { ButtonBase, Stack, Typography } from "@mui/material";
import { AxiosError } from "axios";

import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import { datetimeToKorean } from "@/libs/string";

interface PromotionDialogProps {
  result?: ResponseT<Subscribe.SubscribeT>;
}

export default function PromotionDialog({ result }: PromotionDialogProps) {
  const { closeDialog } = useDialogGlobal();
  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src="/dialog/Dialog.png" alt="Dialogimage" width={410} height={208} />
      <Stack className="h-[200px] items-center justify-between gap-4 p-8">
        <Typography variant="400B" className="text-font-2">
          프로모션 코드
        </Typography>
        <Stack className="w-full">
          <Typography variant="200R" className="text-center text-sub-3">
            {result instanceof AxiosError
              ? result.msg
              : `프로모션 코드가 적용되었습니다.\n만료일시: ${datetimeToKorean(result?.data.expiryDate)}`}
          </Typography>
        </Stack>
        <Stack direction="row" className="mt-4 w-full gap-4">
          <ButtonBase className="w-full rounded-full bg-brand py-3" onClick={closeDialog}>
            <Typography variant="300B" className="text-white">
              확인
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
