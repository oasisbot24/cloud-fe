import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function RoundButton({ children }: { children: React.ReactNode }) {
  const StyledButton = styled(Button)({
    borderRadius: "20px",
    padding: "10px 20px",
    fontSize: "1.5rem",
  });

  return (
    <StyledButton
      variant="outlined"
      className="rounded-full text-white border-white"
    >
      {children}
    </StyledButton>
  );
}

export default RoundButton;
