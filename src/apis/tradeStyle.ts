import { useEffect } from "react";
import { headers } from "next/headers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "@/apis/network";

export default function tradeStyle() {
  return api.get("/trade_style", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authorization")}`,
    },
  });
}
