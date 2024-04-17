import { Stack } from "@mui/material";
import SelectButton from "@/cards/CircleChartCard/SelectButton";

const colorList = ["#223CE9", "#FEBD38", "#2BB7F5", "#BEBEC3"];

function SelectButtonList() {
  const focusedAsset = "BTC";
  return (
    <Stack direction="row" className="justify-center gap-3">
      {["BTC", "ETH", "SOJU", "ETC"].map((item, index) => (
        <SelectButton
          key={item}
          color={colorList[index % colorList.length]}
          isFocused={item === focusedAsset}
        >
          {item}
        </SelectButton>
      ))}
    </Stack>
  );
}

export default SelectButtonList;
