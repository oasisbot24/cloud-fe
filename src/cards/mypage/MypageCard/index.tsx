import { Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import RoundButton from "@/components/common/RoundButton";
import authAtom from "@/datas/auth";
import exchangeAtom from "@/datas/exchange";
import { exchangeToKorean } from "@/libs/string";

interface MypageInfoProps {
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
}

function MypageInfo({ title, buttonText, children, onClick }: MypageInfoProps) {
  return (
    <Stack className="w-full h-full items-start justify-between gap-2">
      <Typography variant="h6" className="text-font-1">
        {title}
      </Typography>
      <Stack direction="row" className="w-full gap-4 items-end">
        <Stack
          direction="row"
          className="h-[42px] border-b border-solid border-x-0 border-t-0 border-neutral-300 w-full items-center gap-2"
        >
          {children}
        </Stack>
        {buttonText && (
          <RoundButton onClick={onClick} focus>
            {buttonText}
          </RoundButton>
        )}
      </Stack>
    </Stack>
  );
}

export default function MypageCard() {
  const [auth] = useAtom(authAtom);
  const [exchange] = useAtom(exchangeAtom);
  return (
    <Card>
      <Stack className="px-4 md:px-8 xl:px-16 py-16 items-center justify-between w-full h-full gap-12">
        <MypageInfo title="계정">
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
          <MypageInfo title="구독권" buttonText="변경하기">
            <Typography variant="300M" className="text-font-2">
              Basic
            </Typography>
          </MypageInfo>
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
        </Stack>
        <MypageInfo title="결제 수단" buttonText="변경하기">
          <Typography variant="300M" className="text-font-2">
            *****12
          </Typography>
        </MypageInfo>
      </Stack>
    </Card>
  );
}
