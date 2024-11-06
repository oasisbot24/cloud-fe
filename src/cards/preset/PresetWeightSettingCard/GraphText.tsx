import { Typography } from "@mui/material";

interface GraphTextProps {
  text: string;
}
function GraphText({ text }: GraphTextProps) {
  return (
    <Typography variant="300R" className="text-neutral-500">
      {text}
    </Typography>
  );
}

export default GraphText;
