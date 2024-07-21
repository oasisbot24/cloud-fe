const exchangeToKr = (market: ExchangeType | undefined) => {
  switch (market) {
    case "upbit":
      return "업비트";
    case "okx":
      return "OKX";
    default:
      return "";
  }
};
const exchangeToIcon = (market: ExchangeType | undefined): string => {
  switch (market) {
    case "upbit":
      return "/icons/crypto/upbit.png";
    case "okx":
      return "/icons/crypto/okx.png";
    default:
      return "";
  }
};

export { exchangeToKr, exchangeToIcon };
