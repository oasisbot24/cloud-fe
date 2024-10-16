import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { PresetType } from "@/apis/preset/preset";

const presetAtom = atomWithReset<PresetType | null>(null);
presetAtom.debugLabel = "presetAtom";

const presetInit = {
  id: 0,
  presetName: "",
  indicatorName: "",
  presetData: "",
  position: "",
  profitCutRate: 0,
  lossCutRate: 0,
};

interface PresetWeightType {
  카운팅1: number;
  카운팅2: number;
  카운팅3: number;
  카운팅4: number;
  카운팅5: number;
  카운팅6: number;
  카운팅7: number;
  카운팅8: number;
  카운팅9: number;
  카운팅10: number;
  카운팅11: number;
  카운팅12: number;
}

const presetWeightInit: PresetWeightType = {
  카운팅1: 0,
  카운팅2: 0,
  카운팅3: 0,
  카운팅4: 0,
  카운팅5: 0,
  카운팅6: 0,
  카운팅7: 0,
  카운팅8: 0,
  카운팅9: 0,
  카운팅10: 0,
  카운팅11: 0,
  카운팅12: 0,
};

const presetWeightAtom = atomWithReset<PresetWeightType>(presetWeightInit);
presetWeightAtom.debugLabel = "presetWeightAtom";

const presetMenuAtom = atom<"preset" | "indicator">("preset");
presetMenuAtom.debugLabel = "presetMenuAtom";

export { presetAtom, presetMenuAtom, presetWeightAtom };
export { presetInit, presetWeightInit };
export type { PresetWeightType };
