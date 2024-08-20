import { useMemo, useState } from "react";
import Image from "next/image";
import {
  CardContent,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { CoinType } from "@/apis/oasisbot/coin";
import { PresetType } from "@/apis/preset/preset";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import LeverageNoticeDialog from "@/cards/TempCard/LeverageNoticeDialog";
import RoundSelect from "@/components/common/RoundSelect";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import exchangeAtom from "@/datas/exchange";
import { useBot, useBotInfo } from "@/hooks/query/useOasisBot";
import { usePresetQuery } from "@/hooks/query/usePreset";
import useModalGlobal from "@/hooks/useModalGlobal";

function OasisBotRunCard() {
  const [startBalance, setStartBalance] = useState<string>("5000");
  const [selectedMarket, setSelectedMarket] = useState<string>("");
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [selectedTradeItem, setSelectedTradeItem] = useState<number>(0);
  const [selectedDistribution, setSelectedDistribution] = useState<number>(0);
  const number = 1000000000; // temp

  const [exchange, setExchange] = useAtom(exchangeAtom);

  const { openModal, closeModal } = useModalGlobal();
  const { presetQuery } = usePresetQuery();
  const { coinQuery } = useBotInfo();
  const { startBotMutation } = useBot();
  const { mutate } = startBotMutation;

  const onReset = () => {
    setStartBalance("5000");
    setSelectedMarket("");
    setSelectedPreset(0);
    setSelectedTradeItem(0);
  };

  const selectPresetList = (list: PresetType[]): SelectItem[] =>
    list.map(item => ({ label: item.presetName, value: item.id }));

  const selectCoinList = (list: CoinType[]): SelectItem[] =>
    list.map(item => ({
      label: item.coinName,
      value: item.id,
    }));

  const presetList = useMemo(
    () => (presetQuery.data ? selectPresetList(presetQuery.data) : []),
    [presetQuery.data],
  );

  const coinList = useMemo(
    () => (coinQuery.data ? selectCoinList(coinQuery.data) : []),
    [selectedMarket, coinQuery.data],
  );

  const distributionList = [
    // temp
    { label: "1분봉", value: "1" },
    { label: "3분봉", value: "3" },
    { label: "5분봉", value: "5" },
    { label: "15분봉", value: "15" },
    { label: "30분봉", value: "30" },
    { label: "1시간봉", value: "60" },
  ];

  const runOasisBot = () => {
    if (!(selectedPreset && selectedTradeItem && Number(startBalance))) return;

    const body = {
      botName: "bot1",
      presetId: selectedPreset,
      coinId: selectedTradeItem,
      startBalance: Number(startBalance),
      leverage: null,
    };

    mutate(body);
  };

  return (
    <Card>
      <CardHeader
        id="bot-start"
        title="오아시스 BOT 실행"
        subtitle={`주문가능 금액\n${exchange === "upbit" ? "￦" : "$"}${number.toLocaleString()}`}
        action={
          <RoundSelect
            label="거래소 선택"
            items={[
              { label: "업비트", value: "upbit" },
              { label: "OKX", value: "okx" },
            ]}
            value={exchange}
            onChange={setExchange}
          />
        }
      />
      <CardContent>
        <Stack className="gap-2">
          <FormTextField
            id="transactionAmount"
            label={`거래금액을 입력해 주세요 (최소 ${exchange === "upbit" ? "₩5,000" : "$50"})`}
            type="number"
            value={startBalance}
            setValue={setStartBalance}
            startAdornment={
              <InputAdornment position="start">
                {exchange === "upbit" ? "￦" : "$"}
              </InputAdornment>
            }
          />
          <FormSelect
            id="presets"
            label="설정 프리셋"
            variant="standard"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
          />
          <FormSelect
            id="tradeItem"
            label="매매종목"
            variant="standard"
            items={coinList}
            value={selectedTradeItem}
            setValue={setSelectedTradeItem}
          />
          <FormSelect
            id="tradeItem"
            label="기준 분봉"
            variant="standard"
            items={distributionList}
            value={selectedDistribution}
            setValue={setSelectedDistribution}
          />
          <Stack className="w-full">
            <InputLabel htmlFor="leverage">
              <Image
                src="/icons/control/info.png"
                alt="info"
                width={12}
                height={12}
                className="mr-1"
              />
              <Typography
                variant="100R"
                className="text-neutral-600 underline hover:cursor-pointer"
                onClick={() =>
                  openModal(<LeverageNoticeDialog handleClose={closeModal} />)
                }
              >
                현재 설정 레버리지
              </Typography>
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
          className="mr-1 text-white bg-neutral-700"
          onClick={onReset}
        />
        <CardButton
          text="저장 및 실행"
          className="ml-1 text-white bg-brand"
          onClick={runOasisBot}
        />
      </CardFooter>
    </Card>
  );
}

export default OasisBotRunCard;
