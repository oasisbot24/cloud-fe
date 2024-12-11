import Image from "next/image";

import { ButtonBase, Stack, Typography } from "@mui/material";

import useDialogGlobal from "@/components/dialog/useDialogGlobal";

interface ErrorDialogProps {
  title: string;
  content: string;
}

export default function ErrorDialog({ title, content }: ErrorDialogProps) {
  const { closeDialog } = useDialogGlobal();
  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src="/dialog/Dialog.png" alt="Dialogimage" width={410} height={208} />
      <Stack className="items-center gap-4 p-8">
        <Typography variant="400B">{title}</Typography>
        <Stack className="w-full">
          <Typography variant="200R" className="text-center text-font-2">
            {content}
          </Typography>
        </Stack>
        <Stack direction="row" className="mt-4 w-full justify-center">
          <ButtonBase className="w-[165px] rounded-full bg-brand py-3" onClick={closeDialog}>
            <Typography variant="300B" className="text-center text-white">
              확인
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
