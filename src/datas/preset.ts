import { atom } from "jotai";

interface Preset {
  id: number;
  name: string;
  settingIndicator: string;
  profitRate: number;
  lossRate: number;
  setting: string | undefined;
}

const presetsAtom = atom<Preset[]>([
  {
    id: 1,
    name: "하락장 세팅",
    settingIndicator: "TD-SEQUENTIAL",
    profitRate: 0.2,
    lossRate: -3,
    setting: "",
  },
  {
    id: 2,
    name: "상승장 세팅",
    settingIndicator: "TD-SEQUENTIAL",
    profitRate: 0.6,
    lossRate: -2,
    setting: "",
  },
]);

export type { Preset };
export default presetsAtom;
