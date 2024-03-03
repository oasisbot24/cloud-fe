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
  paddingLeft: "15px",
}));

interface PaperData {
  data: string;
}

export default function CustomPaper({ data }: PaperData) {
  return <BasicPaper>{data}</BasicPaper>;
}
