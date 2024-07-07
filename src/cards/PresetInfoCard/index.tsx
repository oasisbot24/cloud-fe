import { useState } from "react";
import {
  Avatar,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import GeneralInfo from "@/cards/PresetInfoCard/GeneralInfo";
import CardButton from "@/components/common/CardButton";
import OasisBotMarketSelect from "@/components/oasisbot/OasisBotMarketSelect";

export default function PresetInfoCard() {
  const [selectedMarket, setSelectedMarket] = useState<string>("");

  return (
    <Card>
      <CardContent>
        <Stack className="w-full items-center gap-8">
          <Stack className="items-center gap-3">
            <Avatar className="w-[108px] h-[108px]" />
            <Typography variant="300B" className="text-font-1">
              유저네임
            </Typography>
            <Typography variant="200R" className="text-font-3">
              #PLATINUM #단타 #도전적투자자
            </Typography>
          </Stack>
          <GeneralInfo type="exchange" />
          <GeneralInfo type="balance" />
          <GeneralInfo type="time" />
        </Stack>
      </CardContent>
      <CardHeader
        id="bot-start"
        title="오아시스 BOT 실행"
        subtitle="거래소를 선택해주세요."
        action={
          <OasisBotMarketSelect
            label="거래소 선택"
            items={[{ label: "하락장 세팅", value: "down" }]}
            value={selectedMarket}
            onChange={setSelectedMarket}
          />
        }
      />
      <CardContent>
        <Stack className="w-full items-center gap-8">
          <GeneralInfo type="exchange" />
          <GeneralInfo type="balance" />
          <GeneralInfo type="time" />
        </Stack>
      </CardContent>
      <CardActions style={{ paddingLeft: 0, paddingRight: 0 }}>
        <CardButton
          text="삭제"
          className="text-white bg-neutral-700"
          onClick={() => console.log("삭제")}
        />
        <CardButton
          text="수정"
          className="text-white bg-brand"
          onClick={() => console.log("수정")}
        />
      </CardActions>
      <CardActions />
    </Card>
  );
}
