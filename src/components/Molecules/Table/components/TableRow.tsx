import { type Row, flexRender } from "@tanstack/react-table";
import { Td, Tr } from "@chakra-ui/react";
import { useTableContext } from "../Table";

export interface TableRowProps<T extends Object> {
  row: Row<T>;
}

export const TableRow = <T extends Object>({ row }: TableRowProps<T>) => {
  const { styles, onClickRow, onMouseOverRow, onMouseLeaveRow } =
    useTableContext();

  return (
    <Tr
      data-testid={`row-${row?.index}`}
      key={row.id}
      w="full"
      onClick={() => onClickRow?.(row.original)}
      onMouseOver={() => onMouseOverRow?.(row.original)}
      onMouseLeave={() => onMouseLeaveRow?.(row.original)}
      cursor={onClickRow ? "pointer" : "default"}
      sx={styles.rowContainer}
    >
      {row.getVisibleCells().map((cell) => (
        <Td
          key={cell.id}
          minW={cell.column.getSize()}
          sx={styles.cell}
          tabIndex={0}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </Td>
      ))}
    </Tr>
  );
};
