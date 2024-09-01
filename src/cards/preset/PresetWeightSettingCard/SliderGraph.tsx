import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import { PresetWeightType, presetWeightAtom } from "@/datas/preset";
import Column from "./Column";
import GraphText from "./GraphText";
import VerticalSliderSum from "./VerticalSilderSum";
import VerticalSlider from "./VerticalSlider";

const sumPresetWeight = (counting: PresetWeightType) => {
  return Object.values(counting).reduce((acc, cur) => acc + cur, 0);
};

function SliderGraph() {
  const [presetWeight, setPresetWeight] = useAtom(presetWeightAtom);
  return (
    <Stack direction="row" className="h-full gap-8">
      <Column />
      <Stack
        direction="row"
        className="h-full w-full items-center justify-between"
      >
        {Object.keys(presetWeight).map(key => {
          return (
            <Stack gap={2} key={key} className="h-full items-center">
              <VerticalSlider
                value={presetWeight[key as keyof PresetWeightType]}
                onChange={(_, value) => {
                  setPresetWeight(prev => {
                    const sum = sumPresetWeight(prev);
                    if (
                      sum -
                        prev[key as keyof PresetWeightType] +
                        (value as number) <=
                      100
                    ) {
                      return {
                        ...prev,
                        [key]: value as number,
                      };
                    }
                    return prev;
                  });
                }}
              />
              <GraphText text={key} />
            </Stack>
          );
        })}
        <Stack gap={2} className="h-full items-center">
          <VerticalSliderSum sum={sumPresetWeight(presetWeight)} />
          <GraphText text="종합" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SliderGraph;
