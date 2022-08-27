import { checkFunctionType, handleCss } from "../../shared/helper";
import { ButtonInterface } from "../../modal/Common/interface";

const defaultButtonCss =
  "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100";
const defaultButtonSpanCss =
  "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";

const Button = (props: ButtonInterface) => {
  const { type, label, btnClassName, btnSpanClassName, handleClick } = props;

  const handleClickEvent = (e: any) => {
    e.preventDefault();
    if (handleClick && typeof handleClick === "function") {
      handleClick();
    }
  };

  return (
    <button
      className={handleCss(defaultButtonCss, btnClassName)}
      type={type}
      onClick={handleClickEvent}
    >
      <span className={handleCss(defaultButtonSpanCss, btnSpanClassName)}>
        {label}
      </span>
    </button>
  );
};

export default Button;
