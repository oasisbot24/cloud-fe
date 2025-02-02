import { Stack } from "@mui/material";

import SelectButton from "@/cards/dashboard/ChartAssetCard/SelectButton";

const colorList = ["#223CE9", "#FEBD38", "#2BB7F5", "#BEBEC3"];

interface SelectButtonListProps {
  coinRatioList?: Account.HoldingCoinRatioT[];
  focus: string;
  setFocus: (focus: string) => void;
}

function SelectButtonList({ coinRatioList, focus, setFocus }: SelectButtonListProps) {
  const className = `justify-center gap-3}`;

  return (
    <Stack
      direction="row"
      className={className}
      style={{
        width:
          coinRatioList && coinRatioList.length > 5
            ? `${100 + 10 * (coinRatioList.length - 5)}%`
            : "",
      }}
    >
      {coinRatioList?.map((coinRatio, index) => (
        <SelectButton
          key={coinRatio.name}
          color={colorList[index % colorList.length]}
          isFocused={coinRatio.name === focus}
          onClick={() => setFocus(coinRatio.name)}
        >
          {coinRatio.name.toUpperCase()}
        </SelectButton>
      ))}
    </Stack>
  );
}

export default SelectButtonList;
