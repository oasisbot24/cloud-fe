import { GridRowSelectionModel } from "@mui/x-data-grid";
import { atom } from "jotai";

interface BotTransaction {
  id: number;
  market: string;
  coinName: string;
  profit: BotTransactionProfit;
  tradeTime: string;
  status: string;
  quantity: BotTransactionQuantity;
  price: BotTransactionPrice;
}

interface BotTransactionProfit {
  profitLoss: number;
  profitLossRate: number;
}

interface BotTransactionQuantity {
  totalPrice: number;
  volume: number;
}

interface BotTransactionPrice {
  startBalance: number;
  presetName: string;
}

const botAtom = atom<Bot.InfoT>({
  id: -1,
  isRunning: false,
  presetName: "",
  startBalance: 0,
  standardMinute: 0,
  runningTime: 0,
  coinType: "",
});

const selectedBotRowAtom = atom<GridRowSelectionModel>([]);

export type { BotTransaction, BotTransactionProfit, BotTransactionQuantity, BotTransactionPrice };

export { botAtom, selectedBotRowAtom };
