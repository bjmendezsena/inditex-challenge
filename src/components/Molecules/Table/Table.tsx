import { Box } from "@chakra-ui/layout";
import { useMultiStyleConfig as useChakraMultiStyleConfig } from "@chakra-ui/system";
import { type BoxProps as ChakraBoxProps } from "@chakra-ui/layout";
import { createContext } from "@chakra-ui/react-context";
import { Table as ChakraTable, Tbody, Tr, Skeleton } from "@chakra-ui/react";
import type { SystemStyleObject as ChakraSystemStyleObject } from "@chakra-ui/system";
import React, { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  Table as TableT,
  ColumnDef,
  PaginationState,
  OnChangeFn,
  SortingState,
} from "@tanstack/react-table";

import { TableRow } from "./components/TableRow";
import type { BaseMultiStyleConfiguration } from "../../../theme";

export const tablePartsList: Array<
  | "headerContainer"
  | "footerText"
  | "header"
  | "cell"
  | "rowContainer"
  | "container"
  | "tableContainer"
  | "title"
  | "subtext"
  | "sortIcon"
> = [
  "header",
  "headerContainer",
  "cell",
  "rowContainer",
  "container",
  "tableContainer",
  "title",
  "subtext",
  "sortIcon",
];

type Parts = typeof tablePartsList;

export interface TableThemeConfiguration
  extends BaseMultiStyleConfiguration<Parts> {}

export type TableThemeStyle = Record<Parts[number], ChakraSystemStyleObject>;

export interface TableProps<TData> extends ChakraBoxProps {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  showFooter?: boolean;
  name: string;
  onClickRow?: (row: TData) => void;
  onMouseOverRow?: (row: TData) => void;
  onMouseLeaveRow?: (row: TData) => void;
  totalElements?: number;
  pagination?: PaginationState;
  sorting?: SortingState;
  totalPages?: number;
  size?: string;
  variant?: string;
  setPagination?: OnChangeFn<PaginationState>;
  setSorting?: OnChangeFn<SortingState>;
  paginationText?: string;
  totalElementsText?: string;
  defaultColumnSize?: number;
  isLoading?: boolean;
  loadingColumnsCount?: number;
}

export const Table = <D extends object>({
  data,
  columns,
  variant,
  size,
  sorting,
  setSorting,
  setPagination,
  pagination,
  totalPages,
  totalElements,
  onClickRow,
  onMouseOverRow,
  onMouseLeaveRow,
  name,
  showFooter = true,
  defaultColumnSize = 138,
  isLoading,
  loadingColumnsCount = 5,
  ...props
}: TableProps<D>) => {
  const processedColumns = useMemo(
    () =>
      isLoading
        ? columns.map((col) => ({
            ...col,
            cell: () => <Skeleton height={2} w='full' />,
          }))
        : columns,
    [columns, isLoading]
  );
  const processedData = useMemo(
    () => (isLoading ? Array(loadingColumnsCount).fill({}) : data),
    [data, isLoading, loadingColumnsCount]
  );

  const table = useReactTable({
    columns: processedColumns,
    data: processedData,
    defaultColumn: {
      size: defaultColumnSize,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    pageCount: totalPages ?? -1,
    state: {
      sorting,
      pagination,
    },
    manualSorting: true,
    manualPagination: true,
  });

  const styles = useChakraMultiStyleConfig("PodcastTable", {
    variant,
    size,
    isLoading,
  }) as TableThemeStyle;
  const [headerGroup] = table.getHeaderGroups();

  return (
    <TableContextProvider
      value={{
        styles,
        pagination,
        totalPages,
        totalElements,
        // @ts-ignore TODO: context with generic?
        onClickRow,
        // @ts-ignore
        onMouseOverRow,
        // @ts-ignore
        onMouseLeaveRow,
        ...table,
      }}
    >
      <Box {...props}>
        <Box sx={styles.container}>
          <ChakraTable
            variant='striped'
            data-testid={`table-${name}`}
            sx={styles.tableContainer}
          >
            <Tbody>
              <Tr sx={styles.headerContainer}>
                {headerGroup.headers.map((header) => (
                  <Box
                    key={header.id}
                    as='th'
                    width={header.getSize()}
                    minW={header.getSize()}
                    sx={styles.header}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Box>
                ))}
              </Tr>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} row={row} />
              ))}
            </Tbody>
          </ChakraTable>
        </Box>
      </Box>
    </TableContextProvider>
  );
};

export interface TableContext<D extends object = {}>
  extends TableT<D>,
    Pick<
      TableProps<D>,
      | "pagination"
      | "totalElements"
      | "totalPages"
      | "onClickRow"
      | "onMouseOverRow"
      | "onMouseLeaveRow"
      | "paginationText"
      | "totalElementsText"
    > {
  styles: TableThemeStyle;
}

export const [TableContextProvider, useTableContext] =
  createContext<TableContext>({ name: "TableContext" });
