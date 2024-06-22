import React from "react";
import { CardContent } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import RealtimeTransactionItem from "@/components/oasisbot/RealtimeTransactionItem";

function RealtimeTransactionCard() {
  const items = [
    {
      id: 1,
      presetName: "상승장 프리셋임",
      coinName: "EOS",
      sellInfo: {
        exchange: "upbit",
        price: 1000000000,
        date: "2024-05-12T20:32:32",
      },
      buyInfo: {
        exchange: "upbit",
        price: 1000000000,
        date: "2024-05-12T20:32:32",
      },
    },
    {
      id: 2,
      presetName: "상승장 프리셋임",
      coinName: "EOS",
      sellInfo: {
        exchange: "upbit",
        price: 1000000000,
        date: "2024-05-12T20:32:32",
      },
      buyInfo: {
        exchange: "upbit",
        price: 1000000000,
        date: "2024-05-12T20:32:32",
      },
    },
  ];

  return (
    <Card>
      <CardHeader
        id="transaction"
        title="오아시스 실시간 거래현황"
        subtitle="오늘 19,286회 / 업비트 기준"
      />
      <CardContent className="px-5 py-0">
        {items.map(item => (
          <RealtimeTransactionItem item={item} key={item.id} />
        ))}
      </CardContent>
    </Card>
  );
}

export default RealtimeTransactionCard;
