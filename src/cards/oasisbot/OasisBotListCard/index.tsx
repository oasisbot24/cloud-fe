import { useEffect } from "react";

import { useRouter } from "next/router";

import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import DetailChip from "@/components/chip/DetailChip";
import OasisBotListColumns from "@/components/table/OasisBotListColumns";
import { selectedBotRowAtom } from "@/datas/oasisbotTransaction";
import { useBotDetailQuery, useBotQuery } from "@/hooks/query/useOasisBot";

interface Props {
  nav: string;
}
export default function OasisBotListCard({ nav }: Props) {
  const [selectedRow, setSelectedRow] = useAtom(selectedBotRowAtom);

  const columns = OasisBotListColumns;
  const {
    botListQuery: { data, isLoading },
  } = useBotQuery();
  const { botDetailQuery } = useBotDetailQuery(selectedRow[0]);

  useEffect(() => {
    botDetailQuery.refetch();
    console.log(botDetailQuery.data);
  }, [selectedRow]);

  const router = useRouter();
  return (
    <Card>
      <CardHeader id="setting" title="실행중인 Bot 목록" />
      <CardContent sx={{ paddingTop: "0", maxHeight: "400px", overflow: "auto" }}>
        <DataGrid
          columns={columns}
          rows={data ?? []}
          loading={isLoading}
          onRowSelectionModelChange={newRow => setSelectedRow(newRow)}
          rowSelectionModel={selectedRow}
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
        {nav === "dashboard" ? <DetailChip onClick={() => router.push("/oasisbot")} /> : ""}
      </CardFooter>
    </Card>
  );
}
