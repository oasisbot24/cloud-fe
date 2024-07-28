import { ButtonBase, Typography } from "@mui/material";
import ExchangeIcon from "@/components/Icon/ExchangeIcon";

interface ExchangeSelectButtonProps {
  type: ExchangeType;
  onClick?: (type: ExchangeType) => void;
}

const title = {
  okx: "OKX",
  upbit: "UPBIT",
};

function ExchangeSelectButton({ type, onClick }: ExchangeSelectButtonProps) {
  return (
    <ButtonBase
      className="rounded-full w-full text-font-2 border-neutral-400 py-4 flex gap-2 items-center hover:border-brand hover:text-brand"
      sx={{
        border: "1px solid",
      }}
      onClick={() => onClick && onClick(type)}
    >
      <ExchangeIcon exchange={type} />
      <Typography variant="bodyS">{title[type]}</Typography>
    </ButtonBase>
  );
}

export default ExchangeSelectButton;
