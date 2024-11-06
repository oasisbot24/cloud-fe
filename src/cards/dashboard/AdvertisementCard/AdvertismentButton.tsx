import { ButtonBase } from "@mui/material";

function AdvertismentButton({ children }: { children: React.ReactNode }) {
  return (
    <ButtonBase className="w-fit rounded-full bg-[#22222299] px-6 py-3 text-white">
      {children}
    </ButtonBase>
  );
}

export default AdvertismentButton;
