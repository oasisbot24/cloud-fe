import { atom } from "jotai";

interface Setting {
  bankName: "okx" | "upbit" | "";
  botStatus: {
    isRunning: boolean;
  };
}

const settingAtom = atom<Setting>({
  bankName: "",
  botStatus: {
    isRunning: false,
  },
} as Setting);

export type { Setting };
export default settingAtom;
