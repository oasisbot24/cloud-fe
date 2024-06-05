import Image from "next/image";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

interface LeverageNoticeDialogProps {
  handleClose: () => void;
}

const description = [
  "API 정책상 격리(isolated) 레버리지는 계정당 한 개로 제한 되어있습니다.",
  "여러 봇을 운용 하실 경우 동일한 레버리지로 적용해야 합니다.",
  "레버리지 수정을 원하실 경우 해당 거래소의 모든 봇을 중지 후 재설정 해주시기 바랍니다.",
];

export default function LeverageNoticeDialog({
  handleClose,
}: LeverageNoticeDialogProps) {
  return (
    <>
      <Box
        className="fixed w-full h-full bg-[#00000033] top-0 left-0 z-50"
        onClick={handleClose}
      />
      <Paper
        className="w-[410px] h-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-50 rounded-xl"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Stack className="bg-brand rounded-t-xl items-center justify-center">
          <Image
            src="/leverage.png"
            width={250}
            height={200}
            alt="lev"
            className="mix-blend-screen"
          />
        </Stack>
        <Stack className="py-6 px-16 gap-4">
          <Typography variant="400B" className="text-center">
            레버리지 설정 안내
          </Typography>
          <ul className="list-outside flex flex-col gap-4 m-0 p-0 pl-4">
            {description.map((desc, index) => (
              <li key={index}>
                <Typography variant="300R" className="text-font-3">
                  {desc}
                </Typography>
              </li>
            ))}
          </ul>
          <Button
            variant="contained"
            className="w-full rounded-full"
            onClick={handleClose}
          >
            확인
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
