import TableItem from "@/components/Common/Table/TableItem";
import TableRow from "@/components/Common/Table/TableRow";

const defaultTableRowCss =
  "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600";

const Table = (props: any) => {
  const { managerAddress, contribution, balance, name, requestsCount } = props;

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <TableRow>
            <TableItem scope="col" th text=" " />
            <TableItem scope="col" th text="Value" />
          </TableRow>
        </thead>
        <tbody>
          <TableRow className={defaultTableRowCss}>
            <TableItem text="Campaign Name" scope="row" th />
            <TableItem text={name} />
          </TableRow>
          <TableRow className={defaultTableRowCss}>
            <TableItem text="Manager" scope="row" th />
            <TableItem text={managerAddress} />
          </TableRow>
          <TableRow className={defaultTableRowCss}>
            <TableItem text="Minimum Contribution" scope="row" th />
            <TableItem text={contribution} />
          </TableRow>
          <TableRow className={defaultTableRowCss}>
            <TableItem text="Campaign Balance" scope="row" th />
            <TableItem text={balance} />
          </TableRow>
          <TableRow className={defaultTableRowCss}>
            <TableItem text="No. Requests" scope="row" th />
            <TableItem text={requestsCount} />
          </TableRow>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
