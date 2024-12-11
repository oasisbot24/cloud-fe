import Image from "next/image";

import { ButtonBase, Stack, Typography } from "@mui/material";

import useModalGlobal from "@/components/dialog/useModalGlobal";

interface ErrorDialogProps {
  title: string;
  content: string;
}

export default function ErrorDialog({ title, content }: ErrorDialogProps) {
  const { closeModal } = useModalGlobal();
  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src={"/dialog/modal.png"} alt="modalimage" width={410} height={208} />
      <Stack className="items-center gap-4 p-8">
        <Typography variant="400B">{title}</Typography>
        <Stack className="w-full">
          <Typography variant="200R" className="text-center text-font-2">
            {content}
          </Typography>
        </Stack>
        <Stack direction="row" className="mt-4 w-full justify-center">
          <ButtonBase className="w-[165px] rounded-full bg-brand py-3" onClick={closeModal}>
            <Typography variant="300B" className="text-center text-white">
              확인
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
