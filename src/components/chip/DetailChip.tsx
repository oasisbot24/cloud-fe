import Chip from ".";

interface ChipProps {
  onClick?: () => void;
}

export default function DetailChip({ onClick }: ChipProps) {
  return <Chip label="자세히 보기" variant="outlined" className="my-2" onClick={onClick} />;
}
