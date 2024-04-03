import Image from "next/image";
import { Box, Stack } from "@mui/material";
import Footer from "@/screens/Layout/Footer";
import Header from "@/screens/Layout/Header";
import Discription from "@/screens/signin/Discription";

export default function Home() {
  return (
    <main className="flex w-full h-screen signup-bg">
      <Stack className="w-full">
        <Header color="white" />
        <Stack direction="row" className="w-full h-full relative">
          <Discription />
          <Box className="absolute right-0 bottom-10 h-full w-full overflow-hidden">
            <Image
              src="/mobius.png"
              alt="mobius"
              height={1080}
              width={1080}
              className="absolute right-[-40px] h-full w-fit object-contain z-1"
            />
          </Box>
        </Stack>
        <Footer color="white" />
      </Stack>
    </main>
  );
}
