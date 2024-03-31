import Image from "next/image";
import { Stack } from "@mui/material";
import Footer from "@/screens/layout/Footer";
import Header from "@/screens/layout/Header";
import Discription from "@/screens/signin/Discription";

export default function Home() {
  return (
    <main className="flex w-full h-screen signup-bg">
      <Stack className="w-full">
        <Header color="white" />
        <Stack direction="row" className="w-full h-full relative">
          <Discription />
          <Image
            src="/main/mobius.png"
            alt="mobius"
            height={1080}
            width={1080}
            className="absolute right-0 bottom-10 h-full w-fit object-contain z-0"
          />
        </Stack>
        <Footer color="white" />
      </Stack>
    </main>
  );
}
