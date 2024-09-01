import { CardContent, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import AlertIcon from "@/components/Icon/AlertIcon";
import Icon from "@/components/Icon/index";
import {
  presetAtom,
  presetMenuAtom,
  presetWeightAtom,
  presetWeightInit,
} from "@/datas/preset";
import { usePresetMutation } from "@/hooks/query/usePreset";
import { presetWeightToPresetData } from "@/libs/preset";
import SliderGraph from "./SliderGraph";

function PresetWeightSettingCard() {
  const {
    postPresetMutation: { mutate: postPreset },
    putPresetMutation: { mutate: putPreset },
  } = usePresetMutation();
  const [preset] = useAtom(presetAtom);
  const [presetMenu] = useAtom(presetMenuAtom);
  const [presetWeight, setPresetWeight] = useAtom(presetWeightAtom);
  const handleSave = () => {
    if (!preset) return;
    if (preset?.id === 0) {
      postPreset({
        ...preset,
        presetData: presetWeightToPresetData(presetWeight),
      });
    } else {
      putPreset({
        id: preset.id,
        body: { ...preset, presetData: presetWeightToPresetData(presetWeight) },
      });
    }
  };
  return (
    <Card>
      <CardHeader
        id="counting"
        title="매매비중 카운팅 설정"
        action={
          <Stack alignItems="center" direction="row">
            <Icon src="/icons/control/info.png" size={15} />
            <Typography
              variant="100R"
              className="text-neutral-600 underline cursor-pointer"
            >
              카운팅이란?
            </Typography>
          </Stack>
        }
      />
      {presetMenu === "indicator" ? (
        <>
          <CardContent className="h-[calc(100%-140px)] w-full">
            <SliderGraph />
          </CardContent>
          <CardFooter>
            <CardButton
              text="초기화"
              className="text-white bg-neutral-700"
              onClick={() => setPresetWeight(presetWeightInit)}
            />
            <CardButton
              text="저장"
              className="text-white bg-brand"
              onClick={handleSave}
            />
          </CardFooter>
        </>
      ) : (
        <CardContent className="mx-auto justify-center items-center flex flex-col">
          <AlertIcon size={200} />
          <Typography variant="400B" className="text-center text-font-1">
            프리셋 설정을 완료해주세요.
          </Typography>
          <Typography variant="200R" className="text-center text-font-3 mt-4">
            프리셋 설정을 완료하면{" "}
            <span className="text-brand">매매비중설정</span>이 가능합니다
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}

export default PresetWeightSettingCard;
