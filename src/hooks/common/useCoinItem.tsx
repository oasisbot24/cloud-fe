function useCoinItem() {
  const coinIcon = (coin: string | undefined) => {
    switch (coin) {
      case "BTC":
        return "/icons/crypto/btc-16.png";
      case "ETH":
        return "/icons/crypto/eth-16.png";
      case "EOS":
        return "/icons/crypto/eos-16.png";
      default:
        return "";
    }
  };

  return { coinIcon };
}

export default useCoinItem;
