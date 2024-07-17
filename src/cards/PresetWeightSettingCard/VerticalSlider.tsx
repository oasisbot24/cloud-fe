import { Slider, styled } from "@mui/material";
import Card from "@/cards/Card";

const PortaionSlider = styled(Slider)({
  color: "#223CE9",
  height: 250,
  backgroundColor: "#E1E6EA",
  "& .MuiSlider-track": {
    border: "none",
    width: 30,
    borderRadius: "0 0 10px 10px",
  },
  "& .MuiSlider-thumb": {
    width: 42,
    borderRadius: 30,
    height: 3,
    boxShadow: "0px 2px 5px 0px #000000",
  },
  "& .MuiSlider-rail": {
    width: 30,
    border: "none",
    backgroundColor: "#E1E6EA",
    borderRadius: "10px",
  },
});

function valuetext(value: number) {
  return `${value}`;
}
function VerticalSlider() {
  return (
    <PortaionSlider
      orientation="vertical"
      defaultValue={0}
      valueLabelDisplay="auto"
      // getAriaValueText={valuetext}
    />
  );
}

export default VerticalSlider;
