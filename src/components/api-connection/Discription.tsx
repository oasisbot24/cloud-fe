import Image from "next/image";
import { Stack, Typography } from "@mui/material";

export default function Discription() {
  return (
    <Stack direction="column" className="w-full gap-2 items-center">
      <Image src="/logo/oasis-black.svg" width={124} height={124} alt="logo" />
      <Typography className="text-4xl font-semibold font-poppins">
        OASIS
      </Typography>
      <Typography className="text-xl font-regular font-poppins">
        Search for the vein of moeny
      </Typography>
      <Typography className="w-full max-w-[300px] mt-4 text-center text-xl font-regular font-poppins p-4 bg-gray-200 text-gray-800">
        OASIS 지정 IP 116.12.02.13
      </Typography>
    </Stack>
  );
}
