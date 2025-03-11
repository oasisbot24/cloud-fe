import Image from "next/image";

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
    case "SHIB":
      return "/icons/crypto/SHIB.png";
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
    case "도지코인":
      return "/icons/crypto/upbit/도지코인.png";
    case "무브먼트":
      return "/icons/crypto/upbit/무브먼트.png";
    case "비트코인":
      return "/icons/crypto/upbit/비트코인.png";
    case "솔라나":
      return "/icons/crypto/upbit/솔라나.png";
    case "시바이누":
      return "/icons/crypto/upbit/시바이누.png";
    case "엑스알피(리플)":
      return "/icons/crypto/upbit/엑스알피(리플).png";
    case "온도파이낸스":
      return "/icons/crypto/upbit/온도파이낸스.png";
    case "이더리움":
      return "/icons/crypto/upbit/이더리움.png";
    case "체인링크":
      return "/icons/crypto/upbit/체인링크.png";
    case "테더":
      return "/icons/crypto/upbit/테더.png";
    case "페페":
      return "/icons/crypto/upbit/페페.png";
    case "헤데라":
      return "/icons/crypto/upbit/헤데라.png";
    case "도지코인 스왑":
      return "/icons/crypto/upbit/도지코인 스왑.png";
    case "무브먼트 스왑":
      return "/icons/crypto/upbit/무브먼트스왑.png";
    case "비트코인 스왑":
      return "/icons/crypto/upbit/비트코인 스왑.png";
    case "솔라나 스왑":
      return "/icons/crypto/upbit/솔라나 스왑.png";
    case "시바이누 스왑":
      return "/icons/crypto/upbit/시바이누 스왑.png";
    case "엑스알피(리플) 스왑":
      return "/icons/crypto/upbit/엑스알피(리플) 스왑.png";
    case "온도파이낸스 스왑":
      return "/icons/crypto/upbit/온도파이낸스 스왑.png";
    case "이더리움 스왑":
      return "/icons/crypto/upbit/이더리움 스왑.png";
    case "체인링크 스왑":
      return "/icons/crypto/upbit/체인링크 스왑.png";
    case "페페 스왑":
      return "/icons/crypto/upbit/페페 스왑.png";
    case "헤데라 스왑":
      return "/icons/crypto/upbit/헤데라 스왑.png";
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
