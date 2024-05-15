import { atom, useAtom } from "jotai";

const modalAtom = atom<JSX.Element | null>(null);
modalAtom.debugLabel = "modalAtom";

interface UseModalType {
  modal: JSX.Element | null;
  openModal: (element: JSX.Element) => void;
  closeModal: () => void;
}

function useModal(): UseModalType {
  const [modal, setModal] = useAtom(modalAtom);
  const closeModal = () => {
    setModal(null);
  };
  const openModal = (element: JSX.Element) => {
    setModal(element);
  };
  return { modal, openModal, closeModal };
}

export default useModal;
