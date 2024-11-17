import Image from "next/image";

// const coinToIcon = (coin: string | undefined) => {
//   switch (coin) {
//     case "BTC":
//       return "/icons/crypto/btc-16.png";
//     case "ETH":
//       return "/icons/crypto/eth-16.png";
//     case "EOS":
//       return "/icons/crypto/eos-16.png";
//     default:
//       return "";
//   }
// };

const coinToIcon = (coin: string | undefined) => {
  switch (coin) {
    case "BTC":
      return "/icons/crypto/btc-30.png";
    case "BCH":
      return "/icons/crypto/BCH.png";
    case "KRW-DOGE":
      return "/icons/crypto/DOGE.png";
    case "ETC":
      return "/icons/crypto/ETC.png";
    case "KRW-ETH":
      return "/icons/crypto/ETH.png";
    case "NEAR":
      return "/icons/crypto/NEAR.png";
    case "SIHIB":
      return "/icons/crypto/SIHIB.png";
    case "SOL":
      return "/icons/crypto/SOL.png";
    case "STX":
      return "/icons/crypto/STX.png";
    case "DOGE-USDT-SWAP":
      return "/icons/crypto/USDT.png";
    case "XLM":
      return "/icons/crypto/XLM.png";
    case "XRP":
      return "/icons/crypto/XRP.png";
    case "ADA":
      return "/icons/crypto/ADA.png";
    default:
      return "";
  }
};

interface CoinIconProps {
  coin: string | undefined;
  wsize?: number;
  hsize?: number;
}

export default function CoinIcon({ coin, wsize = 24, hsize = 24 }: CoinIconProps) {
  return <Image src={coinToIcon(coin)} alt={coin ?? ""} width={wsize} height={hsize} />;
}
