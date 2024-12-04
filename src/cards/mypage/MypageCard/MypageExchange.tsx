import { Typography } from "@mui/material";
import { useAtom } from "jotai";

import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import SigninDialog from "@/components/dialog/SigninDialog";
import useModalGlobal from "@/components/dialog/useModalGlobal";
import ExchangeSelect from "@/components/signin/dialog/ExchangeSelect";
import exchangeAtom from "@/datas/exchange";
import { exchangeToKorean } from "@/libs/string";

import MypageInfo from "./MypageInfo";

export default function MypageExchange() {
  const [exchange, setExchange] = useAtom(exchangeAtom);
  const { openModal, closeModal } = useModalGlobal();
  return (
    <MypageInfo
      title="거래소"
      buttonText="거래소 변경"
      onClick={() => {
        openModal(
          <SigninDialog onClose={closeModal}>
            <ExchangeSelect
              onClick={(type: ExchangeType) => {
                localStorage.setItem("exchange", type);
                setExchange(type);
                closeModal();
              }}
            />
          </SigninDialog>,
        );
      }}
    >
      <ExchangeIcon exchange={exchange} />
      <Typography variant="300M" className="text-font-2">
        {exchangeToKorean(exchange)}
      </Typography>
    </MypageInfo>
  );
}
