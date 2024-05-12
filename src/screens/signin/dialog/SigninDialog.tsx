import { IconButton, Paper, Stack } from "@mui/material";
import Icon from "@/components/Icon/index";

interface SigninDialogProps {
  handleClose: () => void;
  children: React.ReactNode;
}

export default function SigninDialog({
  handleClose,
  children,
}: SigninDialogProps) {
  return (
    <Stack
      className="fixed w-full h-full bg-transparent top-0 left-0"
      onClick={handleClose}
    >
      <Paper
        className="bg-white rounded-xl w-fit p-4 absolute 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        sx={{ "box-shadow": "0px 30px 40px 0px #252D3538" }}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <IconButton className="absolute top-4 right-4" onClick={handleClose}>
          <Icon src="/icons/control/close-dark.png" size={32} />
        </IconButton>
        {children}
      </Paper>
    </Stack>
  );
}
