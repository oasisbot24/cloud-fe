import api from "@/apis/network";

export default function signin(credential: string) {
  return api.post("/signin", { credential });
}
