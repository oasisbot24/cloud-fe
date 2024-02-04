import { Stack } from "@mui/material";
import Image from "next/image";

export default function MainDiscription() {
  return (
    <Stack justifyContent="space-between" className="h-full bg-black">
      <Stack
        direction="row"
        justifyContent="space-between"
        className="mt-36 p-8"
      >
        <Stack gap={1}>
          <div className="text-xl font-poppins font-light text-gray-400">
            The futer of crypto-trading
          </div>
          <div className="text-4xl font-poppins font-semibold text-gray-100">
            안정적인 투자를 위해
          </div>
          <div className="text-4xl font-poppins font-semibold text-purple">
            가상화폐 자동매매는
          </div>
          <div className="text-4xl font-poppins font-semibold text-purple">
            오아시스에서
          </div>
          <div className="text-xl font-poppins font-light text-gray-300">
            search for the vein of money
          </div>
        </Stack>
        <Image
          src="/main/bitcoin-logo.png"
          alt="bitcoin-logo"
          width={200}
          height={200}
        />
      </Stack>

      <div className="relative">
        <Image
          src="/main/hero-bg.png"
          alt="hero-bg"
          width={1280}
          height={200}
          className="h-[200px] w-full"
        />
        <Image
          src="/main/connections.png"
          alt="connections"
          width={814}
          height={275}
          className="absolute right-0 bottom-0"
        />
      </div>
    </Stack>
  );
}
