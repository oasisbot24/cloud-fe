import { Chip as MuiChip } from "@mui/material";

interface ChipProps {
  className?: string;
  icon?: React.ReactElement;
  label?: string | React.ReactElement;
  size?: "small" | "medium";
  style?: React.CSSProperties;
  variant?: "outlined";
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  onClick?: () => void;
}

export default function Chip({
  className,
  icon,
  label,
  size,
  style,
  variant,
  color,
  onClick,
}: ChipProps) {
  return (
    <MuiChip
      className={className}
      icon={icon}
      label={label}
      size={size}
      style={{
        ...style,
      }}
      color={color}
      variant={variant}
      onClick={onClick}
    />
  );
}
