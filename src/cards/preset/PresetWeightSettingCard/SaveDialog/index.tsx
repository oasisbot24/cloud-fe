import Image from "next/image";

import { ButtonBase, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

import { presetAtom, presetWeightAtom } from "@/datas/preset";
import { usePresetMutation } from "@/hooks/query/usePreset";
import useModalGlobal from "@/hooks/useModalGlobal";
import { presetWeightToPresetData } from "@/libs/preset";

import modalImage from "./modal.png";

export default function SaveDialog() {
  const {
    postPresetMutation: { mutate: postPreset },
    putPresetMutation: { mutate: putPreset },
  } = usePresetMutation();

  const [preset] = useAtom(presetAtom);
  const [presetWeight] = useAtom(presetWeightAtom);
  const { closeModal } = useModalGlobal();

  const handleClick = () => {
    if (!preset) return;
    if (preset?.id === 0) {
      postPreset(
        {
          body: {
            ...preset,
            presetData: presetWeightToPresetData(presetWeight),
          },
        },
        {
          onSuccess: () => {
            closeModal();
          },
        },
      );
    } else {
      putPreset(
        {
          id: preset.id,
          body: {
            ...preset,
            presetData: presetWeightToPresetData(presetWeight),
          },
        },
        {
          onSuccess: () => {
            closeModal();
          },
        },
      );
    }
  };

  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src={modalImage.src} alt="modalimage" width={410} height={208} />
      <Stack className="items-center gap-4 p-8">
        <Typography variant="400B">프리셋 저장</Typography>
        <Stack className="w-full">
          <Typography variant="200R" className="text-center text-font-2">
            프리셋을 저장하시겠습니까?
          </Typography>
        </Stack>
        <Stack direction="row" className="mt-4 w-full gap-4">
          <ButtonBase
            className="w-full rounded-full border border-solid border-neutral-500 bg-white py-3"
            onClick={closeModal}
          >
            <Typography variant="300B" className="text-neutral-500">
              취소
            </Typography>
          </ButtonBase>
          <ButtonBase className="w-full rounded-full bg-brand py-3" onClick={handleClick}>
            <Typography variant="300B" className="text-white">
              확인
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
