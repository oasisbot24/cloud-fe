import { ButtonBase } from "@mui/material";

function AdvertismentButton({ children }: { children: React.ReactNode }) {
  return (
    <ButtonBase className="bg-[#22222299] rounded-full text-white px-6 py-3 w-fit">
      {children}
    </ButtonBase>
  );
}

export default AdvertismentButton;
