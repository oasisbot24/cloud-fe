import { Box, ButtonBase, Paper, Stack, Typography } from "@mui/material";

import NotificationItem, { NotificationDataType } from "@/layouts/TopNav/NotificationItem";

interface NotificationDialogProps {
  handleClose: () => void;
  notificationList?: NotificationDataType[];
}

export default function NotificationDialog({
  handleClose,
  notificationList,
}: NotificationDialogProps) {
  return (
    <>
      <Box className="fixed left-0 top-0 z-50 h-full w-full bg-transparent" onClick={handleClose} />
      <Paper
        className="absolute right-4 top-[70px] z-[999] flex h-[400px] w-[382px] flex-col justify-between rounded-xl"
        sx={{
          boxShadow: "-8px 42px 120px 0px #7E7BA033",
          border: "1px solid",
          borderImageSource:
            "linear-gradient(62.65deg, #FFFFFF 15.08%, rgba(255, 255, 255, 0) 90.38%)",
          background:
            "linear-gradient(190.57deg, rgba(255, 255, 255, 0.56) 19.25%, rgba(248, 248, 255, 0.71) 54.39%, rgba(255, 255, 255, 0.59) 90.02%)",
        }}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Box className="rounded-t-xl bg-[#FFFFFFAA] p-4">
          <Typography variant="200B">알림</Typography>
        </Box>
        <Stack className="h-full overflow-y-auto">
          {notificationList ? (
            notificationList.map((notification, index) => (
              <NotificationItem key={index} notification={notification} />
            ))
          ) : (
            <Stack className="h-full w-full items-center justify-center">
              <Typography variant="300R">알림이 없습니다.</Typography>
            </Stack>
          )}
        </Stack>
        <Stack direction="row" className="justify-center p-4">
          <ButtonBase className="rounded-full border border-neutral-100 bg-[#FFFFFF80] px-4 py-2 text-[14px] text-neutral-600">
            전체보기
          </ButtonBase>
        </Stack>
      </Paper>
    </>
  );
}
