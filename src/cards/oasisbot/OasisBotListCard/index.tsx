import { useRouter } from "next/router";
import { CardContent, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import OasisBotListColumns from "@/components/table/OasisBotListColumns";
import { useBotQuery } from "@/hooks/query/useOasisBot";

interface Props {
  nav: string;
}
export default function OasisBotListCard({ nav }: Props) {
  const columns = OasisBotListColumns;
  const {
    botQuery: { data, isLoading },
  } = useBotQuery();

  const router = useRouter();
  return (
    <Card>
      <CardHeader id="setting" title="실행중인 Bot 목록" />
      <CardContent
        sx={{ paddingTop: "0", maxHeight: "400px", overflow: "auto" }}
      >
        <DataGrid
          columns={columns}
          rows={data ?? []}
          loading={isLoading}
          hideFooter
          sx={{
            ".MuiDataGrid-overlayWrapper": { height: "215px" },
            border: "none",
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          }}
        />
      </CardContent>
      <CardFooter>
        {nav === "dashboard" ? (
          <Chip
            label="자세히 보기"
            variant="outlined"
            className="my-2"
            onClick={() => router.push("/oasisbot")}
          />
        ) : (
          ""
        )}
      </CardFooter>
    </Card>
  );
}
