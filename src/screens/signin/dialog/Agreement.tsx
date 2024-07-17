import { Stack, Typography } from "@mui/material";
import AgreementList from "@/screens/signin/dialog/AgreementList";

interface AgreementProps {
  handleClose: () => void;
  handleOK: (data: Record<AgreementType, boolean>) => void;
}

export default function Agreement({ handleClose, handleOK }: AgreementProps) {
  return (
    <Stack className="min-w-[428px] gap-6">
      <Stack>
        <Typography variant="h6" className="text-font-1">
          약관에 동의해주세요
        </Typography>
        <Typography variant="bodyS" className="text-font-3">
          여러분의 개인정보와 서비스 이용권리, 잘 지켜드릴게요.
        </Typography>
      </Stack>
      <AgreementList handleClose={handleClose} handleOK={handleOK} />
    </Stack>
  );
}
