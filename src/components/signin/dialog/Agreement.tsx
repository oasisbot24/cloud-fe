import { Stack, Typography } from "@mui/material";

import AgreementList from "@/components/signin/dialog/AgreementList";

interface AgreementProps {
  onClose: () => void;
  onAgree: (data: Record<AgreementType, boolean>) => void;
}

export default function Agreement({ onClose, onAgree }: AgreementProps) {
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
      <AgreementList onClose={onClose} onAgree={onAgree} />
    </Stack>
  );
}
