import api from "@/apis/network";

interface SubscribeType {
  subscribeId: number;
  productName: string;
  expiryDate: string;
}
async function getSubscribe(): Promise<SubscribeType[]> {
  const res = await api.get<ApiResponseType<SubscribeType[]>>("/subscribe");
  return res.data?.data;
}

interface SubscribeBody {
  productId: number;
  promotionCode: string;
}

async function postSubscribe(body: SubscribeBody): Promise<void> {
  await api.post<ApiResponseType<void>>("/subscribe", body);
}

async function deleteSubscribe(id: number): Promise<void> {
  await api.delete<ApiResponseType<void>>(`/subscribe?id=${id}`);
}

export { getSubscribe, postSubscribe, deleteSubscribe };
export type { SubscribeType, SubscribeBody };
