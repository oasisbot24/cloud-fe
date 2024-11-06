import { Stack, Typography } from "@mui/material";

import RoundButton from "@/components/common/RoundButton";

interface MypageInfoProps {
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
}

function MypageInfo({ title, buttonText, children, onClick }: MypageInfoProps) {
  return (
    <Stack className="h-full w-full items-start justify-between gap-2">
      <Typography variant="h6" className="text-font-1">
        {title}
      </Typography>
      <Stack direction="row" className="w-full items-end gap-4">
        <Stack
          direction="row"
          className="h-[42px] w-full items-center gap-2 border-x-0 border-b border-t-0 border-solid border-neutral-300"
        >
          {children}
        </Stack>
        {buttonText && (
          <RoundButton onClick={onClick} focus>
            {buttonText}
          </RoundButton>
        )}
      </Stack>
    </Stack>
  );
}

export default MypageInfo;
