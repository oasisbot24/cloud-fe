import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import AdvertismentButton from "@/cards/AdvertisementCard/AdvertismentButton";

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
    <Box className="relative w-full h-full">
      <Box className="w-full h-full absolute">
        <Image
          src={bgSrc}
          alt="ad"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <Box className="bg-black opacity-50 w-full h-full" />
      </Box>
      <Stack className="absolute text-white p-4 gap-6">
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
