import { Stack } from "@mui/material";
import Footer from "@/screens/Footer";
import Discription from "@/screens/signin/Discription";

export default function Home() {
  return (
    <main className="flex w-full h-screen signup-bg">
      <Stack className="w-full">
        <Discription />
        <Footer color="white" />
      </Stack>
    </main>
  );
}
