import { Check, Close } from "@mui/icons-material";

import { TableRowType } from "./SubscribeTableRow";

interface TableType {
  free: Record<TableRowType, JSX.Element | string>;
  basic: Record<TableRowType, JSX.Element | string>;
  premium: Record<TableRowType, JSX.Element | string>;
}

const tableData: TableType = {
  free: {
    oasislab: "개발예정",
    getasset: <Close />,
    oasisbot: <Close />,
    exchange: <Close />,
    "api-connection": <Close />,
    "new-coin": <Close />,
    partner: <Check />,
  },
  basic: {
    oasislab: "개발예정",
    getasset: <Check />,
    oasisbot: <Check />,
    exchange: "업비트만가능",
    "api-connection": "업비트만가능",
    "new-coin": <Check />,
    partner: <Check />,
  },
  premium: {
    oasislab: "개발예정",
    getasset: <Check />,
    oasisbot: <Check />,
    exchange: "지원거래소 모두가능",
    "api-connection": "지원거래소 모두가능",
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
