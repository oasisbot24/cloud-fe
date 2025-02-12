import ArrowDownIcon from "@/components/Icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import Chip from "@/components/chip/index";

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
