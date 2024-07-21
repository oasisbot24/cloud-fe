import { useState } from "react";
import { Stack } from "@mui/material";
import Column from "./Column";
import GraphText from "./GraphText";
import VerticalSliderSum from "./VerticalSilderSum";
import VerticalSlider from "./VerticalSlider";

function SliderGraph() {
  const [c1, setC1] = useState<number | number[]>(0);
  const [c2, setC2] = useState<number | number[]>(0);
  const [c3, setC3] = useState<number | number[]>(0);
  const [c4, setC4] = useState<number | number[]>(0);
  const [c5, setC5] = useState<number | number[]>(0);
  const [c6, setC6] = useState<number | number[]>(0);
  const [c7, setC7] = useState<number | number[]>(0);
  const [c8, setC8] = useState<number | number[]>(0);
  const [c9, setC9] = useState<number | number[]>(0);
  const [c10, setC10] = useState<number | number[]>(0);
  const [c11, setC11] = useState<number | number[]>(0);
  const [c12, setC12] = useState<number | number[]>(0);
  const [cSum, setCSum] = useState<number | number[]>(0);
  return (
    <Stack>
      <Stack direction={"row"} gap={3.8}>
        <Column />
        <Stack gap={2}>
          <VerticalSlider
            value={c1}
            setValue={setC1}
            max={
              100 -
              ((c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c1" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c2}
            setValue={setC2}
            max={
              100 -
              ((c1 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c2" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c3}
            setValue={setC3}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c3" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c4}
            setValue={setC4}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c4" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c5}
            setValue={setC5}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c5" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c6}
            setValue={setC6}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c6" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c7}
            setValue={setC7}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c7" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c8}
            setValue={setC8}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c8" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c9}
            setValue={setC9}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c10 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c9" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c10}
            setValue={setC10}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c11 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c10" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c11}
            setValue={setC11}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c12 as number))
            }
          />
          <GraphText text="c11" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider
            value={c12}
            setValue={setC12}
            max={
              100 -
              ((c1 as number) +
                (c2 as number) +
                (c3 as number) +
                (c4 as number) +
                (c5 as number) +
                (c6 as number) +
                (c7 as number) +
                (c8 as number) +
                (c9 as number) +
                (c10 as number) +
                (c11 as number))
            }
          />
          <GraphText text="c12" />
        </Stack>
        <Stack gap={2}>
          <VerticalSliderSum
            sum={
              (c1 as number) +
              (c2 as number) +
              (c3 as number) +
              (c4 as number) +
              (c5 as number) +
              (c6 as number) +
              (c7 as number) +
              (c8 as number) +
              (c9 as number) +
              (c10 as number) +
              (c11 as number) +
              (c12 as number)
            }
          />
          <GraphText text="종합" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SliderGraph;
