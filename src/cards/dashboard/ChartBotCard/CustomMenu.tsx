import Image from "next/image";
import { Chip, Stack, Typography } from "@mui/material";
import ArrowDownIcon from "@/components/Icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import ExchangeIcon from "@/components/Icon/ExchangeIcon";

interface Props {
  id: number;
  setMenuId: React.Dispatch<React.SetStateAction<number>>;
  coinName: string;
  presetName: string;
  totalProfitRate: number;
  exchange: ExchangeType;
}

function CustomMenu({
  id,
  setMenuId,
  coinName,
  presetName,
  totalProfitRate,
  exchange,
}: Props) {
  const crypto = (name: string) => {
    switch (name) {
      case "비트코인":
        return "/icons/crypto/btc-30.png";
      case "비트코인캐시":
        return "/icons/crypto/BCH.png";
      case "도지코인":
        return "/icons/crypto/DOGE.png";
      case "이더리움클래식":
        return "/icons/crypto/ETC.png";
      case "이더리움":
        return "/icons/crypto/ETH.png";
      case "니어프로토콜":
        return "/icons/crypto/NEAR.png";
      case "시바누이":
        return "/icons/crypto/SIHIB.png";
      case "솔라나":
        return "/icons/crypto/SOL.png";
      case "스텍스":
        return "/icons/crypto/STX.png";
      case "테더":
        return "/icons/crypto/USDT.png";
      case "스텔라루멘":
        return "/icons/crypto/XLM.png";
      case "리플":
        return "/icons/crypto/XRP.png";
      case "에이다":
        return "/icons/crypto/ADA.png";
      default:
        return "";
    }
  };
  return (
    <Stack
      direction="row"
      // justifyContent="center"
      // alignItems="center"
      onClick={() => setMenuId(id)}
      sx={{
        bgcolor: "white",
        // width: "auto",
        height: "auto",
        padding: 2,
        borderRadius: "16px",
        borderColor: "#898FC3",
        // borderStyle: "solid",
        // borderWidth: 1,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#898FC3", // Hover 시 배경색 변경
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          display: "inline-block",
          width: "100%",
        }}
      >
        <ExchangeIcon exchange={exchange} />
        <Typography variant="300B">{presetName}</Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={1}
        sx={{ width: "100%" }}
      >
        {coinName === "ALL" ? (
          ""
        ) : (
          <Image src={crypto(coinName)} alt={coinName} width={15} height={20} />
        )}

        <Typography variant="200R">{coinName}</Typography>

        <Chip
          icon={totalProfitRate > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
          label={`${Number(totalProfitRate).toFixed(1)}%`}
          size="small"
          style={{
            background: totalProfitRate > 0 ? "#FDE0E0" : "#DCE1FF",
            color: totalProfitRate > 0 ? "#F46565" : "#223CE9",
            fontWeight: "bold",
          }}
        />
      </Stack>
    </Stack>
  );
}

export default CustomMenu;
