import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

function TransactionColumnsQuantityCell(
  params: GridRenderCellParams<GridValidRowModel, BotTransactionQuantity>,
) {
  return (
    <div>
      <div className="text-[16px] font-bold leading-[18px]">
        ￦{params.value?.totalPrice.toLocaleString("ko-kr")}
      </div>

      <div className="mt-2 text-[14px] font-bold leading-[16px]">{params.value?.volume}</div>
    </div>
  );
}

export default TransactionColumnsQuantityCell;
