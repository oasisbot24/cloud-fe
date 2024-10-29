import Image from "next/image";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

type InfoDialogType = {
  title: string;
  description: string[];
  imgSrc?: string;
  handleClose: () => void;
};

function InfoDialog({
  title,
  description,
  imgSrc,
  handleClose,
}: InfoDialogType) {
  return (
    <>
      <Box
        className="fixed w-full h-full bg-[#00000033] top-0 left-0 z-50"
        onClick={handleClose}
      />
      <Paper
        className="w-[410px] h-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-50 rounded-xl"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Stack className="bg-brand rounded-t-xl items-center justify-center">
          <Image
            src={imgSrc ?? "/modal_check.png"}
            width={250}
            height={200}
            alt="lev"
            className="mix-blend-screen"
          />
        </Stack>
        <Stack className="py-6 px-16 gap-4">
          <Typography variant="400B" className="text-center">
            {title}
          </Typography>
          <ul className="list-outside flex flex-col gap-4 m-0 p-0 pl-4">
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
          <Button
            variant="contained"
            className="w-full rounded-full"
            onClick={handleClose}
          >
            확인
          </Button>
        </Stack>
      </Paper>
    </>
  );
}

export default InfoDialog;
