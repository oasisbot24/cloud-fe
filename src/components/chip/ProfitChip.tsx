import Chip from ".";
import ArrowDownIcon from "../Icon/ArrowDownIcon";
import ArrowUpIcon from "../Icon/ArrowUpIcon";

interface ChipProps {
  rate: number;
}

export default function ProfitChip({ rate }: ChipProps) {
  return (
    <Chip
      icon={rate > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
      label={`${Number(rate).toFixed(1)}%`}
      size="small"
      style={{
        background: rate > 0 ? "#FDE0E0" : "#DCE1FF",
        color: rate > 0 ? "#F46565" : "#223CE9",
        fontWeight: "bold",
      }}
    />
  );
}
