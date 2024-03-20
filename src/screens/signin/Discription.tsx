import { Stack, Typography } from "@mui/material";
import RoundButton from "@/screens/RoundButton";

function Discription() {
  return (
    <Stack className="h-full z-[1] justify-center ml-4 md:ml-32 gap-4">
      <Stack className="text-white gap-2">
        <Typography variant="bodyL">Search for the vein of money</Typography>
        <Stack>
          <Typography variant="display3">가상화폐 혁신적 수익전략과</Typography>
          <Typography variant="display3">
            운영을 도와드리는 자동매매는
          </Typography>
          <Typography variant="display3">오직 오아시스에서</Typography>
        </Stack>
      </Stack>
      <RoundButton>Hello</RoundButton>
    </Stack>
  );
}
export default Discription;
