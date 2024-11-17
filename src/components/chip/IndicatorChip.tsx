import Chip from ".";

interface ChipProps {
  label: string;
  color: string;
}

export default function IndicatorChip({ label, color }: ChipProps) {
  return <Chip label={label} variant="outlined" style={{ color, borderColor: color }} />;
}
