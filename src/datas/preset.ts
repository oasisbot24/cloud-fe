import { atom } from "jotai";

interface Preset {
  name: string;
  indicator: string;
  position: string;
  profitRate: number;
  lossRate: number;
  weight: { [key: string]: number };
}

const presetAtom = atom<Preset>({
  name: "하락장 세팅",
  indicator: "",
  position: "",
  profitRate: 0,
  lossRate: 0,
  weight: {},
} as Preset);

export type { Preset };
export default presetAtom;
