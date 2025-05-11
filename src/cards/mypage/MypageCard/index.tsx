import { useRouter } from "next/router";

import { Button, IconButton, InputBase, Stack, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Icon from "@/components/Icon/index";
import Card from "@/cards/Card";
import MypageExchange from "@/cards/mypage/MypageCard/MypageExchange";
import MypageInfo from "@/cards/mypage/MypageCard/MypageInfo";
import MypageSubscribe from "@/cards/mypage/MypageCard/MypageSubscribe";
import PromotionDialog from "@/components/dialog/PromotionDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import authAtom from "@/datas/auth";
import { usePaymentMethodQuery } from "@/hooks/query/usePayment";
import { useState } from "react";
import SupportCard from "./SupportCard";


export default function MypageCard() {
  const [auth] = useAtom(authAtom);
  const { openDialog } = useDialogGlobal();
  const [flag, setFlag] = useState(true)
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

  const buttonClick = () => {
    setFlag(!flag)

  }
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
        <Stack className="w-full gap-4">

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
          <Stack>
            <Stack direction="row" className="h-full w-full items-center cursor-pointer" onClick={buttonClick}>
              {flag ? <Icon src="/icons/arrow/right.png" size={28} /> : <Icon src="/icons/arrow/down.png" size={28} />}
              <Typography sx={{
                fontFamily: "Spoqa Han Sans Neo",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "120%"
              }}>
                지원중인 카드사
              </Typography>
            </Stack>
            {flag ? null : <SupportCard />}
          </Stack>
        </Stack>
        <MypageInfo
          title="프로모션 코드"
          buttonText="적용하기"
          onClick={() => openDialog(<PromotionDialog />)}
        >
          <InputBase
            className="h-full w-full"
            disabled={!paymentMethodData?.cardNumber}
            value={paymentMethodData?.cardNumber ? "" : "카드를 등록이 필요합니다."}
          />
        </MypageInfo>
      </Stack>

    </Card >
  );
}
