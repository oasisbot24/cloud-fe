import { useState } from "react";
import Image from "next/image";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useAtom } from "jotai";
import TopNavLayout from "@/components/topnav/TopNavLayout";
import settingAtom from "@/datas/setting";

export default function ApiConnection() {
  const [setting] = useAtom(settingAtom);
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [password, setPassword] = useState("");
  return (
    <TopNavLayout hasBackground={false}>
      <Card className="px-4 py-6 bg-white h-full w-2/3 mx-auto">
        <Stack
          direction="column"
          className="h-full w-full items-center justify-between"
        >
          <Stack direction="column" className="w-full gap-2 items-center">
            <Image
              src="/logo/oasis-black.svg"
              width={124}
              height={124}
              alt="logo"
            />
            <Typography className="text-4xl font-semibold font-poppins">
              OASIS
            </Typography>
            <Typography className="text-xl font-regular font-poppins">
              Search for the vein of moeny
            </Typography>
            <Typography className="w-full max-w-[300px] mt-4 text-center text-xl font-regular font-poppins p-4 bg-gray-200 text-gray-800">
              OASIS 지정 IP 116.12.02.13
            </Typography>
          </Stack>

          <Stack direction="column" className="w-full gap-4 items-center">
            <Typography className="w-full text-lg font-semibold text-start font-poppins">
              {setting.bankName} 거래소
            </Typography>
            <TextField
              className="w-full"
              label="API KEY"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
            />
            <TextField
              className="w-full"
              label="SECRET KEY"
              value={secretKey}
              onChange={e => setSecretKey(e.target.value)}
            />
            <TextField
              className="w-full"
              label="PASSWORD"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button variant="contained" className="bg-navy w-[324px] mt-4">
              Api 저장
            </Button>
          </Stack>
        </Stack>
      </Card>
    </TopNavLayout>
  );
}
