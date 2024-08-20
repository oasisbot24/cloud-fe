import { atom } from "jotai";
import { PresetType } from "@/apis/preset/preset";

const presetAtom = atom<PresetType | null>(null);
presetAtom.debugLabel = "presetAtom";

export default presetAtom;
