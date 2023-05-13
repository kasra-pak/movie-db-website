import { useState, useEffect } from "react";

function useControlledInput(initialVal, validate = () => null) {
  const [value, setValue] = useState(initialVal);
  const [validationErrors, setValidationErrors] = useState(null);

  useEffect(() => {
    if (value === null) return;
    setValidationErrors(validate(value));
  }, [validate, value]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return [value, validationErrors, handleChange];
}

export default useControlledInput;
