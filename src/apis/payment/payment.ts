import api from "@/apis/network";

interface PaymentMethodType {
  cardNumber: string;
  cardCompany: string;
}

async function getPaymentMethod(): Promise<PaymentMethodType> {
  const res =
    await api.get<ApiResponseType<PaymentMethodType>>("/payment/method");
  return res.data?.data;
}

interface PaymentMethodBody {
  cardNumber: string;
  expiryDate: string;
  password: string;
  userInfo: string;
}

async function postPaymentMethod(body: PaymentMethodBody): Promise<void> {
  await api.post<ApiResponseType<void>>("/payment/method", body);
}

async function deletePaymentMethod(id: number): Promise<void> {
  await api.delete<ApiResponseType<void>>(`/payment/method?id=${id}`);
}

export { getPaymentMethod, postPaymentMethod, deletePaymentMethod };
export type { PaymentMethodType, PaymentMethodBody };
