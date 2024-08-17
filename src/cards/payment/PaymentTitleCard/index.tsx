import { Box, Stack, Typography } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import bg from "./bg.png";

function Tag({ title, id }: { title: string; id: string }) {
  return (
    <Stack direction="row" className="gap-1">
      <Icon src={`/apiconnection/${id}.png`} size={16} />
      <Typography variant="100B" className="text-white">
        {title}
      </Typography>
    </Stack>
  );
}

export default function PaymentTitleCard() {
  return (
    <Card sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <Stack className="md:px-32 xl:px-64 items-center w-full">
        <Stack direction="row" className="w-full justify-between items-center">
          <CardHeader title="결제 정보 입력" id="bar-graph" isDark />
          <Stack direction="row" className="hidden lg:flex gap-6">
            <Tag title="The Next" id="1" />
            <Tag title="Wave" id="2" />
            <Tag title="of" id="3" />
            <Tag title="Innovation" id="4" />
          </Stack>
          <Box className="w-[174px] p-4">
            <Box className="px-4 py-1 w-fit ms-auto rounded-full bg-white">
              <Logo color="black" size="S" />
            </Box>
          </Box>
        </Stack>
        <Stack className="w-full items-center justify-center gap-4 mt-4">
          <Typography variant="h4" className="text-white">
            결제 정보 입력
          </Typography>
          <Stack className="w-full items-center gap-1">
            <Typography variant="200R" className="text-white">
              오아시스 서비스 구독을 감사드립니다.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
