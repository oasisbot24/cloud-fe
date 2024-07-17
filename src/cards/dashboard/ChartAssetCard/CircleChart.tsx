import { Box } from "@mui/material";
import { CoinRatio } from "@/apis/chart/coinRatio";
import {
  BaseCircle,
  CenterCircle,
  ElementCircle,
} from "@/cards/dashboard/ChartAssetCard/Circle";
import { numberToCurrency } from "@/libs/string";

interface CircleChartProps {
  coinRatioList?: CoinRatio[];
  focus?: string;
}

const coinColors = [
  {
    fillColorStart: "#22A1E9",
    fillColorEnd: "#7AD3FF",
  },
  {
    fillColorStart: "#FEBD38",
    fillColorEnd: "#FFD572",
  },
  {
    fillColorStart: "#223CE9",
    fillColorEnd: "#223CE9",
  },
];

export default function CircleChart({
  coinRatioList,
  focus,
}: CircleChartProps) {
  const coinRatioPercentList = [0];
  let sum = 0;
  coinRatioList?.forEach(coinRatio => {
    sum += coinRatio.ratio;
    coinRatioPercentList.push(Math.round(sum) * 3.6);
  });
  let focusIndex =
    coinRatioList?.findIndex(coinRatio => coinRatio.name === focus) ?? -1;
  if (focusIndex === -1) focusIndex = 0;
  return (
    <Box className="relative w-[260px] h-[260px] ">
      <BaseCircle />
      {coinRatioList?.map((coinRatio, index) => (
        <ElementCircle
          key={coinRatio.name}
          fillColorStart={coinColors[index].fillColorStart}
          fillColorEnd={coinColors[index].fillColorEnd}
          size={100 - 2 * index + (focusIndex === index ? 4 : -4)}
          startAngle={coinRatioPercentList[index]}
          endAngle={coinRatioPercentList[index + 1]}
        />
      ))}
      <CenterCircle
        percent={coinRatioList?.[focusIndex]?.ratio}
        amount={numberToCurrency(
          Number(coinRatioList?.[focusIndex]?.price),
          "₩",
        )}
      />
    </Box>
  );
}
