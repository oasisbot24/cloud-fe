import React from "react";
import Image from "next/image";
import { Chip, Divider, IconButton, Stack, Typography } from "@mui/material";
import useCoinItem from "@/hooks/common/useCoinItem";
import useMarket from "@/hooks/common/useMarket";

type Props = {
  item: {
    id: number;
    presetName: string;
    coinName: string;
    sellInfo: {
      exchange: string;
      price: number;
      date: string;
    };
    buyInfo: {
      exchange: string;
      price: number;
      date: string;
    };
  };
};

function RealtimeTransactionItem({ item }: Props) {
  const { coinIcon } = useCoinItem();
  const { marketName, marketIcon } = useMarket();

  return (
    <>
      <Stack direction="row" className="items-center gap-1 px-3 py-1">
        <Typography className="text-sm font-bold text-neutral-700">
          {item.presetName}
        </Typography>
        <IconButton sx={{ width: "24px", height: "24px" }}>
          <Image
            src="/icons/basic/setting.png"
            alt="세팅"
            width={24}
            height={24}
          />
        </IconButton>
        <Typography className="text-sm font-bold text-neutral-700">
          /
        </Typography>
        <Typography className="text-sm font-bold text-neutral-700">
          {item.coinName}
        </Typography>
        <Image
          src={coinIcon(item.coinName)}
          alt={item.coinName ?? ""}
          width={16}
          height={16}
        />
      </Stack>
      <Stack
        direction="row"
        className="gap-4 p-3 py-2 items-center justify-between"
      >
        <Stack direction="row" className="gap-4 items-center">
          <Chip label="판매" color="secondary" />
          <Image
            src={marketIcon(item.sellInfo.exchange)}
            alt={item.sellInfo.exchange ?? ""}
            width={24}
            height={24}
          />
          <Typography className="text-xs font-medium">
            {marketName(item.buyInfo.exchange)}
          </Typography>
        </Stack>
        <Stack direction="row" className="gap-4 items-center">
          <Typography className="text-sm font-bold">
            ￦ {item.sellInfo.price.toLocaleString("ko-kr")}
          </Typography>
          <Typography className="text-xs font-medium">
            {item.sellInfo.date}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        className="gap-4 p-3 py-2 items-center justify-between"
      >
        <Stack direction="row" className="gap-4 items-center">
          <Chip label="구매" color="primary" />
          <Image
            src={marketIcon(item.buyInfo.exchange)}
            alt={item.buyInfo.exchange ?? ""}
            width={24}
            height={24}
          />
          <Typography className="text-xs font-medium">
            {marketName(item.buyInfo.exchange)}
          </Typography>
        </Stack>
        <Stack direction="row" className="gap-4 items-center">
          <Typography className="text-sm font-bold">
            ￦ {item.buyInfo.price.toLocaleString("ko-kr")}
          </Typography>
          <Typography className="text-xs font-medium">
            {item.buyInfo.date}
          </Typography>
        </Stack>
      </Stack>
      <Divider className="my-4" />
    </>
  );
}

export default RealtimeTransactionItem;
