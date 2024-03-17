import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { enqueueSnackbar } from "notistack";
import settingAtom from "@/datas/setting";

export default function SetKey() {
  const [setting] = useAtom(settingAtom);
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [password, setPassword] = useState("");
  const saveApi = () => {
    enqueueSnackbar("Api key가 저장되었습니다!", { variant: "success" });
  };
  return (
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
      <Button
        variant="contained"
        className="bg-navy w-[324px] mt-4"
        onClick={saveApi}
      >
        Api 저장
      </Button>
    </Stack>
  );
}
