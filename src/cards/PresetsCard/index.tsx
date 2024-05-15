import { CardActions, CardContent, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import useCurrencySelect from "@/hooks/common/useCurrencySelect";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import usePriceStatusSelect from "@/hooks/common/usePriceStatusSelect";
import usePresets from "@/hooks/dashboard/usePresets";

function PresetsCard() {
  const { columns, presetRows, isPresetsLoading } = usePresets();
  const { PriceStatusSelect } = usePriceStatusSelect();
  const { CurrencySelect } = useCurrencySelect();
  const { MarketSelect } = useMarketSelect();

  return (
    <Card>
      <CardHeader
        id="setting"
        title="실행중인 Bot 목록"
        action={
          <>
            <PriceStatusSelect />
            <CurrencySelect />
            <MarketSelect />
          </>
        }
      />
      <CardContent
        sx={{ paddingTop: "0", maxHeight: "290px", overflow: "auto" }}
      >
        <DataGrid
          columns={columns}
          rows={presetRows ?? []}
          loading={isPresetsLoading}
          hideFooter
          sx={{
            ".MuiDataGrid-overlayWrapper": { height: "215px" },
            border: "none",
          }}
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
