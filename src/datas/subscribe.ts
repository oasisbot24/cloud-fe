import { atom } from "jotai";

const productMonthAtom = atom<Subscribe.ProductMonth>(3);
productMonthAtom.debugLabel = "subscribeMonthAtom";

const productKeyAtom = atom<Subscribe.ProductKey | null>(null);
productKeyAtom.debugLabel = "subscribeTypeAtom";

export { productMonthAtom, productKeyAtom };
