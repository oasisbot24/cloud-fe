import { ButtonBase } from "@mui/material";

function RoundButton({ children }: { children: React.ReactNode }) {
  return (
    <ButtonBase
      className="rounded-full text-white border-white w-[100px]"
      sx={{
        border: "1px solid",
      }}
    >
      {children}
    </ButtonBase>
  );
}

export default RoundButton;
