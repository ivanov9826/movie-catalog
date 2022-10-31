import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputValue);
  const hasError = !valueIsValid && isTouched;

  const setInputValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setInputValue("");
  };

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError,
    setInputValueHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
