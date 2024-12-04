import { useEffect, useState } from "react";

import {
  CardContent,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useAtom, useAtomValue } from "jotai";

import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import LeverageNoticeDialog from "@/cards/oasisbot/OasisBotRunCard/LeverageNoticeDialog";
import Icon from "@/components/Icon";
import ExchangeChip from "@/components/chip/ExchangeChip";
import FormTextField from "@/components/form/FormTextField";
import exchangeAtom from "@/datas/exchange";
import { selectedBotRowAtom } from "@/datas/oasisbotTransaction";
import useBotCommand from "@/hooks/card/useBotCommand";
import { useBotDetailQuery, useBotInfo } from "@/hooks/query/useOasisBot";
import useModalGlobal from "@/hooks/useModalGlobal";

function OasisBotSelectCard() {
  const [startBalance, setStartBalance] = useState<number>(5000);
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [selectedTradeItem, setSelectedTradeItem] = useState<string>("");
  const [standardMinute, setStandardMinute] = useState<number>(0);

  const [exchange] = useAtom(exchangeAtom);
  const selectedRow = useAtomValue(selectedBotRowAtom);

  const {
    botDetailQuery: { data, isFetching },
  } = useBotDetailQuery(selectedRow[0]);
  const { stopBot, restartBot } = useBotCommand();
  const { openModal, closeModal } = useModalGlobal();
  const { balanceQuery } = useBotInfo();

  const onRemove = () => {
    console.log("onRemove");
  };

  useEffect(() => {
    if (data) {
      setStartBalance(data.startBalance);
      setSelectedPreset(data.presetName);
      setSelectedTradeItem(data.coinType);
      setStandardMinute(data.standardMinute);
    }
  }, [data]);

  useEffect(() => {
    console.log("fetched: ", data);
  }, [isFetching]);

  return (
    <Card>
      <CardHeader
        id="bot-start"
        title="오아시스 BOT 실행"
        subtitle={`주문가능 금액\n${exchange === "upbit" ? "￦" : "$"}${balanceQuery.data?.availableBalance?.toLocaleString() ?? 0}`}
        action={<ExchangeChip />}
      />
      <CardContent>
        <Stack className="gap-2">
          <FormTextField
            id="transactionAmount"
            label={`거래금액을 입력해 주세요 (최소 ${exchange === "upbit" ? "₩5,000" : "$100"})`}
            type="number"
            value={startBalance}
            setValue={setStartBalance}
            startAdornment={
              <InputAdornment position="start">{exchange === "upbit" ? "￦" : "$"}</InputAdornment>
            }
            inputLabelProps={{
              className: "text-brand opacity-100",
            }}
            inputProps={{
              className: "cursor-not-allowed",
            }}
            readOnly
          />
          <FormTextField
            id="presets"
            label="설정 프리셋"
            placeholder="설정 프리셋을 선택"
            value={selectedPreset}
            readOnly
            inputProps={{
              className: "cursor-not-allowed",
            }}
          />
          <FormTextField
            id="tradeItem"
            label="매매종목"
            placeholder="매매종목을 선택"
            value={selectedTradeItem}
            readOnly
            inputProps={{
              className: "cursor-not-allowed",
            }}
          />
          <FormTextField
            id="tradeItem"
            label="기준 분봉"
            placeholder="분봉 선택"
            value={standardMinute}
            readOnly
            inputProps={{
              className: "cursor-not-allowed",
            }}
          />
          <Stack className="w-full">
            <InputLabel htmlFor="leverage">
              <div className="flex flex-row">
                <Icon src="/icons/control/info.png" alt="info" size={12} className="mr-1" />
                <Typography
                  variant="100R"
                  className="text-neutral-600 underline hover:cursor-pointer"
                  onClick={() => openModal(<LeverageNoticeDialog handleClose={closeModal} />)}
                >
                  현재 설정 레버리지
                </Typography>
              </div>
            </InputLabel>
            <InputBase
              placeholder={`${exchange === "upbit" ? "업비트 거래소는 레버리지 설정 불가" : "레버리지 고정값"}`}
              fullWidth
              classes={{
                input:
                  "h-[30px] p-0 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
                disabled: "cursor-not-allowed bg-neutral-200 text-neutral-600",
              }}
              disabled
            />
          </Stack>
        </Stack>
      </CardContent>
      <CardFooter className="bottom-2">
        <CardButton
          text="초기화"
          className={`mr-1 text-white ${data?.isRunning ? "bg-neutral-400" : "bg-neutral-700"}`}
          onClick={onRemove}
          disabled={!!data?.isRunning}
        />
        {data?.isRunning ? (
          <CardButton
            text="중지"
            className="ml-1 bg-[#F46565] text-white"
            onClick={() =>
              stopBot({
                selected: data.id,
                onSuccess: () => console.log("stop"),
              })
            }
          />
        ) : (
          <CardButton
            text="재실행"
            className="ml-1 bg-brand text-white"
            onClick={() =>
              restartBot({
                selected: data?.id || -1,
                onSuccess: () => console.log("restart"),
              })
            }
          />
        )}
      </CardFooter>
    </Card>
  );
}

export default OasisBotSelectCard;
