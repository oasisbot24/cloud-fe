import React from "react";
import { CardHeaderProps, CardHeader as MuiCardHeader } from "@mui/material";

function CardHeader({ avatar, title, subheader, action }: CardHeaderProps) {
  return (
    <MuiCardHeader
      avatar={avatar}
      title={title}
      subheader={subheader} // 추후 날짜/시간 라이브러리 사용해 수정할 것
      action={action}
      titleTypographyProps={{
        fontSize: "16px",
        fontWeight: 700,
      }}
      subheaderTypographyProps={{
        color: "#B0B3B7",
        fontSize: "12px",
      }}
    />
  );
}

export default CardHeader;
