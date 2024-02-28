import Image from "next/image";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import TopNavLayout from "@/components/topnav/TopNavLayout";

export default function ApiConnection() {
  return (
    <TopNavLayout hasBackground={false}>
      <Card className="px-4 py-6 bg-white h-full w-2/3 mx-auto">
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
            <Typography className="text-4xl font-semibold font-['Poppins']">
              OASIS
            </Typography>
            <Typography className="text-xl font-regular font-['Poppins']">
              Search for the vein of moeny
            </Typography>
          </Stack>

          <Stack direction="column" className="w-full gap-4 items-center">
            <TextField className="w-full" />
            <TextField className="w-full" />
            <TextField className="w-full" />
            <Button variant="contained" className="bg-navy w-[324px] mt-4">
              Api 저장
            </Button>
          </Stack>
        </Stack>
      </Card>
    </TopNavLayout>
  );
}
