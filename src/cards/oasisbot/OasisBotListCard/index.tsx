import { CardContent, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import useCurrencySelect from "@/hooks/card/useCurrencySelect";
import useMarketSelect from "@/hooks/card/useMarketSelect";
import usePriceStatusSelect from "@/hooks/card/usePriceStatusSelect";
import usePresets from "@/hooks/dashboard/usePresets";

export default function OasisBotListCard() {
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
      <CardFooter>
        <Chip
          label="자세히 보기"
          variant="outlined"
          onClick={() => console.log("clicked")}
        />
      </CardFooter>
    </Card>
  );
}
