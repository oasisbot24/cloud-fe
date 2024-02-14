import { Box, Paper, Stack, styled } from "@mui/material";

const BasicPaper = styled(Paper)(({ theme }) => ({
  // width: '98%',
  height: 40,
  textAlign: "left",
  borderRadius: "10px",
  backgroundColor: "#373B5C",
  color: "white",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  verticalAlign: "middle",
  paddingLeft: "30px",
}));

interface PaperData {
  data: string;
  widthSize: string;
}

export default function CustomPaper({ data, widthSize }: PaperData) {
  return <BasicPaper style={{ width: widthSize }}>{data}</BasicPaper>;
}
