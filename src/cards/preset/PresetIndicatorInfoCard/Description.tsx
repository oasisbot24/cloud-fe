import { Box, Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon";

export default function Description({
  title,
  label,
  content,
}: {
  title: string;
  label: React.ReactNode;
  content: string;
}) {
  return (
    <Stack className="bg-neutral-200 p-6 w-1/2 h-full rounded-2xl justify-between gap-2">
      <Stack className="justify-between items-center" direction="row">
        <Stack className="gap-2 shrink-0" direction="row">
          <Icon src="/icons/control/info.png" alt="info" size={16} />
          <Typography variant="300M" className="text-font-1">
            {title}
          </Typography>
        </Stack>
        <Stack className="gap-2 shrink-0" direction="row">
          {label}
        </Stack>
      </Stack>
      <Box className="h-full">
        <Typography
          className="text-font-2"
          sx={{
            lineHeight: "18px",
            fontSize: "14px",
            fontFamily: "Inter",
            fontWeight: 700,
            letterSpacing: "-2%",
            textAlign: "justify",
            whiteSpace: "pre-line",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Stack>
  );
}
