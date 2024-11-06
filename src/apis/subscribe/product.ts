import api from "@/apis/network";

interface ProductType {
  productId: number;
  productName: string;
  productPrice: number;
}
async function getProduct(): Promise<ProductType[]> {
  const res = await api.get<ApiResponseType<ProductType[]>>("/product");
  return res.data?.data;
}

export { getProduct };
export type { ProductType };
