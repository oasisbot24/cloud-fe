import { atom } from "jotai";

interface Preset {
  id: number;
  presetName: string;
  indicatorName: string;
  presetData: string;
  position: string;
  profitCutRate: number;
  lossCutRate: number;
  setting: string | undefined;
}

interface Indicator {
  id: number;
  indicatorName: string;
}

const selectedPresetAtom = atom<Preset | null>(null);

const presetNameAtom = atom<string>("");
const indicatorNameAtom = atom<string>("TD_Sequential");
const positionAtom = atom<string>("long");
const profitCutRateAtom = atom<string>("0");
const lossCutRateAtom = atom<string>("0");

export type { Preset, Indicator };
export {
  selectedPresetAtom,
  presetNameAtom,
  indicatorNameAtom,
  positionAtom,
  profitCutRateAtom,
  lossCutRateAtom,
};
