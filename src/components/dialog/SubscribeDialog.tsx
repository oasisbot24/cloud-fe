import { useState } from "react";

import Image from "next/image";

import { Alert, ButtonBase, Stack, Typography } from "@mui/material";
import { AxiosError } from "axios";

import useModalGlobal from "@/components/dialog/useModalGlobal";
import { useSubscribeMutation, useSubscribeQuery } from "@/hooks/query/useSubcribe";

export default function SubscribeDialog() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();
  const { deleteSubscribeMutation } = useSubscribeMutation();

  const { closeModal } = useModalGlobal();

  const handleClick = () => {
    const subscribeId = subscribeData?.subscribeId;
    if (!subscribeId) return;
    deleteSubscribeMutation.mutate(subscribeId, {
      onSuccess: () => {
        setStatus("success");
      },
      onError: e => {
        const axiosError = e as AxiosError<ApiResponseType<void>>;
        setError(axiosError.response?.data?.msg ?? "알 수 없는 오류가 발생했습니다.");
        setStatus("error");
      },
    });
  };

  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src={"/dialog/modal.png"} alt="modalimage" width={410} height={208} />
      <Stack className="h-[200px] items-center justify-between gap-4 p-8">
        {status === "idle" && (
          <>
            <Typography variant="400B" className="text-font-2">
              구독 해지
            </Typography>
            <Stack className="w-full">
              <Typography variant="200R" className="text-center text-font-2">
                구독을 해지하시겠습니까?
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
                  해지하기
                </Typography>
              </ButtonBase>
            </Stack>
          </>
        )}
        {status === "success" && (
          <Alert severity="success" className="w-full">
            구독이 해지되었습니다.
          </Alert>
        )}
        {status === "error" && (
          <Alert severity="error" className="w-full">
            {error}
          </Alert>
        )}
        {status !== "idle" && (
          <ButtonBase className="w-full rounded-full bg-brand py-3" onClick={closeModal}>
            <Typography variant="300B" className="text-white">
              닫기
            </Typography>
          </ButtonBase>
        )}
      </Stack>
    </Stack>
  );
}
