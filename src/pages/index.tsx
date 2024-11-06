import Image from "next/image";

import { Box, Stack } from "@mui/material";

import Description from "@/components/signin/Description";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export default function Home() {
  return (
    <main className="signup-bg flex h-screen w-full">
      <Stack className="w-full">
        <Header color="white" />
        <Stack direction="row" className="relative h-full w-full">
          <Description />
          <Box className="absolute bottom-10 right-0 h-full w-full overflow-hidden">
            <Image
              src="/mobius.png"
              alt="mobius"
              height={1080}
              width={1080}
              className="z-1 absolute right-[-40px] h-full w-fit object-contain"
            />
          </Box>
        </Stack>
        <Footer color="white" />
      </Stack>
    </main>
  );
}
