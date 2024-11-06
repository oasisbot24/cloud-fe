import { Box, Stack, Typography } from "@mui/material";

function ColorPalette({ className, text }: { className: string; text: string }) {
  return (
    <Stack className={`${className} h-[200px] w-[200px] justify-center text-center`}>
      <Typography variant="h6">{text}</Typography>
    </Stack>
  );
}

export default function Palette() {
  return (
    <Stack className="gap-4">
      <Box>
        <Typography variant="h1">Brand</Typography>
        <ColorPalette className="bg-brand text-white" text="bg-brand" />
      </Box>
      <Box>
        <Typography variant="h1">Sub</Typography>
        <Stack direction="row" className="gap-2">
          <ColorPalette className="bg-sub-1 text-white" text="bg-sub-1" />
          <ColorPalette className="bg-sub-2 text-white" text="bg-sub-2" />
          <ColorPalette className="bg-sub-3 text-white" text="bg-sub-3" />
          <ColorPalette className="bg-sub-4 text-white" text="bg-sub-4" />
          <ColorPalette className="bg-sub-5 text-white" text="bg-sub-5" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1">Font</Typography>
        <Stack direction="row" className="gap-2">
          <ColorPalette className="bg-font-1 text-white" text="bg-font-1" />
          <ColorPalette className="bg-font-2 text-white" text="bg-font-2" />
          <ColorPalette className="bg-font-3 text-white" text="bg-font-3" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1">Neutral</Typography>
        <Stack direction="row" className="gap-2">
          <ColorPalette className="bg-neutral-200" text="bg-neutral-200" />
          <ColorPalette className="bg-neutral-300" text="bg-neutral-300" />
          <ColorPalette className="bg-neutral-400" text="bg-neutral-400" />
          <ColorPalette className="bg-neutral-500" text="bg-neutral-500" />
          <ColorPalette className="bg-neutral-600 text-white" text="bg-neutral-600" />
          <ColorPalette className="bg-neutral-700 text-white" text="bg-neutral-700" />
          <ColorPalette className="bg-neutral-800 text-white" text="bg-neutral-800" />
        </Stack>
      </Box>
    </Stack>
  );
}
