import { Box, Stack, Typography } from "@mui/material";
import CharacterIcon from "@/screens/Icon/CharacterIcon";
import SocialIcon from "@/screens/Icon/SocialIcon";

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
        <Typography variant="h1">Font</Typography>
      </Box>
    </Stack>
  );
}
