import api from "@/apis/network";

interface startType {
  botName: string;
  presetId: number;
  coinId: number;
  startBalance: number;
  leverage: any;
}
export default function botStart(data: startType) {
  return api.post("/start_bot", data);
}
