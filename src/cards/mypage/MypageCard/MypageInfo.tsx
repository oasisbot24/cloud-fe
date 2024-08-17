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
    <Stack className="w-full h-full items-start justify-between gap-2">
      <Typography variant="h6" className="text-font-1">
        {title}
      </Typography>
      <Stack direction="row" className="w-full gap-4 items-end">
        <Stack
          direction="row"
          className="h-[42px] border-b border-solid border-x-0 border-t-0 border-neutral-300 w-full items-center gap-2"
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
