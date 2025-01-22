import { Box, Stack } from "@mui/material";
import { useAtom } from "jotai";

import Column from "@/cards/preset/PresetWeightSettingCard/Column";
import GraphText from "@/cards/preset/PresetWeightSettingCard/GraphText";
import VerticalSliderSum from "@/cards/preset/PresetWeightSettingCard/VerticalSilderSum";
import FormTextField from "@/components/form/FormTextField";
import { PresetWeightType, presetWeightAtom } from "@/datas/preset";
import { sumPresetWeight } from "@/libs/preset";

import VerticalSiliderText from "./VerticalSiliderText";

function SliderGraph() {
  const [presetWeight, setPresetWeight] = useAtom(presetWeightAtom);

  return (
    <Stack direction="row" className="h-full gap-8">
      <Column />
      <Stack direction="row" className="h-full w-full items-center justify-between">
        {Object.keys(presetWeight).map((key, index) => {
          return (
            <Stack gap={2} key={key} className="h-full items-center">
              <GraphText text={`${index + 1}`} />
              <VerticalSiliderText counting={presetWeight[key as keyof PresetWeightType]} />
              <Stack direction="row" className="w-full">
                <Box className="w-[10px]" />
                <FormTextField
                  id="graphRate"
                  inputProps={{
                    sx: { textAlign: "center" },
                  }}
                  value={presetWeight[key as keyof PresetWeightType]}
                  endAdornment="%"
                  setValue={v => {
                    const updatedValue = Number(v);
                    setPresetWeight(prev => {
                      const currentWeight = prev[key as keyof PresetWeightType];
                      const sum = sumPresetWeight(prev);
                      const newSum = sum - currentWeight + updatedValue;

                      if (newSum <= 100) {
                        return {
                          ...prev,
                          [key]: updatedValue,
                        };
                      }

                      return prev;
                    });
                  }}
                />

                <Box className="w-[10px]" />
              </Stack>
            </Stack>
          );
        })}
        <Stack gap={2} className="h-full items-center">
          <GraphText text="종합" />
          <VerticalSliderSum sum={sumPresetWeight(presetWeight)} />
          <Stack direction="row" className="w-full">
            <Box className="w-[10px]" />
            <FormTextField
              id="graphRateSum"
              readOnly
              inputProps={{
                sx: { textAlign: "center" },
              }}
              value={sumPresetWeight(presetWeight)}
              endAdornment="%"
            />
            <Box className="w-[10px]" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SliderGraph;
