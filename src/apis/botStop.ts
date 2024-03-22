import api from "@/apis/network";

export default function botStop(id: number) {
  return api.post("/stop_bot", { id: id });
}
