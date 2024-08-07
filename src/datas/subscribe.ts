import { atom } from "jotai";

const subscribeMonthAtom = atom<SubscribeMonth>(3);
subscribeMonthAtom.debugLabel = "subscribeMonthAtom";

const subscribeTypeAtom = atom<SubscribeType | null>(null);
subscribeTypeAtom.debugLabel = "subscribeTypeAtom";

export { subscribeMonthAtom, subscribeTypeAtom };
