import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Icon } from "@mui/material";
import { useAtom } from "jotai";
import route from "@/components/topnav/route";
import settingAtom from "@/datas/setting";

export default function TopNavRouteList() {
  const router = useRouter();
  const { pathname } = router;
  const [setting] = useAtom(settingAtom);
  const getMenuButtonStyle = (path: string) => {
    if (pathname === path) {
      if (pathname === "/oasisbot" && setting.botStatus.isRunning) {
        return "bg-red-500 text-black";
      }
      return "bg-white text-black";
    }
    return "";
  };

  return route.map(item => (
    <Button
      key={item.name}
      variant={pathname === item.path ? "contained" : "text"}
      className={`max-w-[180px] w-full ${getMenuButtonStyle(item.path)} `}
      color="inherit"
      onClick={() => router.push(item.path)}
    >
      {item.name}
      {item.path === "/oasisbot" && setting.botStatus.isRunning && (
        <Icon className="absolute right-2">
          <Image
            src="/attention.png"
            alt="running"
            className="absolute top-0 right-0"
            width={24}
            height={24}
          />
        </Icon>
      )}
    </Button>
  ));
}
