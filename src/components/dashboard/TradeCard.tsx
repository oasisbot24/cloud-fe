import { useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  Typography,
  styled,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import getTradeStyle from "@/apis/getTradeStyle";
import Time from "../common/Time";
import TradeLeft from "./TradeLeft";
import TradeRight from "./TradeRight";
import Circular from "./TwoCircularChart";

const BasicCard = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  display: "flex",
}));

const coin = [
  { name: "비트코인", part: 70 },
  { name: "이더리움", part: 20 },
  { name: "기타", part: 10 },
];

export default function TradeCard() {
  const data = useQuery({
    queryKey: ["trade_style"],
    queryFn: getTradeStyle,
  });

  return (
    <BasicCard>
      <CardContent sx={{ width: "50%" }}>
        <TradeLeft
          winRate={
            data && data.data?.winRate === undefined ? 0 : data.data?.winRate
          }
          lossRate={
            data && data.data?.winRate === undefined
              ? 0
              : 100 - data.data?.winRate
          }
          tradeCoin={
            data && data.data?.tradeCoin === undefined
              ? []
              : data.data?.tradeCoin
          }
        />
      </CardContent>
      <Divider orientation="vertical" variant="middle" flexItem />
      <CardContent sx={{ width: "50%" }}>
        <TradeRight trade={data && data.data} />
      </CardContent>
    </BasicCard>
  );
}
