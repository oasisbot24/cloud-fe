import { Stack } from "@mui/material";
import Footer from "@/screens/layout/Footer";
import Header from "@/screens/layout/Header";
import Discription from "@/screens/signin/Discription";

export default function Home() {
  return (
    <main className="flex w-full h-screen signup-bg">
      <Stack className="w-full">
        <Header color="white" />
        <Discription />
        <Footer color="white" />
      </Stack>
    </main>
  );
}
