import { useRef, useState } from "react";

import { Box, Stack } from "@mui/material";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import CircleChart from "@/cards/dashboard/ChartAssetCard/CircleChart";
import SelectButtonList from "@/cards/dashboard/ChartAssetCard/SelectButtonList";
import { useChart } from "@/hooks/query/useChart";

export default function ChartAssetCard() {
  const {
    coinRatioQuery: { data: coinRatioData },
  } = useChart();
  const [focus, setFocus] = useState<string>(coinRatioData?.[0]?.name ?? "");

  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown = true;
    if (scrollRef.current) {
      scrollRef.current.classList.add("active");
      startX = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (scrollRef.current) {
      scrollRef.current.classList.remove("active");
    }
  };

  const handleMouseUp = () => {
    isDown = false;
    if (scrollRef.current) {
      scrollRef.current.classList.remove("active");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1; // 스크롤 속도
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <Card>
      <CardHeader id="pie-chart" title="실시간 자산 비율" />
      <Stack direction="row" className="mt-[-40px] justify-center">
        <CircleChart coinRatioList={coinRatioData} focus={focus} />
      </Stack>
      <Box
        ref={scrollRef}
        className="absolute bottom-0 w-full overflow-x-auto p-4"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <SelectButtonList coinRatioList={coinRatioData} focus={focus} setFocus={setFocus} />
      </Box>
    </Card>
  );
}
