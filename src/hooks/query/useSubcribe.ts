import { useMutation, useQuery } from "@tanstack/react-query";

import api from "@/libs/network";

interface SubscribeType {
  subscribeId: number;
  productName: string;
  expiryDate: string;
}
interface SubscribeBody {
  productId: number;
  promotionCode?: string;
}

export function useSubscribeQuery() {
  const subscribeQuery = useQuery({
    queryKey: ["getSubscribe"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<SubscribeType>>("/subscribe");
      return res.data?.data;
    },
  });
  return {
    subscribeQuery,
  };
}

interface ProductType {
  productId: number;
  productName: string;
  productPrice: number;
}
export function useProductQuery() {
  const productQuery = useQuery({
    queryKey: ["getProduct"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<ProductType[]>>("/product");
      return res.data?.data;
    },
  });
  return {
    productQuery,
  };
}

export function useSubscribeMutation() {
  const postSubscribeMutation = useMutation({
    mutationFn: async (body: SubscribeBody) =>
      api.post<ApiResponseType<void>>("/subscribe", {
        ...body,
        promotionCode: body.promotionCode || "",
      }),
    mutationKey: ["postSubscribe"],
  });
  const deleteSubscribeMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.delete<ApiResponseType<void>>(`/subscribe?id=${id}`);
    },
    mutationKey: ["deleteSubscribe"],
  });
  return {
    postSubscribeMutation,
    deleteSubscribeMutation,
  };
}
