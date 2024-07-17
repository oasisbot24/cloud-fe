import { useState } from "react";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon/index";
import CustomCheckbox from "@/components/common/CustomCheckbox";

interface CheckItemProps {
  title: string;
  checked?: boolean;
  onClick?: () => void;
  href?: string;
}

function CheckItem({ title, checked = false, onClick, href }: CheckItemProps) {
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
      {href && (
        <IconButton href={href} target="_blank">
          <Icon src="/icons/arrow/right.png" size={28} />
        </IconButton>
      )}
    </Stack>
  );
}

interface AgreementListProps {
  handleClose: () => void;
  handleOK: (data: Record<AgreementType, boolean>) => void;
}

export default function AgreementList({
  handleClose,
  handleOK,
}: AgreementListProps) {
  const titleObject: Record<AgreementType, string> = {
    over14: "[필수] 만 14세 이상입니다.",
    service: "[필수] 서비스 이용약관 동의",
    privacy: "[필수] 개인정보 처리방침 동의",
    marketing: "[선택] 마케팅 수신 동의",
  };
  const pdfObject: Record<AgreementType, string> = {
    over14: "/pdf/오아시스서비스이용약관.pdf",
    service: "/pdf/오아시스서비스이용약관.pdf",
    privacy: "/pdf/오아시스서비스이용약관.pdf",
    marketing: "/pdf/마케팅수신동의.pdf",
  };
  const [checked, setChecked] = useState<Record<AgreementType, boolean>>({
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
            title={titleObject[key as AgreementType]}
            checked={checked[key as AgreementType]}
            onClick={() =>
              setChecked({
                ...checked,
                [key as AgreementType]: !checked[key as AgreementType],
              })
            }
            href={pdfObject[key as AgreementType]}
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
          onClick={() => handleOK(checked)}
          disabled={!checked.over14 || !checked.service || !checked.privacy}
        >
          확인
        </Button>
      </Stack>
    </>
  );
}
