import { atom } from "jotai";
import { PresetType } from "@/apis/preset/preset";

const presetAtom = atom<PresetType | null>(null);
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

const presetMenuAtom = atom<"preset" | "indicator">("preset");
presetMenuAtom.debugLabel = "presetMenuAtom";

export { presetAtom, presetMenuAtom };
export { presetInit };
