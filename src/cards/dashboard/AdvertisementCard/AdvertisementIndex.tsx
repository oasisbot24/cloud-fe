import { Box, Stack } from "@mui/material";

interface AdvertisementIndexProps {
  maxIndex: number;
  currentIndex: number;
}

export default function AdvertisementIndex({
  maxIndex,
  currentIndex,
}: AdvertisementIndexProps) {
  return (
    <Stack
      direction="row"
      className="absolute bottom-0 w-full justify-center gap-2 pb-4"
    >
      {[...Array(maxIndex)].map((_, index) => (
        <Box
          key={index}
          className="h-[8px] bg-white rounded-full"
          sx={{
            opacity: currentIndex === index ? 1 : 0.5,
            width: currentIndex === index ? "26px" : "8px",
            transition: "all 0.5s",
          }}
        />
      ))}
    </Stack>
  );
}
