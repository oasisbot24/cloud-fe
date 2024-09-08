import { Stack } from "@mui/material";
import UserProfile from "@/layouts/TopNav/UserProfile";

/**
 import { NotificationDataType } from "@/layouts/TopNav/NotificationItem";
 const notiList: NotificationDataType[] = [
  { title: "title1", type: "preset", content: "content1", date: "2022-01-01" },
  {
    title: "title2",
    type: "backtest",
    content: "content2",
    date: "2022-01-02",
  },
  { title: "title3", type: "api", content: "content3", date: "2022-01-03" },
  { title: "title4", type: "bot", content: "content4", date: "2022-01-04" },
];
*/
export default function TopNav() {
  /** 
  const { modal, openModal, closeModal } = useModal();
  const handleOpenNotification = () => {
    openModal(
      <NotificationDialog
      handleClose={closeModal}
      notificationList={notiList}
      />,
    );
  };
  */
  return (
    <Stack
      direction="row"
      className="w-full h-[70px] px-4 shrink-0 bg-white shadow-sm justify-end items-center"
    >
      <Stack direction="row" className="gap-4">
        {
          // <NotificationBadge onClick={handleOpenNotification} />
          // {modal}
        }
        <UserProfile />
      </Stack>
    </Stack>
  );
}
