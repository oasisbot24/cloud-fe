import Image from "next/image";

import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

function ProfitRankColumnsUserCell(
  params: GridRenderCellParams<GridValidRowModel, ProfitRank["user"]>,
) {
  return (
    <div className="flex items-center justify-center whitespace-normal">
      <div className="mr-1 flex size-5 items-center justify-center rounded-full bg-neutral-300">
        <Image
          src={params.value?.icon || "/user.png"}
          alt={params.value?.nickname ?? ""}
          width={20}
          height={20}
        />
      </div>
      {params.value?.nickname}
    </div>
  );
}

export default ProfitRankColumnsUserCell;
