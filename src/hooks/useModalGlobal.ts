import { atom, useAtom } from "jotai";

const modalGlobalAtom = atom<JSX.Element | null>(null);
modalGlobalAtom.debugLabel = "modalGlobalAtom";

interface UseModalType {
  modal: JSX.Element | null;
  openModal: (element: JSX.Element) => void;
  closeModal: () => void;
}

function useModalGlobal(): UseModalType {
  const [modal, setModal] = useAtom(modalGlobalAtom);
  const closeModal = () => {
    setModal(null);
  };
  const openModal = (element: JSX.Element) => {
    setModal(element);
  };
  return { modal, openModal, closeModal };
}

export default useModalGlobal;
