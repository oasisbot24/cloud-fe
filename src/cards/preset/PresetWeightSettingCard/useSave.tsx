import { useAtom } from "jotai";

import useModalGlobal from "@/components/dialog/useModalGlobal";
import { presetAtom, presetWeightAtom } from "@/datas/preset";
import { sumPresetWeight } from "@/libs/preset";

import ErrorDialog from "../../../components/dialog/ErrorDialog";
import SaveDialog from "../../../components/dialog/SaveDialog";

export default function useSave() {
  const [preset] = useAtom(presetAtom);
  const [presetWeight] = useAtom(presetWeightAtom);
  const { openModal } = useModalGlobal();
  const handleSave = () => {
    if (!preset) return;
    if (preset.presetName === "") {
      openModal(<ErrorDialog title="프리셋 명" content="설정 할 프리셋 이름을 기입해주세요." />);
      return;
    }
    if (preset.indicatorName === "") {
      openModal(<ErrorDialog title="설정 보조지표" content="설정 할 보조지표를 선택해주세요." />);
      return;
    }
    if (preset.profitCutRate <= 0) {
      openModal(<ErrorDialog title="익절율" content="익절율을 양수로 기입해주세요." />);
      return;
    }
    if (preset.lossCutRate >= 0) {
      openModal(<ErrorDialog title="손절율" content="손절율을 음수로 기입해주세요." />);
      return;
    }
    if (sumPresetWeight(presetWeight) !== 100) {
      openModal(
        <ErrorDialog title="매매비중" content="매매비중의 합이 100%가 되도록 설정해주세요." />,
      );
      return;
    }
    openModal(<SaveDialog />);
  };
  return { handleSave };
}
