import { Checkbox, styled } from "@mui/material";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  borderRadius: 100,
  width: 30,
  height: 30,
  padding: 2,
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
  "& .MuiSvgIcon-root": {
    color: "#000",
  },
}));

export default CustomCheckbox;
