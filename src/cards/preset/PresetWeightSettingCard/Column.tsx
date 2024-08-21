import { Stack } from "@mui/material";
import GraphText from "./GraphText";

function Column() {
  return (
    <Stack gap={3}>
      <GraphText text="100" />
      <GraphText text="80" />
      <GraphText text="60" />
      <GraphText text="40" />
      <GraphText text="20" />
      <GraphText text="0" />
    </Stack>
  );
}

export default Column;
