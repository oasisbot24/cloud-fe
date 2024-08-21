import { CardContent } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import PresetSetting from "@/cards/preset/PresetSettingCard/PresetSetting";
import presetAtom, { presetInit } from "@/datas/preset";

export default function PresetSettingCard() {
  const [preset, setPreset] = useAtom(presetAtom);
  return (
    <Card>
      <CardHeader
        id="setting"
        title="프리셋 설정"
        subtitle={
          preset
            ? `${preset.presetName}이 선택되었습니다`
            : "프리셋 선택이 필요합니다."
        }
      />
      <CardContent>
        <PresetSetting />
      </CardContent>
      <CardFooter>
        <CardButton
          text="초기화"
          className="text-white bg-neutral-700"
          onClick={() => setPreset(presetInit)}
        />
        <CardButton
          text="저장"
          className="text-white bg-brand"
          onClick={() => console.log("다음")}
        />
      </CardFooter>
    </Card>
  );
}
