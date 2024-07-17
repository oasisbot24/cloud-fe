import { Stack } from "@mui/material";
import Column from "./Column";
import GraphText from "./GraphText";
import VerticalSlider from "./VerticalSlider";

function SliderGraph() {
  return (
    <Stack>
      <Stack direction={"row"} gap={3.8}>
        <Column />
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c1" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c2" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c3" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c4" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c5" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c6" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c7" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c8" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c9" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c10" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c11" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="c12" />
        </Stack>
        <Stack gap={2}>
          <VerticalSlider />
          <GraphText text="종합" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SliderGraph;
