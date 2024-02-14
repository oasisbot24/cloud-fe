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

export default function TradeCard({ income, lose, coin, trade }: TradeData) {
  return (
    <BasicCard>
      <CardContent sx={{ width: "50%" }}>
        <TradeLeft income={income} lose={lose} coin={coin} />
      </CardContent>
      <Divider orientation="vertical" variant="middle" flexItem />
      <CardContent sx={{ width: "50%" }}>
        <TradeRight trade={trade} />
      </CardContent>
    </BasicCard>
  );
}
