import { Box, Stack, Typography } from "@mui/material";
import AlertIcon from "@/components/Icon/AlertIcon";
import CharacterIcon from "@/components/Icon/CharacterIcon";
import DashboardIcon from "@/components/Icon/DashboardIcon";
import SidenavIcon from "@/components/Icon/SidenavIcon";
import SocialIcon from "@/components/Icon/SocialIcon";

export default function Icon() {
  return (
    <Stack className="gap-4">
      <Box>
        <Typography variant="h1">SocialIcon</Typography>
        <Stack direction="row" className="gap-2">
          {(["facebook", "linkedin", "naver", "kakao"] as SocialType[]).map(
            social => (
              <SocialIcon key={social} social={social} color="black" />
            ),
          )}
          {(["facebook", "linkedin", "naver", "kakao"] as SocialType[]).map(
            social => (
              <SocialIcon key={social} social={social} color="white" />
            ),
          )}
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1">CharacterIcon</Typography>
        <Stack direction="row" className="gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map(happiness => (
            <CharacterIcon key={happiness} happiness={happiness} />
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1">Sidenav Icon</Typography>
        <Stack direction="row" className="gap-2">
          {(
            [
              "dashboard",
              "oasisbot",
              "backtest",
              "api",
              "exchange",
              "preset",
              "subscribe",
              "notice",
            ] as MenuDetailIdType[]
          ).map(id => (
            <SidenavIcon key={id} id={id} />
          ))}
        </Stack>
        <Stack direction="row" className="gap-2">
          {(
            [
              "dashboard",
              "oasisbot",
              "backtest",
              "api",
              "exchange",
              "preset",
              "subscribe",
              "notice",
            ] as MenuDetailIdType[]
          ).map(id => (
            <SidenavIcon key={id} id={id} isFocus />
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1">Dashboard Icon</Typography>
        <Stack direction="row" className="gap-2 bg-black p-2">
          {(
            [
              "bar-graph",
              "bot-start",
              "history",
              "pie-chart",
              "ranking",
              "rise-arrow",
              "setting",
              "wallet",
            ] as DashboardIdType[]
          ).map(id => (
            <DashboardIcon key={id} id={id} />
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1">Alert Icon</Typography>
        <AlertIcon />
      </Box>
    </Stack>
  );
}
