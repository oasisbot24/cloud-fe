import MainDiscription from "@/components/MainDiscription";
import SideLogin from "@/components/SideLogin";
export default function Home() {
  return (
    <main className="flex w-full h-[98vh] ">
      <SideLogin />
      <MainDiscription />
    </main>
  );
}
