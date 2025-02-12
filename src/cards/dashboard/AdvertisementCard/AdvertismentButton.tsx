import { ButtonBase } from "@mui/material";

function AdvertismentButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <ButtonBase
      className="w-fit rounded-full bg-[#22222299] px-6 py-3 shadow-[0_0_0_1px_rgba(255,255,255,1)]"
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
}

export default AdvertismentButton;
