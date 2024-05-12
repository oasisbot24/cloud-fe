function useMarket() {
  const marketName = (market: string | undefined) => {
    switch (market) {
      case "upbit":
        return "업비트";
      case "okx":
        return "OKX";
      default:
        return "";
    }
  };
  const marketIcon = (market: string | undefined): string => {
    switch (market) {
      case "upbit":
        return "/icons/crypto/upbit.png";
      case "okx":
        return "/icons/crypto/okx.png";
      default:
        return "";
    }
  };

  return { marketName, marketIcon };
}

export default useMarket;
