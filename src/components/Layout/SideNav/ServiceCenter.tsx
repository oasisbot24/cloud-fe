import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon";

export default function ServiceCenter() {
  return (
    <Box className="w-full h-[170px] rounded-xl relative overflow-hidden">
      <Image
        src="/nav-cover.png"
        alt="cover"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <Stack className="absolute h-full w-full p-4 justify-between z-[10]">
        <Stack className="rounded-xl w-[35px] h-[35px] bg-white justify-center items-center">
          <Icon src="/icons/control/info.png" size={18} />
        </Stack>
        <Stack className="gap-3">
          <Stack className="gap-1">
            <Typography variant="200B" className="text-white">
              도움이 필요하신가요?
            </Typography>
            <Typography variant="100R" className="text-white">
              이용에 어려운 점이 있으시다면,
            </Typography>
          </Stack>
          <Button variant="contained" className="rounded-lg py-2">
            <Typography variant="200R" className="text-white">
              고객센터
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
