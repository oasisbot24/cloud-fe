import { Box } from "@mui/material";
import {
  BaseCircle,
  CenterCircle,
  ElementCircle,
} from "@/cards/CircleChartCard/Circle";

export default function CircleChart() {
  return (
    <Box className="relative w-[260px] h-[260px] ">
      <BaseCircle />
      <ElementCircle
        fillColorStart="#22A1E9"
        fillColorEnd="#7AD3FF"
        size={90}
        startAngle={270 - 10}
        endAngle={330}
      />
      <ElementCircle
        fillColorStart="#FEBD38"
        fillColorEnd="#FFD572"
        size={95}
        startAngle={180 - 10}
        endAngle={270}
      />
      <ElementCircle
        fillColorStart="#223CE9"
        fillColorEnd="#223CE9"
        size={101}
        startAngle={0}
        endAngle={180}
      />
      <CenterCircle amount="₩ 12,423,000" />
    </Box>
  );
}
