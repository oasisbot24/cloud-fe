import { ButtonBase, Stack, Typography } from "@mui/material";
import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import { useSmartAccessMutation } from "@/hooks/query/useSmartAccess";
import openScrap from "./openScrap";

interface ExchangeButtonProps {
  exchange: ExchangeType;
  isConnected?: boolean;
  disabled?: boolean;
}
export default function ExchangeButton({
  exchange,
  isConnected = false,
  disabled = false,
}: ExchangeButtonProps) {
  const { postSmartAccessSessionMutation, postSmartAccessResultMutation } =
    useSmartAccessMutation();
  const clickHandler = () => {
    postSmartAccessSessionMutation.mutate(exchange, {
      onSuccess: u => {
        openScrap(u, () => {
          postSmartAccessResultMutation.mutate({
            exchange,
            body: { uid: u },
          });
        });
      },
    });
  };
  return (
    <ButtonBase
      className="rounded-full border border-solid border-neutral-300 w-[146px] h-[146px]"
      sx={{
        backgroundColor: disabled
          ? "#e3e3e3"
          : isConnected
            ? "#EEF0FE"
            : "white",
      }}
      disabled={isConnected || disabled}
      onClick={clickHandler}
    >
      <Stack>
        <ExchangeIcon exchange={exchange} size={60} />
        {disabled ? (
          <Typography variant="300R" className="text-sub-1">
            지원예정
          </Typography>
        ) : isConnected ? (
          <Typography variant="300R" className="text-sub-1">
            연결완료
          </Typography>
        ) : (
          <Typography variant="300R" className="text-font-2">
            연결하기
          </Typography>
        )}
      </Stack>
    </ButtonBase>
  );
}
