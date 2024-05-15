import { useState } from "react";
import Image from "next/image";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Fade,
  Menu,
  Stack,
  Theme,
  Typography,
  makeStyles,
} from "@mui/material";
import DashboardIcon from "@/components/Icon/DashboardIcon";
import CustomMenu from "./CustomMenu";

export default function Panel() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box width={1}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "#898FC3",
          width: 1 / 2,
          height: "auto",
          padding: 2,
          borderRadius: "16px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ width: 1 }}
        >
          <Stack
            sx={{
              bgcolor: "white",
              borderRadius: "16px",
              borderColor: "#F6F6F6",
            }}
          >
            <DashboardIcon id="bar-graph" />
          </Stack>
          <Stack direction="column" spacing={1}>
            <Typography variant="300B" color={"#FFFFFF"}>
              종합
            </Typography>

            <Typography variant="200R" color={"#FFFFFF"}>
              ALL
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={1}>
            <Stack direction="row" justifyContent="flex-end" sx={{ width: 1 }}>
              <Typography
                variant="200R"
                fontFamily="SF Pro Display"
                fontWeight={600}
                fontSize={18}
                lineHeight="22px"
                color={"#FFFFFF"}
              >
                $230,7777
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" sx={{ width: 1 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  bgcolor: "#D1D6F9",
                  width: "58px",
                  height: "24px",
                  borderRadius: "16px",
                }}
              >
                <Image
                  src="/icons/arrow/profitloss/down-small.png"
                  width={16}
                  height={16}
                  alt="small"
                />
                <Typography
                  fontFamily="SF Pro Display"
                  fontWeight={700}
                  fontSize={14}
                  lineHeight="16px"
                  color={"#223CE9"}
                >
                  23%
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <Image
              src="/icons/arrow/down-circle.png"
              alt="circle"
              width={20}
              height={20}
            />
          </Stack>
        </Stack>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transitionDuration={0}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "transparent",
            boxShadow: "none",
            width: anchorEl && anchorEl.offsetWidth,
          },
        }}
      >
        <CustomMenu />
      </Menu>
    </Box>
  );
}
