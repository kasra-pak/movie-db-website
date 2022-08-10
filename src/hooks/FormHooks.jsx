import { useState, useEffect } from "react";

function useControledInput(initialVal, validate = () => null) {
  const [value, setValue] = useState(initialVal);
  const [validationErrors, setValidationErrors] = useState(null);

  useEffect(() => {
    if (value === null) return;
    setValidationErrors(validate(value));
  }, [value]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return [value, validationErrors, handleChange];
}

export default useControledInput;
