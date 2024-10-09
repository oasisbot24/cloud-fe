import { useRouter } from "next/router";
import { InputBase, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import authAtom from "@/datas/auth";
import { usePaymentMethodQuery } from "@/hooks/query/usePayment";
import MypageExchange from "./MypageExchange";
import MypageInfo from "./MypageInfo";
import MypageSubscribe from "./MypageSubscribe";

export default function MypageCard() {
  const [auth] = useAtom(authAtom);
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
            {paymentMethodData?.cardNumber
              ? "**** **** **** "
              : "카드를 등록해 주세요"}
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
