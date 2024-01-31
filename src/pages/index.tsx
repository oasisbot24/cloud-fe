import MainDiscription from "@/components/MainDiscription";
import SideLogin from "@/components/SideLogin";
export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <SideLogin />
      <MainDiscription />
    </main>
  );
}
