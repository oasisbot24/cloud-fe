import { useRouter } from "next/router";
import { Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import exchangeAtom from "@/datas/exchange";
import useSignin from "@/hooks/query/useSignin";
import useModal from "@/hooks/useModal";
import GoogleSigninButton from "./GoogleSigninButton";
import Agreement from "./dialog/Agreement";
import ExchangeSelect from "./dialog/ExchangeSelect";
import SigninDialog from "./dialog/SigninDialog";

function Description() {
  const { push } = useRouter();
  const [, setExchange] = useAtom(exchangeAtom);
  const { postAgreementMutation } = useSignin();
  const { modal, openModal, closeModal } = useModal();

  const openExchangeSelect = () => {
    openModal(
      <SigninDialog onClose={closeModal}>
        <ExchangeSelect
          onClick={(type: ExchangeType) => {
            setExchange(type);
            closeModal();
            push("/dashboard");
          }}
        />
      </SigninDialog>,
    );
  };

  const agree = (data: Record<AgreementType, boolean>) => {
    const body = { essentialAgreement: false, adAgreement: false };
    body.essentialAgreement = data.over14 && data.privacy && data.service;
    body.adAgreement = data.marketing;
    postAgreementMutation.mutate(body, {
      onSuccess: () => {
        closeModal();
        openExchangeSelect();
      },
    });
  };

  const openAgreement = () => {
    openModal(
      <SigninDialog onClose={closeModal}>
        <Agreement onClose={closeModal} onAgree={agree} />
      </SigninDialog>,
    );
  };

  const handleSuccess = (data: { isAgree: boolean }) => {
    if (data.isAgree) {
      openExchangeSelect();
    } else {
      openAgreement();
    }
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
      <GoogleSigninButton onSuccess={handleSuccess} />
      {modal}
    </Stack>
  );
}
export default Description;
