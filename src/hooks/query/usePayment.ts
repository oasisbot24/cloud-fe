import { useMutation, useQuery } from "@tanstack/react-query";

import api from "@/libs/network";

interface PaymentMethodType {
  cardNumber: string;
  cardCompany: string;
}
export function usePaymentMethodQuery() {
  const paymentMethodQuery = useQuery({
    queryKey: ["getPaymentMethod"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<PaymentMethodType>>("/payment/method");
      return res.data?.data;
    },
  });
  return {
    paymentMethodQuery,
  };
}

interface PaymentMethodBody {
  cardNumber: string;
  expiryDate: string;
  password: string;
  userInfo: string;
}
export function usePaymentMethodMutation() {
  const postPaymentMethodMutation = useMutation({
    mutationFn: async (body: PaymentMethodBody) =>
      api.post<ApiResponseType<void>>("/payment/method", body),

    mutationKey: ["postPaymentMethod"],
  });
  const deletePaymentMethodMutation = useMutation({
    mutationFn: async (id: number) => api.delete<ApiResponseType<void>>(`/payment/method?id=${id}`),

    mutationKey: ["deleteSubscribe"],
  });
  return {
    postPaymentMethodMutation,
    deletePaymentMethodMutation,
  };
}
