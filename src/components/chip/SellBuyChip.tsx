import Chip from ".";

interface ChipProps {
  value?: string;
  sellColor: string;
  buyColor: string;
}

export default function SellBuyChip({ value, sellColor, buyColor }: ChipProps) {
  return (
    <Chip
      label={value === "sell" ? "판매" : "구매"}
      style={value === "sell" ? { backgroundColor: sellColor } : { backgroundColor: buyColor }}
      className="text-[14px] font-bold leading-[16px] text-white"
    />
  );
}
