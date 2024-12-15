import { useEffect } from "react";

import { CardContent, Typography } from "@mui/material";
import { useAtom, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";

import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import SliderGraph from "@/cards/preset/PresetWeightSettingCard/SliderGraph";
import useSave from "@/cards/preset/PresetWeightSettingCard/useSave";
import AlertIcon from "@/components/Icon/AlertIcon";
import { presetMenuAtom, presetWeightAtom, presetWeightInit } from "@/datas/preset";

function PresetWeightSettingCard() {
  const [presetMenu, setPresetMenu] = useAtom(presetMenuAtom);
  const setPresetWeight = useSetAtom(presetWeightAtom);
  const { handleSave } = useSave();

  useEffect(() => {
    return () => {
      setPresetMenu(RESET);
      setPresetWeight(RESET);
    };
  }, []);

  return (
    <Card>
      <CardHeader id="counting" title="매매비중 카운팅 설정" />
      {presetMenu === "indicator" ? (
        <>
          <CardContent className="h-[calc(100%-140px)] w-full">
            <SliderGraph />
          </CardContent>
          <CardFooter>
            <CardButton
              text="초기화"
              className="bg-neutral-700 text-white"
              onClick={() => setPresetWeight(presetWeightInit)}
            />
            <CardButton text="저장" className="bg-brand text-white" onClick={handleSave} />
          </CardFooter>
        </>
      ) : (
        <CardContent className="mx-auto flex flex-col items-center justify-center">
          <AlertIcon size={200} />
          <Typography variant="400B" className="text-center text-font-1">
            프리셋 설정을 완료해주세요.
          </Typography>
          <Typography variant="200R" className="mt-4 text-center text-font-3">
            프리셋 설정을 완료하면 <span className="text-brand">매매비중설정</span>이 가능합니다
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}

export default PresetWeightSettingCard;
