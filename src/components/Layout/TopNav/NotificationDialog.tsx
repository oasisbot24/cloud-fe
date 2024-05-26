import { Box, ButtonBase, Paper, Stack, Typography } from "@mui/material";
import NotificationItem, {
  NotificationDataType,
} from "@/components/Layout/TopNav/NotificationItem";

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
      <Box
        className="fixed w-full h-full bg-transparent top-0 left-0 z-50"
        onClick={handleClose}
      />
      <Paper
        className="top-[70px] right-4 rounded-xl w-[382px] h-[400px] absolute z-[999] flex flex-col justify-between"
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
        <Box className="bg-[#FFFFFFAA] p-4 rounded-t-xl">
          <Typography variant="200B">알림</Typography>
        </Box>
        <Stack className="overflow-y-auto h-full">
          {notificationList ? (
            notificationList.map((notification, index) => (
              <NotificationItem key={index} notification={notification} />
            ))
          ) : (
            <Stack className="w-full h-full justify-center items-center">
              <Typography variant="300R">알림이 없습니다.</Typography>
            </Stack>
          )}
        </Stack>
        <Stack direction="row" className="p-4 justify-center">
          <ButtonBase className="text-neutral-600 text-[14px] rounded-full bg-[#FFFFFF80] px-4 py-2 border border-neutral-100">
            전체보기
          </ButtonBase>
        </Stack>
      </Paper>
    </>
  );
}
