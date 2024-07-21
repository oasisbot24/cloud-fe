import { Box, Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon";

export default function Description({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <Stack className="bg-neutral-200 p-8 w-1/2 h-full rounded-2xl justify-between gap-2">
      <Stack className="gap-2 shrink-0" direction="row">
        <Icon src="/icons/control/info.png" alt="info" size={16} />
        <Typography variant="300M" className="text-font-1">
          {title}
        </Typography>
      </Stack>
      <Box className="h-full">
        <Typography
          className="text-font-2"
          sx={{
            lineHeight: "18px",
            fontSize: "14px",
            fontFamily: "Inter",
            fontWeight: 500,
            letterSpacing: "-2%",
            textAlign: "justify",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Stack>
  );
}
