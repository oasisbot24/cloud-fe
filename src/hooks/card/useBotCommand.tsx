import React from "react";

import { useAtomValue } from "jotai";

import InfoDialog from "@/components/common/InfoDialog";
import { selectedBotRowAtom } from "@/datas/oasisbotTransaction";
import { useBot, useBotDetailQuery } from "@/hooks/query/useOasisBot";
import useModalGlobal from "@/hooks/useModalGlobal";

function useBotCommand() {
  const { stopBotMutation, restartBotMutation } = useBot();
  const { openModal, closeModal } = useModalGlobal();

  const stopBot = ({ selected, onSuccess }: { selected: number; onSuccess?: () => void }) => {
    openModal(
      <InfoDialog
        title="봇 중지"
        description={[
          "매수된 종목이 있을 시, 자동 매도가 안되어 잔고에 영향을 초래할 수 있습니다.",
        ]}
        confirmFunc={() => {
          stopBotMutation.mutate(Number(selected));
          !!onSuccess && onSuccess();
          closeModal();
        }}
        cancelFunc={closeModal}
        cancellable
      />,
    );
  };

  const restartBot = ({ selected, onSuccess }: { selected: number; onSuccess?: () => void }) => {
    openModal(
      <InfoDialog
        title="봇 재실행"
        description={["봇을 재실행하시겠습니까?"]}
        confirmFunc={() => {
          restartBotMutation.mutate(Number(selected));
          !!onSuccess && onSuccess();
          closeModal();
        }}
        cancelFunc={closeModal}
        cancellable
      />,
    );
  };

  return { stopBot, restartBot };
}

export default useBotCommand;
