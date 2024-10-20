import { useEffect } from "react";
import { CardContent, Typography } from "@mui/material";
import { useAtom, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import AlertIcon from "@/components/Icon/AlertIcon";
import {
  presetMenuAtom,
  presetWeightAtom,
  presetWeightInit,
} from "@/datas/preset";
import SliderGraph from "./SliderGraph";
import useSave from "./useSave";

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
