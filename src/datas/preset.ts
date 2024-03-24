import { atom } from "jotai";

interface Preset {
  id?: number;
  presetName: string;
  indicatorName: string;
  presetData: string;
  position: string;
  profitCutRate: number;
  lossCutRate: number;
  setting?: string;
}

interface Indicator {
  id: number;
  indicatorName: string;
}

const selectedPresetIdAtom = atom<string>("");
const presetNameAtom = atom<string>("");
const indicatorNameAtom = atom<string>("TD_Sequential");
const positionAtom = atom<string>("long");
const profitCutRateAtom = atom<string>("0");
const lossCutRateAtom = atom<string>("0");

export type { Preset, Indicator };
export {
  selectedPresetIdAtom,
  presetNameAtom,
  indicatorNameAtom,
  positionAtom,
  profitCutRateAtom,
  lossCutRateAtom,
};
