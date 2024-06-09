import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import useComponentSize from "@/hooks/useComponentSize";

interface CarouselProps {
  children: React.ReactNode;
  minWidth: number;
}
const buttonStyle =
  "fixed rounded-full bg-[#FFFFFF9D] top-1/2 -translate-y-1/2 z-10 w-[44px] h-[44px] border border-solid border-black shadow-md";

export default function Carousel({ children, minWidth }: CarouselProps) {
  const { size, componentRef } = useComponentSize();
  const { size: childSize, componentRef: childRef } = useComponentSize();
  const [align, setAlign] = useState<"left" | "right">("left");
  return (
    <Box
      ref={componentRef}
      className="w-full"
      sx={{ height: `${childSize.height}px` }}
    >
      <Box className="absolute w-full" sx={{ minWidth: `${minWidth}px` }}>
        {size.width <= minWidth && align === "right" && (
          <IconButton
            className={`left-[calc(80px + 4rem)] ${buttonStyle}`}
            onClick={() => setAlign("left")}
          >
            <KeyboardArrowLeft fontSize="medium" />
          </IconButton>
        )}
        <Box
          ref={childRef}
          className="absolute w-full transition-all duration-500"
          sx={{
            left: align === "left" ? "0" : `calc(-100% + ${size.width}px)`,
          }}
        >
          {children}
        </Box>
        {size.width <= minWidth && align === "left" && (
          <IconButton
            className={`right-0 ${buttonStyle}`}
            onClick={() => setAlign("right")}
          >
            <KeyboardArrowRight fontSize="medium" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
