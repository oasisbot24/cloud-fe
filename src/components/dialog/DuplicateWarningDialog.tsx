import React from "react";

import InfoDialog from "@/components/dialog/InfoDialog";

function DuplicateWarningDialog({ handleClose }: { handleClose: () => void }) {
  return (
    <InfoDialog
      title="중복 종목"
      description={["종목당 1개의 봇 운영을 정책으로 하고 있습니다."]}
      confirmFunc={handleClose}
    />
  );
}

export default DuplicateWarningDialog;
