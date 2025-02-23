declare namespace Subscribe {
  interface PostSubscribeBody {
    productId: number;
    promotionCode?: string;
  }
  interface SubscribeT {
    subscribeId: number;
    productName: string;
    paidPeriod: number;
    expiryDate: string;
  }

  type ProductKey = "free" | "basic" | "premium";
  type ProductMonth = 1 | 3;
  interface ProductT {
    productId: number;
    productName: string;
    productPrice: number;
  }
}
