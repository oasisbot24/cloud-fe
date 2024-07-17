import { useState } from "react";
import { CardContent, Stack } from "@mui/material";
import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import CardButton from "@/components/common/CardButton";
import RoundSelect from "@/components/common/RoundSelect";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";

function OasisBotRunCard() {
  const [selectedMarket, setSelectedMarket] = useState<string>("");
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [selectedTradeItem, setSelectedTradeItem] = useState<string>("");

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
            value={selectedMarket}
            onChange={setSelectedMarket}
          />
        }
      />
      <CardContent>
        <Stack className="gap-2">
          <FormTextField id="budget" label="주문가능 금액" />
          <FormTextField
            id="transactionAmount"
            label="거래금액을 입력 (최소 ₩5,000)"
          />
          <FormSelect
            id="presets"
            label="설정 프리셋"
            variant="standard"
            items={[
              { label: "프리셋1", value: "preset1" },
              { label: "프리셋2", value: "preset2" },
            ]}
            value={selectedPreset}
            onChange={e => setSelectedPreset(e.target.value)}
          />
          <FormSelect
            id="tradeItem"
            label="매매종목"
            variant="standard"
            items={[
              { label: "비트코인", value: "BTC" },
              { label: "이더리움", value: "ETH" },
            ]}
            value={selectedTradeItem}
            onChange={e => setSelectedTradeItem(e.target.value)}
          />
          <FormTextField id="leverage" label="레버리지를 입력해 주세요" />
        </Stack>
      </CardContent>
      <CardFooter>
        <CardButton
          text="초기화"
          className="text-white bg-neutral-700"
          onClick={() => console.log("초기화")}
        />
        <CardButton
          text="저장 및 실행"
          className="text-white bg-brand"
          onClick={() => console.log("저장 및 실행")}
        />
      </CardFooter>
    </Card>
  );
}

export default OasisBotRunCard;
