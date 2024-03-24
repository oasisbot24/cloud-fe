import { Box, Stack, Typography } from "@mui/material";
import { sideMenu } from "@/screens/layout/Sidenav/sideMenu";

export default function SideNav() {
  return (
    <Stack direction="column" className="sidenav px-4 py-8">
      <Box>Logo</Box>
      {sideMenu.map(menu => (
        <Stack
          key={menu.title}
          direction="column"
          className="w-full px-4 gap-1"
        >
          <Box className="w-full">
            <Typography variant="200M">{menu.title}</Typography>
          </Box>
          {menu.detail?.map(detail => (
            <Box key={detail.name} className="w-full h-[50px]">
              <Typography variant="300R">{detail.name}</Typography>
            </Box>
          ))}
        </Stack>
      ))}
      <Box className="w-full h-[170px] bg-black rounded-xl">
        <Typography className="text-white">고객센터</Typography>
      </Box>
    </Stack>
  );
}
