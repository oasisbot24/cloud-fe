import { Slider, styled } from "@mui/material";
import Card from "@/cards/Card";

const PortaionSlider = styled(Slider)({
  color: "#223CE9",
  height: 250,
  backgroundColor: "#E1E6EA",
  "&.Mui-disabled .MuiSlider-track": {
    color: "#223CE9",
  },
  "& .MuiSlider-track": {
    border: "none",
    width: 30,
    borderRadius: "0 0 10px 10px",
  },
  "& .MuiSlider-thumb": {
    width: 0,
    borderRadius: 30,
    height: 0,
    boxShadow: "0px 2px 5px 0px #000000",
  },
  "& .MuiSlider-rail": {
    width: 30,
    border: "none",
    backgroundColor: "#E1E6EA",
    borderRadius: "10px",
  },
});

interface Props {
  sum: number;
}
function VerticalSliderSum({ sum }: Props) {
  return <PortaionSlider orientation="vertical" value={sum} disabled />;
}

export default VerticalSliderSum;
