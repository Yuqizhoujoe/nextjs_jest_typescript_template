import { GridColDef } from "@mui/x-data-grid";

export interface InputInterface {
  type: string;
  name: string;
  id: string;
  inputClassName?: string;
  labelClassName?: string;
  required: boolean;
  label: string;
  handleChange?: (value: any) => any;
}

export interface ButtonInterface {
  label: string;
  btnClassName?: string;
  btnSpanClassName?: string;
  btnDivClassName?: string;
  type?: "submit" | "reset" | "button";
  handleClick?: () => any;
}

export interface LayoutInterface {
  children: JSX.Element | JSX.Element[];
}

export interface ListItemInterface {
  content: string;
  link: string;
  anchorClassName?: string;
  listItemClassName?: string;
}

export interface ListInterface {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export interface TableItemInterface {
  text: string;
  scope?: string;
  th?: boolean;
}

export interface TableInterface {
  rows: any[];
  cols: GridColDef[];
}
