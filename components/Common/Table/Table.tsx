import TableItem from "@/components/Common/Table/TableItem";

const Table = () => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <TableItem scope="col" th text=" " />
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50">
            <TableItem text="Manager" scope="row" th />
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <TableItem text="Minimum Contribution" scope="row" th />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
