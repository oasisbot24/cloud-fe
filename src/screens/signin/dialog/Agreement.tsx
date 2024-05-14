import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import AgreementDetail, {
  DetailType,
} from "@/screens/signin/dialog/AgreementDetail";
import AgreementList from "@/screens/signin/dialog/AgreementList";

interface AgreementProps {
  handleClose: () => void;
  handleOK: () => void;
}

export default function Agreement({ handleClose, handleOK }: AgreementProps) {
  const [detailType, setDetailType] = useState<DetailType | null>(null);
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
      {detailType ? (
        <AgreementDetail
          detailType={detailType}
          setDetailType={setDetailType}
        />
      ) : (
        <AgreementList
          handleClose={handleClose}
          handleOK={handleOK}
          setDetailType={setDetailType}
        />
      )}
    </Stack>
  );
}
