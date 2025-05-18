import { atom } from "jotai";

const productMonthAtom = atom<Subscribe.ProductMonth>(3);
productMonthAtom.debugLabel = "subscribeMonthAtom";

const productKeyAtom = atom<Subscribe.ProductKey | null>(null);
productKeyAtom.debugLabel = "subscribeTypeAtom";

const promotionCodeAtom = atom<string>("");
promotionCodeAtom.debugLabel = "promotionCodeAtom";

export { productMonthAtom, productKeyAtom, promotionCodeAtom };
