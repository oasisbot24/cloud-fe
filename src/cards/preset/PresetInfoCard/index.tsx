import { useState } from "react";

import { CardContent, Divider } from "@mui/material";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import PresetInfo from "@/cards/preset/PresetInfoCard/PresetInfo";
import UserInfo from "@/cards/preset/PresetInfoCard/UserInfo";
import RoundSelect from "@/components/common/RoundSelect";
import { GA_CTA_EVENTS } from "@/constants/constants";
import {
  presetAtom,
  presetInit,
  presetMenuAtom,
  presetWeightAtom,
  presetWeightInit,
} from "@/datas/preset";
import { usePresetMutation, usePresetQuery } from "@/hooks/query/usePreset";
import { presetDataToPresetWeight } from "@/libs/preset";

export default function PresetInfoCard() {
  const {
    presetQuery: { data: presetData },
  } = usePresetQuery();
  const { deletePresetMutation } = usePresetMutation();
  const [isCreate, setIsCreate] = useState(false);
  const [preset, setPreset] = useAtom(presetAtom);
  const [, setPresetMenu] = useAtom(presetMenuAtom);
  const [, setPresetWeight] = useAtom(presetWeightAtom);

  return (
    <Card>
      <CardContent>
        <UserInfo />
      </CardContent>
      <Divider className="my-8 border-0" />
      <CardHeader
        id="setting"
        title="프리셋"
        subtitle={preset ? preset.presetName : "프리셋을 선택해주세요."}
        action={
          !isCreate && (
            <RoundSelect
              label="프리셋선택"
              items={
                presetData?.map(({ presetName }) => ({
                  label: presetName,
                  value: presetName,
                })) ?? []
              }
              value={preset?.presetName ?? ""}
              onChange={e => {
                const newPreset = presetData?.find(p => p.presetName === e.target.value) ?? null;
                if (newPreset) {
                  setPreset(newPreset);
                  setPresetWeight(presetDataToPresetWeight(newPreset?.presetData));
                } else {
                  setPreset(null);
                  setPresetWeight(presetWeightInit);
                }
              }}
            />
          )
        }
      />
      <CardContent>
        <PresetInfo />
      </CardContent>
      <CardFooter>
        <CardButton
          text="삭제"
          className="bg-sub-3 text-white"
          onClick={() => {
            if (preset) {
              deletePresetMutation.mutate(preset?.id);
              setPreset(null);
              setPresetMenu("preset");
              setPresetWeight(presetWeightInit);
            }
          }}
        />
        <CardButton
          text="프리셋 추가"
          className="bg-neutral-700 text-white"
          onClick={() => {
            setIsCreate(true);
            setPreset(presetInit);
            setPresetMenu("preset");
            setPresetWeight(presetWeightInit);
            sendGAEvent("event", GA_CTA_EVENTS.presetAdd1);
            sendGTMEvent({ event: GA_CTA_EVENTS.presetAdd1 });
          }}
        />
      </CardFooter>
    </Card>
  );
}
