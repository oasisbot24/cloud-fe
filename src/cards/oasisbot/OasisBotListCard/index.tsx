import { CardContent, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import OasisBotListColumns from "@/components/table/OasisBotListColumns";
import { useBotQuery } from "@/hooks/query/useOasisBot";

export default function OasisBotListCard() {
  const columns = OasisBotListColumns;
  const {
    botQuery: { data, isLoading },
  } = useBotQuery();

  return (
    <Card>
      <CardHeader id="setting" title="실행중인 Bot 목록" />
      <CardContent
        sx={{ paddingTop: "0", maxHeight: "290px", overflow: "auto" }}
      >
        <DataGrid
          columns={columns}
          rows={data ?? []}
          loading={isLoading}
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
          className="my-2"
          onClick={() => console.log("clicked")}
        />
      </CardFooter>
    </Card>
  );
}
