import Image from "next/image";
import { ButtonBase, Stack, Typography } from "@mui/material";
import useModalGlobal from "@/hooks/useModalGlobal";
import modalImage from "./modal.png";

interface ErrorDialogProps {
  title: string;
  content: string;
}

export default function ErrorDialog({ title, content }: ErrorDialogProps) {
  const { closeModal } = useModalGlobal();
  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src={modalImage.src} alt="modalimage" width={410} height={208} />
      <Stack className="p-8 gap-4 items-center">
        <Typography variant="400B">{title}</Typography>
        <Stack className="w-full">
          <Typography variant="200R" className="text-font-2 text-center">
            {content}
          </Typography>
        </Stack>
        <Stack direction="row" className="w-full justify-center mt-4">
          <ButtonBase
            className="w-[165px] rounded-full bg-brand py-3"
            onClick={closeModal}
          >
            <Typography variant="300B" className="text-white text-center">
              확인
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
