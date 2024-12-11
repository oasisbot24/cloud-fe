import { Typography } from "@mui/material";
import { useAtom } from "jotai";

import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import SigninDialog from "@/components/dialog/SigninDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import ExchangeSelect from "@/components/signin/dialog/ExchangeSelect";
import exchangeAtom from "@/datas/exchange";
import { exchangeToKorean } from "@/libs/string";

import MypageInfo from "./MypageInfo";

export default function MypageExchange() {
  const [exchange, setExchange] = useAtom(exchangeAtom);
  const { openDialog, closeDialog } = useDialogGlobal();
  return (
    <MypageInfo
      title="거래소"
      buttonText="거래소 변경"
      onClick={() => {
        openDialog(
          <SigninDialog onClose={closeDialog}>
            <ExchangeSelect
              onClick={(type: ExchangeType) => {
                localStorage.setItem("exchange", type);
                setExchange(type);
                closeDialog();
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
