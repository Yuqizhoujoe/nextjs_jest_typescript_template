import { InputInterface } from "../../shared/modal/Common/interface";
import { ChangeEvent, Fragment, useState } from "react";
import { handleCss } from "../../shared/helper";
import { inputType } from "../../shared/common/constant";
import _ from "lodash";

const defaultInputCss =
  "block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
const defaultInputLabelCss =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
const defaultInputDivCss = "relative z-0 mb-6 w-full group";
const errorHandlingCss = "border-orange-500";

const Input = (props: InputInterface) => {
  const {
    initialValue,
    type,
    id,
    name,
    inputClassName,
    required,
    label,
    handleChange,
    inputDivClassName,
    money,
    validate,
  } = props;

  const [value, setValue] = useState(initialValue || "");
  const [valid, setIsValid] = useState(true);

  const inputStyleHandler = () => {
    const style = handleCss(defaultInputCss, inputClassName);
    if (!valid) return style.concat(" ", errorHandlingCss);
    return style;
  };

  const checkValue = (value: any) => {
    if (validate && typeof validate === "function") {
      return validate(value);
    }

    return value && !_.isEmpty(value);
  };

  const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.target.value;

    // validation
    const isValid = checkValue(val);
    setIsValid(isValid);

    setValue(val);
    if (handleChange && typeof handleChange === "function") {
      handleChange(val, valid);
    }
  };

  const renderNumberInput = () => {
    return (
      <div className={handleCss(defaultInputDivCss, inputDivClassName)}>
        <label
          htmlFor={id}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {label}
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-4 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
            Wei
          </span>
          <input
            type={type}
            name={name}
            id={id}
            placeholder=" "
            className={inputStyleHandler()}
            value={value}
            onChange={onValueChangeHandler}
            required={required}
          />
        </div>
      </div>
    );
  };

  const renderInput = () => {
    if (type === inputType.NUMBER && money) {
      return renderNumberInput();
    }

    return (
      <div className={handleCss(defaultInputDivCss, inputDivClassName)}>
        <input
          type={type}
          name={name}
          id={id}
          placeholder=" "
          className={inputStyleHandler()}
          value={value}
          onChange={onValueChangeHandler}
          required={required}
        />
        <label htmlFor={id} className={defaultInputLabelCss}>
          {label}
        </label>
      </div>
    );
  };
  return <Fragment>{renderInput()}</Fragment>;
};

export default Input;
