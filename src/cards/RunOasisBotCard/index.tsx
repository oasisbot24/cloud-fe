import React, { useState } from "react";
import { CardActions, CardContent } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import CustomTextField from "@/components/common/CustomTextField";
import OasisBotButton from "@/components/oasisbot/OasisBotButton";
import OasisBotMarketSelect from "@/components/oasisbot/OasisBotMarketSelect";
import OasisBotSelect from "@/components/oasisbot/OasisBotSelect";

function RunOasisBotCard() {
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
        <CustomTextField id="budget" title="주문가능 금액" variant="standard" />
        <CustomTextField
          id="transactionAmount"
          title="거래금액을 입력 (최소 ₩5,000)"
          variant="standard"
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
        <CustomTextField
          id="leverage"
          title="레버리지를 입력해 주세요"
          variant="standard"
          mb="0"
        />
      </CardContent>
      <CardActions style={{ padding: 0 }}>
        <OasisBotButton
          backgroundColor="#68696C"
          textColor="#fff"
          onClick={() => console.log("초기화")}
        >
          초기화
        </OasisBotButton>
        <OasisBotButton
          backgroundColor="#223CE9"
          textColor="#fff"
          onClick={() => console.log("저장 및 실행")}
        >
          저장 및 실행
        </OasisBotButton>
      </CardActions>
    </Card>
  );
}

export default RunOasisBotCard;
