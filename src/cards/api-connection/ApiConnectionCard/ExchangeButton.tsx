import { ButtonBase, Stack, Typography } from "@mui/material";
import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import { useSmartAccessMutation } from "@/hooks/query/useSmartAccess";
import openScrap from "./openScrap";

interface ExchangeButtonProps {
  exchange: ExchangeType;
  isConnected: boolean;
}
export default function ExchangeButton({
  exchange,
  isConnected,
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
        backgroundColor: isConnected ? "#EEF0FE" : "white",
      }}
      disabled={isConnected}
      onClick={clickHandler}
    >
      <Stack>
        <ExchangeIcon exchange={exchange} size={60} />
        {isConnected ? (
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
