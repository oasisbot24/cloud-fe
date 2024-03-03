import Image from "next/image";
import { Button, Card, Chip, Stack, Typography } from "@mui/material";
import TopNavLayout from "@/components/topnav/TopNavLayout";

export default function FeeInfo() {
  return (
    <TopNavLayout hasBackground={false}>
      <Stack
        direction="column"
        className="h-full w-full items-center justify-between"
      >
        <Stack direction="column" className="gap-2 items-center">
          <Image
            src="/logo/oasis-black.svg"
            width={124}
            height={124}
            alt="logo"
          />
          <Typography className="text-4xl font-semibold font-poppins">
            요금안내
          </Typography>
          <Typography className="text-xl font-regular font-poppins">
            클릭시 결제모듈로 이동합니다.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          className="h-full w-full justify-between items-center"
        >
          <Card className="bg-white h-full w-1/3">
            <Stack className="box-border h-full py-8 px-4 items-center justify-between">
              <Stack direction="column" className="gap-4 items-center">
                <Typography className="font-roboto text-4xl text-stone-500 font-semibold">
                  Free
                </Typography>
                <Typography className="font-roboto text-xl text-stone-500">
                  <span className="text-4xl font-medium">0원</span> / 14일 무료
                </Typography>
              </Stack>
              <Button variant="contained" className="bg-stone-500 w-full p-2">
                14일 무료체험
              </Button>
              <Typography className="text-md font-roboto text-stone-500 font-medium">
                오아시스봇을 처음 이용해보시는분들께 추천합니다.
              </Typography>
              <Stack direction="column" className="gap-2 items-center">
                <Stack direction="row" className="gap-2 items-center">
                  <Chip
                    label="유료요금제 동일 기능"
                    className="bg-stone-500 text-white"
                  />
                  <Chip
                    label="24시간 작동"
                    className="bg-stone-500 text-white"
                  />
                </Stack>
                <Stack direction="row" className="gap-2 items-center">
                  <Chip
                    label="지속적인 기능 및 로직 추가"
                    className="bg-stone-500 text-white"
                  />
                  <Chip
                    label="모바일 확인 가능"
                    className="bg-stone-500 text-white"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </TopNavLayout>
  );
}
