import { Button } from "@mui/material";
import LeverageNoticeDialog from "@/cards/TempCard/LeverageNoticeDialog";
import useModal from "@/hooks/useModal";
import Card from "../Card";

export default function TempCard() {
  const { modal, openModal, closeModal } = useModal();
  const handleOpenNoticeCard = () => {
    openModal(<LeverageNoticeDialog handleClose={closeModal} />);
  };
  return (
    <Card>
      <Button onClick={handleOpenNoticeCard} />
      {modal}
    </Card>
  );
}
