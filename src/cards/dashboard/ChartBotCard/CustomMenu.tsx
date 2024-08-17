import Image from "next/image";
import { Stack, Typography } from "@mui/material";

interface Props {
  id: number;
  setMenuId: React.Dispatch<React.SetStateAction<number>>;
}
export default function CustomMenu({ id, setMenuId }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      onClick={() => setMenuId(id)}
      sx={{
        bgcolor: "white",
        width: "auto",
        height: "auto",
        padding: 2,
        borderRadius: "16px",
        borderColor: "#898FC3",
        borderStyle: "solid",
        borderWidth: 1,
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
          width={25}
          height={30}
        />

        <Stack direction="column" spacing={1}>
          <Typography variant="300B">BTCUSDT</Typography>
          <Typography variant="200R" className="text-[#B0B3B7]">
            Bitcoin
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack direction="column" spacing={1}>
          <Stack direction="row" justifyContent="flex-end" sx={{ width: 1 }}>
            <Typography
              fontFamily="SF Pro Display"
              fontWeight={500}
              fontSize={18}
              lineHeight="22px"
            >
              $230,7777
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" sx={{ width: 1 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                bgcolor: "#D1D6F9",
                width: "58px",
                height: "24px",
                borderRadius: "16px",
              }}
            >
              <Image
                src="/icons/arrow/profitloss/down-small.png"
                width={16}
                height={16}
                alt="small"
              />
              <Typography
                fontFamily="SF Pro Display"
                fontWeight={700}
                fontSize={14}
                lineHeight="16px"
                className="text-[#223CE9]"
              >
                23%
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Image
            src="/icons/arrow/down-circle.png"
            alt="circle"
            width={20}
            height={20}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
