import { atom } from "jotai";

const subscribeMonthAtom = atom<1 | 3>(3);
subscribeMonthAtom.debugLabel = "subscribeMonthAtom";

const subscribeTypeAtom = atom<"free" | "promotion" | "allinone" | null>(null);
subscribeTypeAtom.debugLabel = "subscribeTypeAtom";

export { subscribeMonthAtom, subscribeTypeAtom };
