import { useState } from "react";
import { Stack } from "@mui/material";
import Column from "./Column";
import GraphText from "./GraphText";
import VerticalSliderSum from "./VerticalSilderSum";
import VerticalSlider from "./VerticalSlider";

interface ContingType {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  c6: number;
  c7: number;
  c8: number;
  c9: number;
  c10: number;
  c11: number;
  c12: number;
}

const initCounting: ContingType = {
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
  c10: 0,
  c11: 0,
  c12: 0,
};

const sumConting = (counting: ContingType) => {
  return Object.values(counting).reduce((acc, cur) => acc + cur, 0);
};

function SliderGraph() {
  const [counting, setCounting] = useState<ContingType>(initCounting);
  return (
    <Stack direction="row" className="h-full gap-8">
      <Column />
      <Stack
        direction="row"
        className="h-full w-full items-center justify-between"
      >
        {Object.keys(counting).map(key => {
          return (
            <Stack gap={2} key={key} className="h-full items-center">
              <VerticalSlider
                value={counting[key as keyof ContingType]}
                onChange={(_, value) => {
                  setCounting(prev => {
                    const sum = sumConting(prev);
                    if (
                      sum -
                        prev[key as keyof ContingType] +
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
          <VerticalSliderSum sum={sumConting(counting)} />
          <GraphText text="종합" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SliderGraph;
