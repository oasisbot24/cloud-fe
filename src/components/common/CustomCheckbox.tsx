import { Checkbox, CheckboxProps, styled } from "@mui/material";

import checkwhite from "@/../public/checkbox/check-white.png";

const CustomIcon = styled("span")(() => ({
  borderRadius: 100,
  width: 26,
  height: 26,
  boxShadow: "none",
  backgroundColor: "#E1E6EA",
  "&::before": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "block",
    width: 12.5,
    height: 9.8,
    backgroundImage: `url(${checkwhite.src})`,
    backgroundSize: "cover",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#B0B3B7",
  },
  "input:disabled ~ &": {
    background: "#909498",
  },
}));

const CustomCheckedIcon = styled(CustomIcon)({
  backgroundColor: "#223CE9",
  "input:hover ~ &": {
    backgroundColor: "#223CE9",
  },
});

export default function CustomCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      icon={<CustomIcon />}
      checkedIcon={<CustomCheckedIcon />}
      {...props}
    />
  );
}
