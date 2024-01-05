export interface IRowData {
  id: string;
  [key: string]: string | number | any;
}

export interface IColumn {
  id: number;
  header: string;
  accessor: string | number | keyof IRowData;
  cell?: (id: any) => JSX.Element;
}
