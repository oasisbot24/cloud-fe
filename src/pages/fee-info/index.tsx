import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import InfoCard from "@/components/fee-info/InfoCard";
import TopNavLayout from "@/components/topnav/TopNavLayout";

export default function FeeInfo() {
  return (
    <TopNavLayout hasBackground={false}>
      <Stack
        direction="column"
        className="w-full items-center justify-between gap-8"
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
        <Stack className="lg:flex-row flex-col h-full w-full justify-between items-center gap-4">
          <InfoCard type="free" />
          <InfoCard type="premium" />
          <InfoCard type="platunum" />
        </Stack>
      </Stack>
    </TopNavLayout>
  );
}
