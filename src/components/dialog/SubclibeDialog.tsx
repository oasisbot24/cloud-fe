import Image from "next/image";
import { useRouter } from "next/router";

import { ButtonBase, Stack, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useAtom } from "jotai";

import { subscribeData } from "@/cards/subscribe/SubscribeCard/SubscribeTableData";
import SubscribeTitleMonthButton from "@/cards/subscribe/SubscribeTitleCard/SubscribeTitleMonthButton";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import { productMonthAtom } from "@/datas/subscribe";
import { useProductQuery, useSubscribeMutation } from "@/hooks/query/useSubcribe";
import { numberToCurrency } from "@/libs/string";

interface SubscribeModalProps {
  productKey: Subscribe.ProductKey;
}

export default function SubscribeModal({ productKey }: SubscribeModalProps) {
  const { push } = useRouter();
  const [month] = useAtom(productMonthAtom);
  const { closeDialog } = useDialogGlobal();
  const {
    productQuery: { data: productData },
  } = useProductQuery();
  const { postSubscribeMutation } = useSubscribeMutation();

  const handleClick = () => {
    postSubscribeMutation.mutate(
      { body: { productId: subscribeData[productKey].month[month].productId } },
      {
        onSuccess: () => {
          push("/mypage");
          closeDialog();
        },
        onError: err => {
          const axiosError = err as AxiosError;
          if (axiosError.response?.status === 404) {
            push("/payment");
          }
          closeDialog();
        },
      },
    );
  };

  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src="/dialog/Dialog.png" alt="Dialogimage" width={410} height={208} />
      <Stack className="items-center gap-4 p-8">
        <Typography variant="400B">서비스 멤버십 확정</Typography>
        <SubscribeTitleMonthButton />
        <Stack className="w-full">
          <Stack className="w-full bg-neutral-200 px-8 py-4">
            <Typography variant="200R" className="text-font-2">
              구독 멤버십:
            </Typography>
            <Typography variant="300B" className="text-font-1">
              {`${subscribeData[productKey].title}: ${numberToCurrency(
                productData?.find(
                  product => product.productId === subscribeData[productKey].month[month].productId,
                )?.productPrice ?? 0,
                "₩",
              )}`}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" className="w-full gap-4">
          <ButtonBase
            className="w-full rounded-full border border-solid border-neutral-500 bg-white py-3"
            onClick={closeDialog}
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
