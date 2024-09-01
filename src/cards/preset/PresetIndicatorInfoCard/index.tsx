import Image from "next/image";
import { CardContent, Stack, Typography } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "../../CardHeader";
import Chart from "./Chart.png";
import Description from "./Description";

function RoundChip({ text, color }: { text: string; color: "blue" | "red" }) {
  return (
    <div
      className={`w-fit shrink-0 h-fit rounded-full border border-solid px-2 ${
        color === "blue"
          ? "border-brand text-brand"
          : "border-[#FF5A5F] text-[#FF5A5F]"
      }
        `}
    >
      <Typography variant="100M">{text}</Typography>
    </div>
  );
}

export default function PresetIndicatorInfoCard() {
  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader id="setting" title="프리셋 설정 설명" />
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
            label={
              <>
                <RoundChip text="td sequential" color="blue" />
                <RoundChip text="하락장" color="blue" />
              </>
            }
            content={`과열된 시장은 카운트가 높아질수록 방향전환의 확률이 높아집니다.
            높은 카운트(7 ~ 12)에 매매 비중을 배치하면 안전한 거래를 할 수 있습니다.`}
          />
          <Description
            title="설정 보조지표"
            label={
              <>
                <RoundChip text="td sequential Co." color="red" />
                <RoundChip text="상승장" color="red" />
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
