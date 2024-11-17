import React from "react";

import { useAtomValue } from "jotai";

import InfoDialog from "@/components/common/InfoDialog";
import { botAtom } from "@/datas/oasisbotTransaction";
import { useBot } from "@/hooks/query/useOasisBot";
import useModalGlobal from "@/hooks/useModalGlobal";

function useBotCommand() {
  const { stopBotMutation, restartBotMutation } = useBot();
  const { openModal, closeModal } = useModalGlobal();
  const selectedBot = useAtomValue(botAtom);

  const stopBot = ({ onSuccess }: { onSuccess?: () => void }) => {
    openModal(
      <InfoDialog
        title="봇 중지"
        description={[
          "매수된 종목이 있을 시, 자동 매도가 안되어 잔고에 영향을 초래할 수 있습니다.",
        ]}
        confirmFunc={() => {
          stopBotMutation.mutate(selectedBot.id);
          !!onSuccess && onSuccess();
          closeModal();
        }}
        cancelFunc={closeModal}
        cancellable
      />,
    );
  };

  const restartBot = ({ onSuccess }: { onSuccess?: () => void }) => {
    restartBotMutation.mutate(selectedBot.id);
    !!onSuccess && onSuccess();
  };

  return { stopBot, restartBot };
}

export default useBotCommand;
