import { atom, useAtom } from "jotai";

const DialogGlobalAtom = atom<JSX.Element | null>(null);
DialogGlobalAtom.debugLabel = "DialogGlobalAtom";

interface UseDialogType {
  Dialog: JSX.Element | null;
  openDialog: (element: JSX.Element) => void;
  closeDialog: () => void;
}

function useDialogGlobal(): UseDialogType {
  const [Dialog, setDialog] = useAtom(DialogGlobalAtom);
  const closeDialog = () => {
    setDialog(null);
  };
  const openDialog = (element: JSX.Element) => {
    setDialog(element);
  };
  return { Dialog, openDialog, closeDialog };
}

export default useDialogGlobal;
