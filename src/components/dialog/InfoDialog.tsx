import Image from "next/image";

import { Box, Button, Paper, Stack, Typography } from "@mui/material";

type InfoDialogType = {
  title: string;
  description: string[];
  imgSrc?: string;
  confirmFunc: () => void;
  confirmBtnText?: string;
  cancellable?: boolean;
  cancelFunc?: () => void;
  handleClose?: () => void;
};

function InfoDialog({
  title,
  description,
  imgSrc,
  confirmFunc,
  confirmBtnText,
  cancellable,
  cancelFunc,
  handleClose,
}: InfoDialogType) {
  return (
    <>
      <Box
        className="fixed left-0 top-0 z-50 h-full w-full bg-[#00000033]"
        onClick={cancelFunc ?? handleClose}
      />
      <Paper
        className="fixed left-1/2 top-1/2 z-50 h-fit w-[410px] -translate-x-1/2 -translate-y-1/2 transform rounded-xl"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Stack className="items-center justify-center rounded-t-xl bg-brand">
          <Image
            src={imgSrc ?? "/dialog/dialog_check.png"}
            width={250}
            height={200}
            alt="lev"
            className="mix-blend-screen"
          />
        </Stack>
        <Stack className="gap-4 px-16 py-6">
          <Typography variant="400B" className="text-center">
            {title}
          </Typography>
          <ul className="m-0 flex list-outside flex-col gap-4 p-0 pl-4">
            {description.length === 1 ? (
              <Typography variant="300R" className="text-font-3">
                {description[0]}
              </Typography>
            ) : (
              description.map((desc, index) => (
                <li key={index}>
                  <Typography variant="300R" className="text-font-3">
                    {desc}
                  </Typography>
                </li>
              ))
            )}
          </ul>
          <Stack direction="row" spacing={2}>
            {cancellable && (
              <Button
                variant="outlined"
                className="w-full rounded-full"
                onClick={cancelFunc ?? handleClose}
              >
                취소
              </Button>
            )}
            <Button
              variant="contained"
              className="w-full rounded-full"
              onClick={confirmFunc ?? handleClose}
            >
              {confirmBtnText ?? "확인"}
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default InfoDialog;
