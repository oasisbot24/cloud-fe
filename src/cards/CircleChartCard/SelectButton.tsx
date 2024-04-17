import { Box, ButtonBase, Stack, Typography } from "@mui/material";

interface SelectButtonProps {
  children: React.ReactNode;
  color?: string;
  isFocused?: boolean;
}

function SelectButton({
  children,
  color,
  isFocused = false,
}: SelectButtonProps) {
  return (
    <ButtonBase
      className="rounded-full bg-netural-200"
      sx={{
        border: "1px solid",
        borderColor: isFocused ? color : "transparent",
      }}
    >
      <Stack
        direction="row"
        className="justify-center gap-1 items-center p-2.5"
      >
        <Box
          className="rounded-full w-[12px] h-[12px]"
          sx={{ backgroundColor: color }}
        />
        <Typography variant="100B">{children}</Typography>
      </Stack>
    </ButtonBase>
  );
}

export default SelectButton;
