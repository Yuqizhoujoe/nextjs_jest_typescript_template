import { TableItemInterface } from "../../../modal/Common/interface";

const TableItem = (props: TableItemInterface) => {
  const { text, scope, th } = props;

  // td
  if (!th) {
    return <td className="py-4 px-6">{text}</td>;
  }

  // th scope row
  if (scope === "row") {
    return (
      <th
        scope={scope}
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {text}
      </th>
    );
  }

  // th scope col
  return (
    <th scope={scope} className="py-3 px-6">
      {text}
    </th>
  );
};

export default TableItem;
