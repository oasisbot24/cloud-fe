import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deletePaymentMethod,
  getPaymentMethod,
  postPaymentMethod,
} from "@/apis/payment/payment";

export function usePaymentMethodQuery() {
  const paymentMethodQuery = useQuery({
    queryKey: ["getPaymentMethod"],
    queryFn: () => getPaymentMethod(),
  });
  return {
    paymentMethodQuery,
  };
}

export function usePaymentMethodMutation() {
  const postPaymentMethodMutation = useMutation({
    mutationFn: postPaymentMethod,
    mutationKey: ["postPaymentMethod"],
  });
  const deletePaymentMethodMutation = useMutation({
    mutationFn: deletePaymentMethod,
    mutationKey: ["deleteSubscribe"],
  });
  return {
    postPaymentMethodMutation,
    deletePaymentMethodMutation,
  };
}
