import Image from "next/image";
import { Chip, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import ArrowDownIcon from "@/components/Icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import ExchangeIcon from "@/components/Icon/ExchangeIcon";

interface Props {
  id: number;
  setMenuId: React.Dispatch<React.SetStateAction<number>>;
  coinName: string;
  presetName: string;
  totalProfit: number;
  totalProfitRate: number;
  exchange: ExchangeType;
}

function CustomMenu({
  id,
  setMenuId,
  coinName,
  presetName,
  totalProfit,
  totalProfitRate,
  exchange,
}: Props) {
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
      <Stack direction="row" alignItems="center" spacing={2}>
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
        <Image
          src="/icons/crypto/btc-30.png"
          alt="btc"
          width={15}
          height={20}
        />

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
        {/* </Stack> */}
      </Stack>
    </Stack>
  );
}

export default CustomMenu;
