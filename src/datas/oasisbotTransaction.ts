import { atom } from "jotai";

import { BotType } from "@/apis/oasisbot/bot";

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

const botAtom = atom<BotType>({
  id: -1,
  isRunning: false,
  presetName: "",
  startBalance: 0,
  runningTime: 0,
  coinType: "",
});

export type { BotTransaction, BotTransactionProfit, BotTransactionQuantity, BotTransactionPrice };

export { botAtom };
