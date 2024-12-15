import Image from "next/image";

import { CardContent, Stack } from "@mui/material";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import Chart from "@/cards/preset/PresetIndicatorInfoCard/Chart.png";
import Description from "@/cards/preset/PresetIndicatorInfoCard/Description";
import IndicatorChip from "@/components/chip/IndicatorChip";

export default function PresetIndicatorInfoCard() {
  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader id="setting" title="프리셋 설정 설명" />
      <CardContent className="absolute top-0 h-full w-full">
        <Image src={Chart} alt="프리셋 설정 이미지" width={725} height={240} className="w-full" />
        <Stack className="h-[160px] w-full gap-4" direction="row">
          <Description
            title="설정 보조지표"
            label={
              <>
                <IndicatorChip label="td sequential" color="blue" />
                <IndicatorChip label="하락장" color="blue" />
              </>
            }
            content={`과열된 시장은 카운트가 높아질수록 방향전환의 확률이 높아집니다.
            높은 카운트(7 ~ 12)에 매매 비중을 배치하면 안전한 거래를 할 수 있습니다.`}
          />
          <Description
            title="설정 보조지표"
            label={
              <>
                <IndicatorChip label="td sequential R" color="red" />
                <IndicatorChip label="상승장" color="red" />
              </>
            }
            content={`시장이 과열되기전에 낮은 카운트에서 추격 매수 하는 것이 좋습니다.
            낮은 카운트(1 ~ 6)에 매매 비중을 배치하면 빈번한 거래를 할 수 있습니다.`}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
