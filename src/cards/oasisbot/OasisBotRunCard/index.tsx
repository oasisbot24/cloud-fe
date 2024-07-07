import React, { useState } from "react";
import { CardActions, CardContent, Stack } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import CardButton from "@/components/common/CardButton";
import CustomTextField from "@/components/common/CustomTextField";
import OasisBotMarketSelect from "@/components/oasisbot/OasisBotMarketSelect";
import OasisBotSelect from "@/components/oasisbot/OasisBotSelect";

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
          <OasisBotMarketSelect
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
          <CustomTextField id="budget" label="주문가능 금액" />
          <CustomTextField
            id="transactionAmount"
            label="거래금액을 입력 (최소 ₩5,000)"
          />
          <OasisBotSelect
            id="presets"
            title="설정 프리셋"
            variant="standard"
            items={[
              { label: "프리셋1", value: "preset1" },
              { label: "프리셋2", value: "preset2" },
            ]}
            value={selectedPreset}
            onChange={setSelectedPreset}
          />
          <OasisBotSelect
            id="tradeItem"
            title="매매종목"
            variant="standard"
            items={[
              { label: "비트코인", value: "BTC" },
              { label: "이더리움", value: "ETH" },
            ]}
            value={selectedTradeItem}
            onChange={setSelectedTradeItem}
          />
          <CustomTextField id="leverage" label="레버리지를 입력해 주세요" />
        </Stack>
      </CardContent>
      <CardActions style={{ paddingLeft: 0, paddingRight: 0 }}>
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
      </CardActions>
    </Card>
  );
}

export default OasisBotRunCard;
