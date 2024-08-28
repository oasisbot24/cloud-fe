import { CardContent, Typography } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import PresetSetting from "@/cards/preset/PresetSettingCard/PresetSetting";
import AlertIcon from "@/components/Icon/AlertIcon";
import { presetAtom, presetInit, presetMenuAtom } from "@/datas/preset";

export default function PresetSettingCard() {
  const [preset, setPreset] = useAtom(presetAtom);
  const [, setPresetMenu] = useAtom(presetMenuAtom);
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
      {preset ? (
        <>
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
              text="다음"
              className="text-white bg-brand"
              onClick={() => setPresetMenu("indicator")}
            />
          </CardFooter>
        </>
      ) : (
        <CardContent className="mx-auto justify-center items-center flex flex-col">
          <AlertIcon size={200} />
          <Typography variant="400B" className="text-center text-font-1">
            프리셋을 선택해주세요.
          </Typography>
          <Typography variant="200R" className="text-center text-font-3 mt-4">
            프리셋을 선택하면 <span className="text-brand">프리셋설정</span>이
            가능합니다
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
