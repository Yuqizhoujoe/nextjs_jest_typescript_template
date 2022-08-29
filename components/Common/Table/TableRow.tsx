import { TableRowInterface } from "../../../shared/modal/Common/interface";

const TableRow = (props: TableRowInterface) => {
  const { children, className } = props;
  return <tr className={className}>{children}</tr>;
};

export default TableRow;
