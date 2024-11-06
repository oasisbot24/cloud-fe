import Image from "next/image";

import { Box, Stack, Typography } from "@mui/material";

import AdvertismentButton from "./AdvertismentButton";

interface AdvertisementInfoProps {
  semiTitle: string;
  title: string;
  description: string;
  bgSrc: string;
}

export default function AdvertisementInfo({
  semiTitle,
  title,
  description,
  bgSrc,
}: AdvertisementInfoProps) {
  return (
    <Box className="relative h-full w-full">
      <Box className="absolute h-full w-full">
        <Image
          src={bgSrc}
          alt="ad"
          className="h-full w-full"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <Box className="h-full w-full bg-black opacity-50" />
      </Box>
      <Stack className="absolute gap-6 p-4 text-white">
        <Stack className="max-w-[250px] gap-2">
          <Typography variant="100B">{semiTitle}</Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="200M">{description}</Typography>
        </Stack>
        <AdvertismentButton>
          <Typography variant="300B">자세히보기</Typography>
        </AdvertismentButton>
      </Stack>
    </Box>
  );
}
