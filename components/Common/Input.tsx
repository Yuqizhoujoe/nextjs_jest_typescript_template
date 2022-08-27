import { InputInterface } from "../../modal/Common/interface";
import { ChangeEvent, Fragment, useState } from "react";
import { handleCss } from "../../shared/helper";

const defaultInputCss =
  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
const defaultInputLabelCss =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

const Input = (props: InputInterface) => {
  const {
    type,
    id,
    name,
    inputClassName,
    required,
    labelClassName,
    label,
    handleChange,
  } = props;

  const [value, setValue] = useState("");

  const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    if (handleChange && typeof handleChange === "function") {
      handleChange(e.target.value);
    }
  };

  const renderInput = () => {
    return (
      <>
        <input
          type={type}
          name={name}
          id={id}
          placeholder=" "
          className={handleCss(defaultInputCss, inputClassName)}
          value={value}
          onChange={onValueChangeHandler}
          required={required}
        />
        <label
          htmlFor={id}
          className={handleCss(defaultInputLabelCss, labelClassName)}
        >
          {label}
        </label>
      </>
    );
  };
  return <Fragment>{renderInput()}</Fragment>;
};

export default Input;
