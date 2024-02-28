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
import tradeStyle from "@/apis/tradeStyle";
import TradeLeft from "./TradeLeft";
import TradeRight from "./TradeRight";
import Circular from "./TwoCircularChart";

const BasicCard = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  display: "flex",
}));

interface CoinItem {
  name: string;
  part: number;
}

interface TradeData {
  income: number;
  lose: number;
  coin: Array<CoinItem>;
  trade: {
    duration: string;
    holding: string;
    transactions: string;
    balance: string;
    volatility: string;
    income: string;
    lose: string;
  };
}

export default function TradeCard() {
  const data = useQuery({
    queryKey: ["data"],
    queryFn: tradeStyle,
  });

  return (
    <BasicCard>
      <CardContent sx={{ width: "50%" }}>
        <TradeLeft
          winRate={
            data && data.data?.data.data.winRate === undefined
              ? 0
              : data.data?.data.data.winRate
          }
          lossRate={
            data && data.data?.data.data.winRate === undefined
              ? 0
              : 100 - data.data?.data.data.winRate
          }
        />
      </CardContent>
      <Divider orientation="vertical" variant="middle" flexItem />
      <CardContent sx={{ width: "50%" }}>
        <TradeRight trade={data && data.data?.data.data} />
      </CardContent>
    </BasicCard>
  );
}
