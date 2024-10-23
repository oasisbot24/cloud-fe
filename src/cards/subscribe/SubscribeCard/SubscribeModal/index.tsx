import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useAtom } from "jotai";
import { subscribeMonthAtom } from "@/datas/subscribe";
import {
  useProductQuery,
  useSubscribeMutation,
} from "@/hooks/query/useSubcribe";
import useModalGlobal from "@/hooks/useModalGlobal";
import { numberToCurrency } from "@/libs/string";
import SubscribeTitleMonthButton from "../../SubscribeTitleCard/SubscribeTitleMonthButton";
import { subscribeData } from "../SubscribeTableData";
import modalImage from "./modal.png";

interface SubscribeModalProps {
  type: SubscribeType;
}

export default function SubscribeModal({ type }: SubscribeModalProps) {
  const { push } = useRouter();
  const [month] = useAtom(subscribeMonthAtom);
  const { closeModal } = useModalGlobal();
  const {
    productQuery: { data: productData },
  } = useProductQuery();
  const { postSubscribeMutation } = useSubscribeMutation();

  const handleClick = () => {
    postSubscribeMutation.mutate(
      { productId: subscribeData[type].month[month].productId },
      {
        onSuccess: () => {
          push("/mypage");
          closeModal();
        },
        onError: err => {
          const axiosError = err as AxiosError;
          if (axiosError.response?.status === 404) {
            push("/payment");
          }
          closeModal();
        },
      },
    );
  };

  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src={modalImage.src} alt="modalimage" width={410} height={208} />
      <Stack className="p-8 gap-4 items-center">
        <Typography variant="400B">서비스 멤버십 확정</Typography>
        <SubscribeTitleMonthButton />
        <Stack className="w-full">
          <Stack className="w-full bg-neutral-200 px-8 py-4">
            <Typography variant="200R" className="text-font-2">
              구독 멤버십:
            </Typography>
            <Typography variant="300B" className="text-font-1">
              {`${subscribeData[type].title}: ${numberToCurrency(
                productData?.find(
                  product =>
                    product.productId ===
                    subscribeData[type].month[month].productId,
                )?.productPrice ?? 0,
                "₩",
              )}`}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" className="w-full gap-4">
          <ButtonBase
            className="w-full rounded-full bg-white border border-solid border-neutral-500 py-3"
            onClick={closeModal}
          >
            <Typography variant="300B" className="text-neutral-500">
              취소
            </Typography>
          </ButtonBase>
          <ButtonBase
            className="w-full rounded-full bg-brand py-3"
            onClick={handleClick}
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
