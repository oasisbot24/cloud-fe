import Image from "next/image";
import { ButtonBase, Stack, Typography } from "@mui/material";
import useModalGlobal from "@/hooks/useModalGlobal";
import modalImage from "./modal.png";

export default function PromotionModal() {
  const { closeModal } = useModalGlobal();
  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src={modalImage.src} alt="modalimage" width={410} height={208} />
      <Stack className="p-8 gap-4 items-center h-[200px] justify-between">
        <Typography variant="400B" className="text-font-2">
          프로모션 코드
        </Typography>
        <Stack className="w-full">
          <Typography variant="200R" className="text-sub-3 text-center">
            올바르지 않은 코드입니다.
          </Typography>
        </Stack>
        <Stack direction="row" className="w-full gap-4 mt-4">
          <ButtonBase
            className="w-full rounded-full bg-brand py-3"
            onClick={closeModal}
          >
            <Typography variant="300B" className="text-white">
              확인
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
