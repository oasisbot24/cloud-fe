import Icon from ".";

const coinToIcon = (coin: string | undefined) => {
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

interface CoinIconProps {
  coin: string | undefined;
  size?: number;
}

export default function CoinIcon({ coin, size = 24 }: CoinIconProps) {
  return <Icon src={coinToIcon(coin)} size={size} />;
}
