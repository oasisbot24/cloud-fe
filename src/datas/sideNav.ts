import { atom } from "jotai";

const sideNavAtom = atom<boolean | null>(null);
sideNavAtom.debugLabel = "sideNavAtom";

export default sideNavAtom;
