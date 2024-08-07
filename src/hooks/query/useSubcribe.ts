import { useMutation, useQuery } from "@tanstack/react-query";
import { getProduct } from "@/apis/subscribe/product";
import {
  deleteSubscribe,
  getSubscribe,
  postSubscribe,
} from "@/apis/subscribe/subscribe";

export function useSubscribeQuery() {
  const subscribeQyery = useQuery({
    queryKey: ["getSubscribe"],
    queryFn: () => getSubscribe(),
  });
  return {
    subscribeQyery,
  };
}

export function useProductQuery() {
  const productQuery = useQuery({
    queryKey: ["getProduct"],
    queryFn: () => getProduct(),
  });
  return {
    productQuery,
  };
}

export function useSubscribeMutation() {
  const postSubscribeMutation = useMutation({
    mutationFn: postSubscribe,
    mutationKey: ["postSubscribe"],
  });
  const deleteSubscribeMutation = useMutation({
    mutationFn: deleteSubscribe,
    mutationKey: ["deleteSubscribe"],
  });
  return {
    postSubscribeMutation,
    deleteSubscribeMutation,
  };
}
