import { useState } from "react";
const useInput = (validateValue, errorMsg) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  let message = hasError ? errorMsg : "";

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isTouched,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    message,
  };
};

export default useInput;
