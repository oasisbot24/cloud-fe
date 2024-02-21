import MainDiscription from "@/components/MainDiscription";
import Dashboard from "@/components/dashboard/Dashboard";
import SideLogin from "@/components/sidebar/SideLogin";

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <div className="h-full md:w-1/3 w-full min-w-[300px] z-[1] shadow-md">
        <SideLogin />
      </div>
      <div className="h-full md:w-2/3 md:block hidden">
        <MainDiscription />
      </div>
    </main>
  );
}
