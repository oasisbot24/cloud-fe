import { Typography } from "@mui/material";

interface textProps {
  text: string;
}
function GraphText({ text }: textProps) {
  return (
    <Typography variant="400R" className="text-neutral-500">
      {text}
    </Typography>
  );
}

export default GraphText;
