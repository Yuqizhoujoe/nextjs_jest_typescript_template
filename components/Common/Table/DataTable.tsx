import { DataGrid } from "@mui/x-data-grid";
import { TableInterface } from "../../../modal/Common/interface";

const rowsPerPage = 5;

const DataTable = (props: TableInterface) => {
  const { cols, rows } = props;

  console.log(rows);

  return (
    <div className="h-96 w-full text-center">
      <DataGrid
        columns={cols}
        rows={rows}
        pageSize={Math.ceil(rows.length / rowsPerPage)}
        rowsPerPageOptions={[rowsPerPage]}
        autoHeight
      />
    </div>
  );
};

export default DataTable;
