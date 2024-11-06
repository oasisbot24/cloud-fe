import { useEffect, useRef, useState } from "react";

import { Stack } from "@mui/material";

import Card from "@/cards/Card";

import AdvertisementIndex from "./AdvertisementIndex";
import AdvertisementInfo from "./AdvertisementInfo";

export default function AdvertisementCard() {
  const MAX_INDEX = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startSlider = () => {
    return setInterval(() => {
      setCurrentIndex(prev => (prev + 1 < MAX_INDEX ? prev + 1 : 0));
    }, 5000);
  };

  useEffect(() => {
    if (ref.current) {
      const { width: clientWidth } = ref.current.getBoundingClientRect();
      ref.current.style.marginLeft = `-${(Number(clientWidth) / 3) * currentIndex}px`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const id = startSlider();
    return () => clearInterval(id);
  }, []);

  return (
    <Card>
      <Stack direction="row" className="h-full w-[300%] duration-500" ref={ref}>
        <AdvertisementInfo
          semiTitle="5TH 폴리곤 OPEN"
          title={`꾸준히 보상이 쌓이는\nOASIS 스테이킹`}
          description={`디지털 자산을 블록체인 검증에 활용하도록\n맡기고 보상을 받으세요`}
          bgSrc="/advertisement/ad1.jpg"
        />

        <AdvertisementInfo
          semiTitle="5TH 폴리곤 OPEN"
          title={`꾸준히 보상이 쌓이는\nOASIS 스테이킹`}
          description={`디지털 자산을 블록체인 검증에 활용하도록\n맡기고 보상을 받으세요`}
          bgSrc="/advertisement/ad1.jpg"
        />

        <AdvertisementInfo
          semiTitle="5TH 폴리곤 OPEN"
          title={`꾸준히 보상이 쌓이는\nOASIS 스테이킹`}
          description={`디지털 자산을 블록체인 검증에 활용하도록\n맡기고 보상을 받으세요`}
          bgSrc="/advertisement/ad1.jpg"
        />
      </Stack>
      <AdvertisementIndex maxIndex={MAX_INDEX} currentIndex={currentIndex} />
    </Card>
  );
}
