import { Slider, styled } from "@mui/material";

const PortaionSlider = styled(Slider)(({ value }) => ({
  color: "#223CE9",
  height: "100%",
  backgroundColor: "#E1E6EA",
  "&.Mui-disabled .MuiSlider-track": {
    color: "#223CE9",
  },
  "& .MuiSlider-track": {
    border: "none",
    width: 30,
    borderRadius: value === 100 ? "10px 10px 10px 10px" : "0 0 10px 10px",
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
}));

interface Props {
  counting: number;
}
function VerticalSiliderText({ counting }: Props) {
  return (
    <div className="h-full">
      <PortaionSlider orientation="vertical" value={counting} disabled />
    </div>
  );
}

export default VerticalSiliderText;
