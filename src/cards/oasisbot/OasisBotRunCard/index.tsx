import { useMemo, useState } from "react";
import { CardContent, Stack } from "@mui/material";
import { useAtom } from "jotai";
import { CoinType } from "@/apis/oasisbot/coin";
import { PresetType } from "@/apis/preset/preset";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import RoundSelect from "@/components/common/RoundSelect";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import exchangeAtom from "@/datas/exchange";
import { useBot, useBotInfo } from "@/hooks/query/useOasisBot";
import { usePresetQuery } from "@/hooks/query/usePreset";

function OasisBotRunCard() {
  const [startBalance, setStartBalance] = useState<string>("5000");
  const [selectedMarket, setSelectedMarket] = useState<string>("");
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [selectedTradeItem, setSelectedTradeItem] = useState<number>(0);

  const [exchange, setExchange] = useAtom<ExchangeType>(exchangeAtom);

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

  const runOasisBot = () => {
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
        subtitle="거래소를 선택해주세요."
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
          <FormTextField id="budget" label="주문가능 금액" />
          <FormTextField
            id="transactionAmount"
            label="거래금액을 입력 (최소 ₩5,000)"
            type="number"
            value={startBalance}
            setValue={setStartBalance}
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
          <FormTextField id="leverage" label="현재 설정 레버리지" />
        </Stack>
      </CardContent>
      <CardFooter>
        <CardButton
          text="초기화"
          className="text-white bg-neutral-700"
          onClick={onReset}
        />
        <CardButton
          text="저장 및 실행"
          className="text-white bg-brand"
          onClick={runOasisBot}
        />
      </CardFooter>
    </Card>
  );
}

export default OasisBotRunCard;
