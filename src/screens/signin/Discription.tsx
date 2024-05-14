import { Stack, Typography } from "@mui/material";
import useModal from "@/hooks/useModal";
import GoogleSigninButton from "@/screens/signin/GoogleSigninButton";
import SelectExchange from "@/screens/signin/dialog/SelectExchange";
import SigninDialog from "@/screens/signin/dialog/SigninDialog";
import Agreement from "./dialog/Agreement";

function Discription() {
  const { modal, openModal, closeModal } = useModal();
  const openSelectExchange = () => {
    openModal(
      <SigninDialog handleClose={closeModal}>
        <SelectExchange />
      </SigninDialog>,
    );
  };
  const openAgreement = () => {
    openModal(
      <SigninDialog handleClose={closeModal}>
        <Agreement handleClose={closeModal} handleOK={openSelectExchange} />
      </SigninDialog>,
    );
  };

  return (
    <Stack className="h-full z-[1] justify-center ml-4 md:ml-32 gap-4 pb-8">
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
      <GoogleSigninButton onClick={openAgreement} />
      {modal}
    </Stack>
  );
}
export default Discription;
