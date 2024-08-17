import { useState } from "react";
import { useRouter } from "next/router";
import { Alert, CardContent, Stack, Typography } from "@mui/material";
import { AxiosError } from "axios";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import FormTextField from "@/components/form/FormTextField";
import { usePaymentMethodMutation } from "@/hooks/query/usePayment";

interface PaymentInfoProps {
  title: string;
  children: React.ReactNode;
}

function PaymentInfo({ title, children }: PaymentInfoProps) {
  return (
    <Stack className="w-full h-full items-start justify-between gap-2">
      <Typography variant="h6" className="text-font-1">
        {title}
      </Typography>
      {children}
    </Stack>
  );
}

export default function PaymentCard() {
  const { query, push } = useRouter();
  console.log(query.month);
  console.log(query.type);
  const { postPaymentMethodMutation } = usePaymentMethodMutation();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const [error, setError] = useState("");

  const handleClick = () => {
    setError("");
    postPaymentMethodMutation.mutate(
      {
        cardNumber,
        expiryDate,
        password,
        userInfo,
      },
      {
        onSuccess: () => {
          push("/mypage");
        },
        onError: e => {
          setError(
            (e as AxiosError<ApiResponseType<void>>).response?.data.msg ?? "",
          );
        },
      },
    );
  };

  return (
    <Card>
      <CardContent className="p-12 flex flex-col gap-16 mb-10">
        <PaymentInfo title="카드 번호">
          <FormTextField
            id="cardnumber"
            placeholder="카드번호를 입력해주세요"
            value={cardNumber}
            setValue={setCardNumber}
          />
        </PaymentInfo>
        <PaymentInfo title="유효기간">
          <FormTextField
            id="expiredate"
            placeholder="YYMM"
            value={expiryDate}
            setValue={setExpiryDate}
          />
        </PaymentInfo>
        <PaymentInfo title="비밀번호 앞 두자리">
          <FormTextField
            id="password"
            placeholder="**"
            value={password}
            setValue={setPassword}
            type="password"
          />
        </PaymentInfo>
        <PaymentInfo title="생년월일">
          <FormTextField
            id="birthday"
            placeholder="YYMMDD"
            value={userInfo}
            setValue={setUserInfo}
          />
        </PaymentInfo>
        {error && <Alert severity="error">{error}</Alert>}
      </CardContent>
      <CardFooter>
        <CardButton
          text="적용"
          className="text-white bg-brand w-full"
          onClick={handleClick}
        />
      </CardFooter>
    </Card>
  );
}
