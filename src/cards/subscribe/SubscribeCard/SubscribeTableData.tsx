import { Check, Close } from "@mui/icons-material";
import { TableRowType } from "./SubscribeTableRow";

interface TableType {
  free: Record<TableRowType, JSX.Element | string>;
  promotion: Record<TableRowType, JSX.Element | string>;
  allinone: Record<TableRowType, JSX.Element | string>;
}

const tableData: TableType = {
  free: {
    oasislab: "10번 제한",
    getasset: <Close />,
    oasisbot: <Close />,
    exchange: <Close />,
    "api-connection": <Close />,
    "new-coin": <Close />,
    partner: <Check />,
  },
  promotion: {
    oasislab: "횟수제한없음",
    getasset: <Check />,
    oasisbot: <Check />,
    exchange: "코인원만가능",
    "api-connection": "코인원만가능",
    "new-coin": <Check />,
    partner: <Check />,
  },
  allinone: {
    oasislab: "횟수제한없음",
    getasset: <Check />,
    oasisbot: <Check />,
    exchange: "지원거래소 모두가능",
    "api-connection": "지원거래소 모두가능",
    "new-coin": <Check />,
    partner: <Check />,
  },
};

const subcribeTitleData = {
  free: "Free",
  promotion: "코인원 프로모션",
  allinone: "All in One",
};

const paymentData = {
  1: {
    free: "₩0",
    promotion: "₩19,000",
    allinone: "₩49,000",
  },
  3: {
    free: "₩0",
    promotion: "₩49,000",
    allinone: "₩147,000",
  },
};

export { tableData, subcribeTitleData, paymentData };
