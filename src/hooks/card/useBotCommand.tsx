import React from "react";

import InfoDialog from "@/components/dialog/InfoDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import { useBot } from "@/hooks/query/useOasisBot";

function useBotCommand() {
  const { stopBotMutation, restartBotMutation } = useBot();
  const { openDialog, closeDialog } = useDialogGlobal();

  const stopBot = ({ selected, onSuccess }: { selected: number; onSuccess?: () => void }) => {
    openDialog(
      <InfoDialog
        title="봇 중지"
        description={[
          "매수된 종목이 있을 시, 자동 매도가 안되어 잔고에 영향을 초래할 수 있습니다.",
        ]}
        confirmFunc={() => {
          stopBotMutation.mutate(Number(selected));
          !!onSuccess && onSuccess();
          closeDialog();
        }}
        cancelFunc={closeDialog}
        cancellable
      />,
    );
  };

  const restartBot = ({ selected, onSuccess }: { selected: number; onSuccess?: () => void }) => {
    openDialog(
      <InfoDialog
        title="봇 재실행"
        description={["봇을 재실행하시겠습니까?"]}
        confirmFunc={() => {
          restartBotMutation.mutate(Number(selected));
          !!onSuccess && onSuccess();
          closeDialog();
        }}
        cancelFunc={closeDialog}
        cancellable
      />,
    );
  };

  return { stopBot, restartBot };
}

export default useBotCommand;
