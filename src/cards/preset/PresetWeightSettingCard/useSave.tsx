import { useAtom } from "jotai";

import ErrorDialog from "@/components/dialog/ErrorDialog";
import SaveDialog from "@/components/dialog/SaveDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import { presetAtom, presetWeightAtom } from "@/datas/preset";
import { sumPresetWeight } from "@/libs/preset";

export default function useSave() {
  const [preset] = useAtom(presetAtom);
  const [presetWeight] = useAtom(presetWeightAtom);
  const { openDialog } = useDialogGlobal();
  const handleSave = () => {
    if (!preset) return;
    if (preset.presetName === "") {
      openDialog(<ErrorDialog title="프리셋 명" content="설정 할 프리셋 이름을 기입해주세요." />);
      return;
    }
    if (preset.indicatorName === "") {
      openDialog(<ErrorDialog title="설정 보조지표" content="설정 할 보조지표를 선택해주세요." />);
      return;
    }
    if (preset.profitCutRate <= 0) {
      openDialog(<ErrorDialog title="익절율" content="익절율을 양수로 기입해주세요." />);
      return;
    }
    if (preset.lossCutRate >= 0) {
      openDialog(<ErrorDialog title="손절율" content="손절율을 음수로 기입해주세요." />);
      return;
    }
    if (sumPresetWeight(presetWeight) !== 100) {
      openDialog(
        <ErrorDialog title="매매비중" content="매매비중의 합이 100%가 되도록 설정해주세요." />,
      );
      return;
    }
    openDialog(<SaveDialog />);
  };
  return { handleSave };
}
