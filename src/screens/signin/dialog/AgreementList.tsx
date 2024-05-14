import { useState } from "react";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon/index";
import CustomCheckbox from "@/components/common/CustomCheckbox";
import { DetailType } from "@/screens/signin/dialog/AgreementDetail";

interface CheckItemProps {
  title: string;
  checked?: boolean;
  onClick?: () => void;
  onClickViewDetail?: () => void;
}

function CheckItem({
  title,
  checked = false,
  onClick,
  onClickViewDetail,
}: CheckItemProps) {
  return (
    <Stack
      direction="row"
      className="w-full justify-between items-center min-h-[44px]"
    >
      <Stack direction="row" className="gap-2 items-center">
        <CustomCheckbox checked={checked} onClick={onClick} />
        <Typography variant="bodyS" className="text-font-3">
          {title}
        </Typography>
      </Stack>
      {onClickViewDetail && (
        <IconButton onClick={onClickViewDetail}>
          <Icon src="/icons/arrow/right.png" size={28} />
        </IconButton>
      )}
    </Stack>
  );
}

interface AgreementListProps {
  handleClose: () => void;
  handleOK: () => void;
  setDetailType: (type: DetailType) => void;
}

export default function AgreementList({
  handleClose,
  handleOK,
  setDetailType,
}: AgreementListProps) {
  const titleObject: Record<DetailType, string> = {
    over14: "[필수] 만 14세 이상입니다.",
    service: "[필수] 서비스 이용약관 동의",
    privacy: "[필수] 개인정보 처리방침 동의",
    marketing: "[선택] 마케팅 수신 동의",
  };
  const [checked, setChecked] = useState<Record<DetailType, boolean>>({
    over14: false,
    service: false,
    privacy: false,
    marketing: false,
  });

  return (
    <>
      <Stack className="px-2 gap-1">
        <Stack>
          <CheckItem
            title="모두 동의"
            checked={
              checked.over14 &&
              checked.service &&
              checked.privacy &&
              checked.marketing
            }
            onClick={() =>
              setChecked({
                over14: true,
                service: true,
                privacy: true,
                marketing: true,
              })
            }
          />
          <Typography variant="200R" className="text-font-3 ml-10 mb-4">
            서비스 이용을 위해 아래 약관에 모두 동의합니다.
          </Typography>
        </Stack>
        <Divider className="my-2" />
        {Object.keys(titleObject).map(key => (
          <CheckItem
            key={key}
            title={titleObject[key as DetailType]}
            checked={checked[key as DetailType]}
            onClick={() =>
              setChecked({
                ...checked,
                [key as DetailType]: !checked[key as DetailType],
              })
            }
            onClickViewDetail={() => setDetailType(key as DetailType)}
          />
        ))}
      </Stack>
      <Stack direction="row" className="gap-2">
        <Button
          variant="outlined"
          className="w-full rounded-full"
          onClick={handleClose}
        >
          취소
        </Button>
        <Button
          variant="contained"
          className="w-full rounded-full"
          onClick={handleOK}
          disabled={!checked.over14 || !checked.service || !checked.privacy}
        >
          확인
        </Button>
      </Stack>
    </>
  );
}
