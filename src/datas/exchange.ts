import { atom } from "jotai";

const exchangeAtom = atom<ExchangeType>("upbit");
exchangeAtom.debugLabel = "exchangeAtom";

export default exchangeAtom;
