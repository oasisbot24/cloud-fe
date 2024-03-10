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
import Time from "../common/time";
import TradeLeft from "./TradeLeft";
import TradeRight from "./TradeRight";
import Circular from "./TwoCircularChart";

const BasicCard = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  display: "flex",
}));

const trade = {
  avgWaitTime: 0,
  avgCarryTime: 0,
  avgMonthlyTradeCount: 0,
  maxBalance: 0,
  volatility: 0,
  maxProfit: 0,
  minLoss: 0,
};

export default function TradeCard() {
  const data = useQuery({
    queryKey: ["trade_style"],
    queryFn: getTradeStyle,
  });

  return (
    <BasicCard>
      <CardContent sx={{ width: "50%" }}>
        <TradeLeft
          winRate={data.data?.winRate ?? 0}
          lossRate={100 - (data.data?.winRate ?? 0)}
          tradeCoin={data.data?.tradeCoin ?? []}
        />
      </CardContent>
      <Divider orientation="vertical" variant="middle" flexItem />
      <CardContent sx={{ width: "50%" }}>
        <TradeRight trade={data.data ?? trade} />
      </CardContent>
    </BasicCard>
  );
}
