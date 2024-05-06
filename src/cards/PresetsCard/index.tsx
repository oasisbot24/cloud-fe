import React from "react";
import { CardActions, CardContent, CardHeader, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import useCurrencySelect from "@/hooks/common/useCurrencySelect";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import usePriceStatusSelect from "@/hooks/common/usePriceStatusSelect";
import usePresets from "@/hooks/dashboard/usePresets";
import CardIcon from "../CardIcon";

function PresetsCard() {
  const { columns, rows } = usePresets();
  const { priceStatus, PriceStatusSelect } = usePriceStatusSelect();
  const { currency, CurrencySelect } = useCurrencySelect();
  const { market, MarketSelect } = useMarketSelect();

  return (
    <Card>
      <CardHeader
        avatar={
          <CardIcon src="/icons/dashboard/setting.png" alt="프리셋 세팅" />
        }
        title="실행중인 프리셋 목록"
        subheader="오늘 16:29 기준" // 추후 날짜/시간 라이브러리 사용해 수정할 것
        action={
          <>
            <PriceStatusSelect />
            <CurrencySelect />
            <MarketSelect />
          </>
        }
        titleTypographyProps={{
          fontSize: "16px",
          fontWeight: 700,
        }}
        subheaderTypographyProps={{
          color: "#B0B3B7",
          fontSize: "12px",
        }}
      />
      <CardContent
        sx={{ paddingTop: "0", maxHeight: "290px", overflow: "auto" }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          hideFooter
          sx={{ border: "none" }}
        />
      </CardContent>
      <CardActions className="flex justify-center mt-3">
        <Chip
          label="자세히 보기"
          variant="outlined"
          onClick={() => console.log("clicked")}
        />
      </CardActions>
    </Card>
  );
}

export default PresetsCard;
