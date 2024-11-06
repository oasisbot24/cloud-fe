import { Box, ButtonBase, Stack, Typography } from "@mui/material";

interface SelectButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  isFocused?: boolean;
}

function SelectButton({ children, onClick, color, isFocused = false }: SelectButtonProps) {
  return (
    <ButtonBase
      onClick={onClick}
      className="bg-netural-200 rounded-full"
      sx={{
        border: "1px solid",
        borderColor: isFocused ? color : "transparent",
      }}
    >
      <Stack direction="row" className="items-center justify-center gap-1 p-2.5">
        <Box className="h-[12px] w-[12px] rounded-full" sx={{ backgroundColor: color }} />
        <Typography variant="100B">{children}</Typography>
      </Stack>
    </ButtonBase>
  );
}

export default SelectButton;
