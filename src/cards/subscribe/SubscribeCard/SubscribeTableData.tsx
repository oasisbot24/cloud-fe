import { Check, Close } from "@mui/icons-material";
import { Stack } from "@mui/material";

import { TableRowType } from "@/cards/subscribe/SubscribeCard/SubscribeTableRow";
import Icon from "@/components/Icon";

interface TableType {
  free: Record<TableRowType, JSX.Element | string>;
  basic: Record<TableRowType, JSX.Element | string>;
  premium: Record<TableRowType, JSX.Element | string>;
}

function UpbitIcon() {
  return (
    <Stack direction="row" gap={1} className="flex items-center justify-center">
      <Icon src="/icons/exchange/upbit.png" size={25} />
      <div className="flex items-center justify-center">업비트만가능</div>
    </Stack>
  );
}

function AllText() {
  return (
    <Stack direction="row" gap={1} className="flex items-center justify-center">
      <div className="font-bold">All</div> 지원거래소 모두가능
    </Stack>
  );
}

const tableData: TableType = {
  free: {
    oasislab: "개발예정",
    activebot: <Close />,
    getasset: <Close />,
    oasisbot: <Close />,
    exchange: <Close />,
    "api-connection": <Close />,
    "new-coin": <Close />,
    partner: <Check />,
  },
  basic: {
    oasislab: "개발예정",
    activebot: "3개",
    getasset: <Check />,
    oasisbot: <Check />,
    exchange: <UpbitIcon />,
    "api-connection": <UpbitIcon />,
    "new-coin": <Check />,
    partner: <Check />,
  },
  premium: {
    oasislab: "개발예정",
    activebot: "8개",
    getasset: <Check />,
    oasisbot: <Check />,
    exchange: <AllText />,
    "api-connection": <AllText />,
    "new-coin": <Check />,
    partner: <Check />,
  },
};

const subscribeData: {
  [key in Subscribe.ProductKey]: {
    title: string;
    month: {
      [monthKey in Subscribe.ProductMonth]: {
        productId: number;
      };
    };
  };
} = {
  free: {
    title: "Free",
    month: {
      0: {
        productId: 0,
      },
      1: {
        productId: 0,
      },
      3: {
        productId: 0,
      },
    },
  },
  basic: {
    title: "Basic",
    month: {
      0: {
        productId: 999,
      },
      1: {
        productId: 1,
      },
      3: {
        productId: 2,
      },
    },
  },
  premium: {
    title: "Premium",
    month: {
      0: {
        productId: 999,
      },
      1: {
        productId: 3,
      },
      3: {
        productId: 4,
      },
    },
  },
};

export { tableData, subscribeData };
