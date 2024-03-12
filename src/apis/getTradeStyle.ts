import { useEffect } from "react";
import { headers } from "next/headers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "@/apis/network";

interface tradeCoinType {
  name: string;
  ratio: number;
}
interface TradeStyleType {
  winRate: number;
  tradeCoin: Array<tradeCoinType>;
  avgWaitTime: number;
  avgCarryTime: number;
  avgMonthlyTradeCount: number;
  maxBalance: number;
  volatility: number;
  maxProfit: number;
  minLoss: number;
}
export default function getTradeStyle(): Promise<TradeStyleType> {
  return api.get("/trade_style").then(res => {
    const result = {
      winRate: res.data?.data.winRate,
      tradeCoin: res.data?.data.tradeCoin,
      avgWaitTime: res.data?.data.avgWaitTime,
      avgCarryTime: res.data?.data.avgCarryTime,
      avgMonthlyTradeCount: res.data?.data.avgMonthlyTradeCount,
      maxBalance: res.data?.data.maxBalance,
      volatility: res.data?.data.volatility,
      maxProfit: res.data?.data.maxProfit,
      minLoss: res.data?.data.minLoss,
    };

    return result;
  });
}
