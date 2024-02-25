import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import { Divider, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { useAtom } from "jotai";
import authAtom from "@/datas/auth";

export default function TopNavMenu() {
  const [auth] = useAtom(authAtom);
  return (
    <Paper className="absolute top-[60px] right-0 min-w-[220px] z-[999]">
      <MenuList>
        <div className="px-4 py-2 text-left">
          <Typography variant="body1">{auth?.name}</Typography>
          <Typography variant="body2" className="text-gray-500">
            {auth?.email}
          </Typography>
        </div>
        <Divider className="my-2" />
        <MenuItem onClick={() => {}} className="px-4">
          <SettingsIcon className="text-gray-500 mr-2" />
          거래소 변경
        </MenuItem>
        <MenuItem onClick={() => {}} className="px-4">
          <PersonIcon className="text-gray-500 mr-2" />
          요금 안내
        </MenuItem>
        <MenuItem onClick={() => {}} className="px-4">
          <StarIcon className="text-gray-500 mr-2" />
          API 연결
        </MenuItem>
        <Divider className="my-2" />
        <MenuItem onClick={() => {}} className="px-4">
          <LogoutIcon className="text-gray-500 mr-2" />
          로그아웃
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
