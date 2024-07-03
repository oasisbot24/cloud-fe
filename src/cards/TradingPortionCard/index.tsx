import { Slider, styled } from "@mui/material";
import Card from "@/cards/Card";

const PortaionSlider = styled(Slider)({
  color: "#223CE9",
  height: 300,
  "& .MuiSlider-track": {
    border: "none",
    width: 30,
  },
  "& .MuiSlider-thumb": {
    width: 38,
    borderRadius: 2,
    height: 10,
    // "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
    //   boxShadow: "inherit",
    // },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-rail": {
    width: 30,
    border: "none",
    backgroundColor: "#E1E6EA",
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}
function TradingPortionCard() {
  return (
    <Card>
      <PortaionSlider
        className="ml-10"
        orientation="vertical"
        defaultValue={30}
        getAriaValueText={valuetext}
      />
    </Card>
  );
}

export default TradingPortionCard;
