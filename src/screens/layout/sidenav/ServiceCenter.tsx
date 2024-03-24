import { Box, Button, Stack, Typography } from "@mui/material";
import Icon from "@/screens/Icon";

export default function ServiceCenter() {
  return (
    <Box className="w-full h-[170px] bg-[#888888] rounded-xl p-4">
      <Stack className="h-full justify-between">
        <Icon
          src="/dashboard/card-media.png"
          size={35}
          className="rounded-xl"
        />
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
