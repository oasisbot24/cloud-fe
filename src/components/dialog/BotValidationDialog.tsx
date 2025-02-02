import { useEffect } from "react";

import { useRouter } from "next/router";

import InfoDialog from "@/components/dialog/InfoDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";

type Props = {
  code: number;
  message: string;
};

function BotValidationDialog({ code, message }: Props) {
  const { push } = useRouter();
  const { closeDialog } = useDialogGlobal();

  useEffect(() => {
    console.log(message);
  }, []);
  if (code === 8)
    return <InfoDialog title="활성화 봇 제한" description={[message]} confirmFunc={closeDialog} />;
  else {
    return (
      <InfoDialog
        title="활성화 봇 제한"
        description={[message]}
        confirmFunc={() => {
          closeDialog();
          push("/subscribe");
        }}
        confirmBtnText="플랜 업그레이드"
        cancellable
      />
    );
  }
}

export default BotValidationDialog;
