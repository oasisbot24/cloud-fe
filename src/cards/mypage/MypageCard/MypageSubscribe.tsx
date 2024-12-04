import { useRouter } from "next/router";

import { ButtonBase, Stack, Typography } from "@mui/material";

import useModalGlobal from "@/components/dialog/useModalGlobal";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";

import SubscribeModel from "../../../components/dialog/SubscribeDialog";
import MypageInfo from "./MypageInfo";

export default function MypageSubscribe() {
  const { push } = useRouter();
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();
  const { openModal } = useModalGlobal();
  return (
    <Stack className="w-full gap-4">
      <MypageInfo
        title="구독권"
        buttonText="변경하기"
        onClick={() => {
          push("/subscribe");
        }}
      >
        <Typography variant="300M" className="text-font-2">
          {subscribeData?.productName}
        </Typography>
      </MypageInfo>
      {subscribeData?.expiryDate && (
        <Stack direction="row" className="h-full w-full items-center justify-between">
          <Typography variant="200M" className="text-brand">
            다음 결제일: {subscribeData.expiryDate.slice(0, 10)}
          </Typography>
          <ButtonBase
            onClick={() => {
              openModal(<SubscribeModel />);
            }}
          >
            <Typography variant="200M" className="text-neutral-600 underline">
              구독 해지하기
            </Typography>
          </ButtonBase>
        </Stack>
      )}
    </Stack>
  );
}
