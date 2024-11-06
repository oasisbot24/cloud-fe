import { useRouter } from "next/router";

import { InputBase, Stack, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import authAtom from "@/datas/auth";
import { usePaymentMethodQuery } from "@/hooks/query/usePayment";
import useModalGlobal from "@/hooks/useModalGlobal";

import MypageExchange from "./MypageExchange";
import MypageInfo from "./MypageInfo";
import MypageSubscribe from "./MypageSubscribe";
import PromotionModal from "./PromotionModal";

export default function MypageCard() {
  const [auth] = useAtom(authAtom);
  const { openModal } = useModalGlobal();

  const queryClient = useQueryClient();
  const {
    paymentMethodQuery: { data: paymentMethodData },
  } = usePaymentMethodQuery();

  const { push } = useRouter();

  const logout = () => {
    queryClient.clear();
    localStorage.removeItem("authorization");
    localStorage.removeItem("authorizationrefresh");
    push("/");
  };
  return (
    <Card>
      <Stack className="h-full w-full items-center justify-between gap-12 px-4 py-16 md:px-8 xl:px-16">
        <MypageInfo title="계정" buttonText="로그아웃" onClick={logout}>
          <Typography variant="300M" className="text-font-2">
            {auth.email}
          </Typography>
        </MypageInfo>
        <MypageExchange />
        <MypageSubscribe />
        <MypageInfo
          title="결제 수단"
          buttonText="변경하기"
          onClick={() => {
            push("/payment");
          }}
        >
          <Typography variant="300M" className="text-font-2">
            {paymentMethodData?.cardNumber ? "**** **** **** " : "카드를 등록해 주세요"}
            {paymentMethodData?.cardNumber}
          </Typography>
        </MypageInfo>
        <MypageInfo
          title="프로모션 코드"
          buttonText="적용하기"
          onClick={() => openModal(<PromotionModal />)}
        >
          <InputBase
            className="h-full w-full"
            disabled={!paymentMethodData?.cardNumber}
            value={paymentMethodData?.cardNumber ? "" : "카드를 등록이 필요합니다."}
          />
        </MypageInfo>
      </Stack>
    </Card>
  );
}
