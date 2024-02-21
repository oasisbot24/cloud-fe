import { atom } from "jotai";

interface Setting {
  bank_name: "okx" | "upbit";
}

const settingAtom = atom<Setting>({} as Setting);

export type { Setting };
export default settingAtom;
