import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { CardContent } from "@mui/material";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { useSetAtom } from "jotai";

import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import DetailChip from "@/components/chip/DetailChip";
import OasisBotListColumns from "@/components/table/OasisBotListColumns";
import { botAtom } from "@/datas/oasisbotTransaction";
import { useBotQuery } from "@/hooks/query/useOasisBot";

interface Props {
  nav: string;
}
export default function OasisBotListCard({ nav }: Props) {
  const columns = OasisBotListColumns;
  const {
    botQuery: { data, isLoading },
  } = useBotQuery();
  const [selectedRow, setSelectedRow] = useState<GridRowSelectionModel>([]);
  const setSelectedBot = useSetAtom(botAtom);

  useEffect(() => {
    if (selectedRow.length > 0) {
      setSelectedBot(
        data?.find(value => value.id === selectedRow[0]) || {
          id: -1,
          isRunning: false,
          presetName: "",
          startBalance: 0,
          runningTime: 0,
          coinType: "",
        },
      );
    } else {
      setSelectedBot({
        id: -1,
        isRunning: false,
        presetName: "",
        startBalance: 0,
        runningTime: 0,
        coinType: "",
      });
    }
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
          onRowSelectionModelChange={newRow => {
            setSelectedRow(selectedRow[0] === newRow[0] ? [] : newRow);
          }}
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
