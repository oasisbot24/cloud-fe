import Icon from "@/screens/Icon";
import { MenuDetailIdType } from "@/screens/Layout/Sidenav/sideMenu";

interface SidenavIconProps {
  id: MenuDetailIdType;
  isFocus?: boolean;
}

const iconSrcFocused = {
  dashboard: "/icons/sidenav/dashboard-on.png",
  oasisbot: "/icons/sidenav/oasisbot-on.png",
  backtest: "/icons/sidenav/backtest-on.png",
  api: "/icons/sidenav/api-on.png",
  exchange: "/icons/sidenav/exchange-on.png",
  preset: "/icons/sidenav/preset-on.png",
  subscribe: "/icons/sidenav/subscribe-on.png",
  notice: "/icons/sidenav/notice-on.png",
};

const iconSrcUnfocused = {
  dashboard: "/icons/sidenav/dashboard-off.png",
  oasisbot: "/icons/sidenav/oasisbot-off.png",
  backtest: "/icons/sidenav/backtest-off.png",
  api: "/icons/sidenav/api-off.png",
  exchange: "/icons/sidenav/exchange-off.png",
  preset: "/icons/sidenav/preset-off.png",
  subscribe: "/icons/sidenav/subscribe-off.png",
  notice: "/icons/sidenav/notice-off.png",
};

export default function SidenavIcon({ id, isFocus }: SidenavIconProps) {
  if (isFocus) {
    return <Icon src={iconSrcFocused[id]} size={24} />;
  }
  return <Icon src={iconSrcUnfocused[id]} size={24} />;
}
