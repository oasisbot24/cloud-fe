import { CardContent, Typography } from "@mui/material";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import PresetWeightInfo from "@/cards/preset/PresetWeightInfoCard/PresetWeightInfo";
import AlertIcon from "@/components/Icon/AlertIcon";
import { presetMenuAtom, presetWeightAtom } from "@/datas/preset";
import { sumPresetWeight } from "@/libs/preset";

export default function PresetWeightInfoCard() {
  const [presetMenu] = useAtom(presetMenuAtom);
  const [presetWeight] = useAtom(presetWeightAtom);
  return (
    <Card>
      <CardHeader
        id="history"
        title="매매비중 설정 내역"
        subtitle="총합의 값이 100%가 되어야 합니다."
      />
      {presetMenu === "indicator" && sumPresetWeight(presetWeight) === 100 ? (
        <PresetWeightInfo />
      ) : (
        <CardContent className="mx-auto flex flex-col items-center justify-center">
          <AlertIcon size={200} />
          <Typography variant="400B" className="text-center text-font-1">
            매매비중 설정
          </Typography>
          <Typography variant="200R" className="mt-4 text-center text-font-3">
            총합의 값이 부족합니다.
          </Typography>
          <Typography variant="200R" className="text-center text-font-3">
            <span className="text-brand">매매비중설정</span>에서 총합의 값을 채워주세요.
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
