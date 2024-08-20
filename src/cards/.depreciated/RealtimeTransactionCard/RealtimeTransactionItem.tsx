import Image from "next/image";
import { Chip, Divider, IconButton, Stack, Typography } from "@mui/material";
import CoinIcon from "@/components/Icon/CoinIcon";
import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import { exchangeToKorean } from "@/libs/string";

interface Props {
  item: RealtimeTransaction;
}

function RealtimeTransactionItem({ item }: Props) {
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
        <CoinIcon coin={item.coinName} size={16} />
      </Stack>
      <Stack
        direction="row"
        className="gap-4 p-3 py-2 items-center justify-between"
      >
        <Stack direction="row" className="gap-4 items-center">
          <Chip label="판매" color="secondary" />
          <ExchangeIcon exchange={item.sellInfo.exchange} size={24} />
          <Typography className="text-xs font-medium">
            {exchangeToKorean(item.buyInfo.exchange)}
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
          <Chip label="구매" className="text-white bg-sub-2" />
          <ExchangeIcon exchange={item.buyInfo.exchange} size={24} />
          <Typography className="text-xs font-medium">
            {exchangeToKorean(item.buyInfo.exchange)}
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
