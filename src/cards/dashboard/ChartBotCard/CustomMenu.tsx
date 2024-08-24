import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon";

interface Props {
  id: number;
  setMenuId: React.Dispatch<React.SetStateAction<number>>;
  coinName: string;
  presetName: string;
  totalProfit: number;
  totalProfitRate: number;
}

function PLchip({ pl }: { pl: number }) {
  const backgroundColor = pl > 0 ? "#FDE0E0" : "#D1D6F9";
  const color = pl > 0 ? "#F46565" : "#223CE9";
  const arrow = pl > 0 ? "up" : "down";

  return (
    <Stack
      direction="row"
      className="justify-between items-center w-14 h-6 px-2 rounded-full"
      sx={{ backgroundColor }}
    >
      <Image
        src={`/icons/arrow/profitloss/${arrow}-small.png`}
        width={16}
        height={16}
        alt="small"
      />
      <Typography
        fontFamily="SF Pro Display"
        fontWeight={700}
        fontSize={14}
        lineHeight="16px"
        color={color}
      >
        {pl}%
      </Typography>
    </Stack>
  );
}

export default function CustomMenu({
  id,
  setMenuId,
  coinName,
  presetName,
  totalProfit,
  totalProfitRate,
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      onClick={() => setMenuId(id)}
      sx={{
        bgcolor: "white",
        // width: "auto",
        height: "auto",
        padding: 2,
        // borderRadius: "16px",
        borderColor: "#898FC3",
        // borderStyle: "solid",
        // borderWidth: 1,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#898FC3", // Hover 시 배경색 변경
        },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2} sx={{ width: 1 }}>
        <Image
          src="/icons/crypto/btc-30.png"
          alt="btc"
          width={15}
          height={20}
        />
        <Typography variant="300B">{presetName}</Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Stack direction="row" spacing={1}>
          <Image
            src="/icons/crypto/btc-30.png"
            alt="btc"
            width={15}
            height={20}
          />
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            // sx={{ width: 1 }}
          >
            <Typography variant="200R">{coinName}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="flex-end" sx={{ width: 1 }}>
          <PLchip pl={totalProfitRate} />
        </Stack>
      </Stack>
    </Stack>
  );
}
