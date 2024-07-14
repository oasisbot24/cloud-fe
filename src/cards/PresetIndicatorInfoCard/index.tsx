import Image from "next/image";
import { CardContent, Stack } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "../CardHeader";
import Chart from "./Chart.png";
import Description from "./Description";

export default function PresetIndicatorInfoCard() {
  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader
        id="setting"
        title="프리셋 설정 설명"
        subtitle="하락장 세팅이 선택되었습니다."
      />
      <CardContent className="absolute top-0 w-full h-full">
        <Image
          src={Chart}
          alt="프리셋 설정 이미지"
          width={725}
          height={240}
          className="w-full"
        />
        <Stack className="gap-4 w-full h-[160px]" direction="row">
          <Description
            title="설정 보조지표"
            content="주가가 너무 많이 오르거나 내려서 곧 방향을 바꿀 시점을 찾아주는 보조지표 입니다. 연속 상승 또는 하락 캔들의 수를 1부터 순차적으로 카운트 하며, 9 이상이 되면 방향 전환의 가능성이 높습니다."
          />
          <Description
            title="매매비중 설정"
            content="자주 거래하는 것이 좋습니다. 낮은 카운트에 매매 비중을 배치하면 빈번한 거래를 할 수 있습니다."
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
