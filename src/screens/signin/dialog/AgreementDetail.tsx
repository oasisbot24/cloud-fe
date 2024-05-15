import { Button, Stack, Typography } from "@mui/material";

export type DetailType = "service" | "privacy" | "marketing" | "over14";

interface AgreementDetailProps {
  detailType: DetailType;
  setDetailType: (type: DetailType) => void;
}

export default function AgreementDetail({
  detailType,
  setDetailType,
}: AgreementDetailProps) {
  return (
    <>
      <Stack className="w-full gap-1">
        <Typography variant="bodyS" className="text-font-3">
          서비스 이용을 위해 아래 약관에 모두 동의합니다.
        </Typography>
      </Stack>
      <Button
        variant="contained"
        className="w-full rounded-full"
        onClick={() => setDetailType(null)}
      >
        확인
      </Button>
    </>
  );
}
