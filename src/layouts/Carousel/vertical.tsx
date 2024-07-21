import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import useComponentSize from "@/hooks/useComponentSize";

interface CarouselProps {
  children: React.ReactNode;
  height: number;
}
const buttonStyle =
  "rounded-full bg-[#FFFFFF9D] z-10 w-[33px] h-[33px] border border-solid border-black shadow-md";

export default function Carousel({ children, height }: CarouselProps) {
  const { size, componentRef } = useComponentSize();
  const { size: childSize, componentRef: childRef } = useComponentSize();
  const [align, setAlign] = useState<"top" | "bottom">("top");

  return (
    <Box className="w-full h-full px-6">
      {size.height <= height && align === "bottom" && (
        <IconButton
          className={`${buttonStyle}`}
          onClick={() => setAlign("top")}
        >
          <KeyboardArrowUp fontSize="medium" />
        </IconButton>
      )}
      <Box
        ref={childRef}
        className="transition-all duration-500 pb-4"
        sx={{
          top: align === "top" ? "0" : `calc(-100% + ${childSize.height}px)`,
        }}
        height={300}
      >
        {children}
      </Box>
      {size.height <= height && align === "top" && (
        <IconButton
          className={`${buttonStyle}`}
          onClick={() => setAlign("bottom")}
        >
          <KeyboardArrowDown fontSize="medium" />
        </IconButton>
      )}
    </Box>
  );
}
