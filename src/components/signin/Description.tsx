import { useRouter } from "next/router";

import { Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

import SigninDialog from "@/components/dialog/SigninDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import GoogleSigninButton from "@/components/signin/GoogleSigninButton";
import Agreement from "@/components/signin/dialog/Agreement";
import ExchangeSelect from "@/components/signin/dialog/ExchangeSelect";
import exchangeAtom from "@/datas/exchange";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";
import useSignin from "@/hooks/query/useSignin";

function Description() {
  const {
    userExchangeQuery: { data: userExchangeData },
  } = useUserExchangesQuery();
  const { push } = useRouter();
  const [, setExchange] = useAtom(exchangeAtom);
  const { postAgreementMutation } = useSignin();
  const { Dialog, openDialog, closeDialog } = useDialogGlobal();

  const openExchangeSelect = () => {
    openDialog(
      <SigninDialog onClose={closeDialog}>
        <ExchangeSelect
          onClick={(type: ExchangeType) => {
            localStorage.setItem("exchange", type);
            setExchange(type);
            closeDialog();
            if (!userExchangeData || userExchangeData.length === 0) {
              push("/api-connection");
            } else {
              push("/dashboard");
            }
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
        closeDialog();
        openExchangeSelect();
      },
    });
  };

  const openAgreement = () => {
    openDialog(
      <SigninDialog onClose={closeDialog}>
        <Agreement onClose={closeDialog} onAgree={agree} />
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
    <Stack className="z-[1] ml-4 h-full justify-center gap-4 pb-8 md:ml-32">
      <Stack className="gap-2 text-white">
        <Typography variant="bodyL">Search for the vein of money</Typography>
        <Stack>
          <Typography variant="display3">가상화폐 혁신적 수익전략과</Typography>
          <Typography variant="display3">운영을 도와드리는 자동매매는</Typography>
          <Typography variant="display3">오직 오아시스에서</Typography>
        </Stack>
      </Stack>
      <GoogleSigninButton onSuccess={handleSuccess} />
      {Dialog}
    </Stack>
  );
}
export default Description;
