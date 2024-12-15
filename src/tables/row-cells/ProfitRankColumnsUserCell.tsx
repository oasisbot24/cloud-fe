import Image from "next/image";

import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

function ProfitRankColumnsUserCell(
  params: GridRenderCellParams<GridValidRowModel, ProfitRank["user"]>,
) {
  const { value } = params;

  return (
    <div className="flex items-center justify-center whitespace-normal">
      <div className="mr-1 flex size-5 items-center justify-center rounded-full bg-neutral-300">
        <Image
          src={value?.icon || "/user.png"}
          alt={value?.nickname ?? ""}
          width={20}
          height={20}
        />
      </div>
      {value?.nickname}
    </div>
  );
}

export default ProfitRankColumnsUserCell;
