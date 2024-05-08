import { Avatar, Stack, Typography } from "@mui/material";

export default function UserProfile() {
  return (
    <Stack direction="row" className="items-center gap-2">
      <Avatar />
      <Stack className="gap-1">
        <Typography variant="200B">{"userName"}</Typography>
        <Typography variant="100R">{"PLATINUM"}</Typography>
      </Stack>
    </Stack>
  );
}
