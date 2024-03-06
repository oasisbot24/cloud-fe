import { useEffect } from "react";
import { headers } from "next/headers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "@/apis/network";

export default function getTradeStyle() {
  return api.get("/trade_style").then(res => {
    return res.data?.data;
  });
}
