import { atom } from "jotai";

interface Setting {
  bankName: "okx" | "upbit" | "";
  botStatus: {
    isRunning: boolean;
    presetName: string;
    presetId: number;
  };
}

const settingAtom = atom<Setting>({
  bankName: "",
  botStatus: {
    isRunning: false,
    presetName: "",
    presetId: 0,
  },
} as Setting);

export type { Setting };
export default settingAtom;
