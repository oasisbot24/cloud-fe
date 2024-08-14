import { useRouter } from "next/router";
import { InputBase, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import authAtom from "@/datas/auth";
import exchangeAtom from "@/datas/exchange";
import { usePaymentMethodQuery } from "@/hooks/query/usePayment";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";
import { exchangeToKorean } from "@/libs/string";
import MypageInfo from "./MypageInfo";

export default function MypageCard() {
  const [auth] = useAtom(authAtom);
  const [exchange] = useAtom(exchangeAtom);
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();
  const {
    paymentMethodQuery: { data: paymentMethodData },
  } = usePaymentMethodQuery();
  const { push } = useRouter();

  const logout = () => {
    localStorage.removeItem("authorization");
    localStorage.removeItem("authorizationrefresh");
    push("/");
  };
  return (
    <Card>
      <Stack className="px-4 md:px-8 xl:px-16 py-16 items-center justify-between w-full h-full gap-12">
        <MypageInfo title="계정" buttonText="로그아웃" onClick={logout}>
          <Typography variant="300M" className="text-font-2">
            {auth.email}
          </Typography>
        </MypageInfo>
        <MypageInfo title="거래소" buttonText="거래소 변경">
          <ExchangeIcon exchange={exchange} />
          <Typography variant="300M" className="text-font-2">
            {exchangeToKorean(exchange)}
          </Typography>
        </MypageInfo>
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
            <Stack
              direction="row"
              className="w-full h-full items-center justify-between"
            >
              <Typography variant="200M" className="text-brand">
                다음 결제일: 2024년 7월 1일
              </Typography>
              <Typography variant="200M" className="text-neutral-600 underline">
                구독 해지하기
              </Typography>
            </Stack>
          )}
        </Stack>
        <MypageInfo
          title="결제 수단"
          buttonText="변경하기"
          onClick={() => {
            push("/payment");
          }}
        >
          <Typography variant="300M" className="text-font-2">
            {paymentMethodData?.cardNumber}
          </Typography>
        </MypageInfo>
        <MypageInfo title="프로모션 코드" buttonText="적용하기">
          <InputBase className="w-full h-full" />
        </MypageInfo>
      </Stack>
    </Card>
  );
}
