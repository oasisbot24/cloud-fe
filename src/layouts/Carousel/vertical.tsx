import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import useComponentSize from "@/hooks/useComponentSize";

interface CarouselProps {
  children: React.ReactNode;
  height: number;
}
const buttonStyle =
  "rounded-full bg-[#FFFFFF9D] z-10 w-[33px] h-[33px] border border-solid border-black shadow-md absolute right-1/2 translate-x-1/2";

export default function VerticalCarousel({ children, height }: CarouselProps) {
  const { size, componentRef } = useComponentSize();
  const [carouselHeight, setCarouselHeight] = useState<number>(0);

  return (
    <Box className="relative w-full" sx={{ height: `${height}px` }}>
      {carouselHeight > 0 && (
        <IconButton
          className={`${buttonStyle}`}
          onClick={() => setCarouselHeight(prev => prev - 100)}
        >
          <KeyboardArrowUp fontSize="medium" />
        </IconButton>
      )}
      <Box
        className="absolute w-full overflow-hidden top-1/2 -translate-y-1/2"
        height={height - 66}
      >
        <Box
          ref={componentRef}
          className="absolute w-full px-6 transition-all duration-500"
          sx={{
            top: `calc(-${carouselHeight}px)`,
          }}
        >
          {children}
        </Box>
      </Box>
      {size.height - height > carouselHeight - 30 && ( // -30 부분 하드코딩 처리됨. 변경 필요.
        <IconButton
          className={`${buttonStyle} bottom-0`}
          onClick={() => setCarouselHeight(prev => prev + 100)}
        >
          <KeyboardArrowDown fontSize="medium" />
        </IconButton>
      )}
    </Box>
  );
}
