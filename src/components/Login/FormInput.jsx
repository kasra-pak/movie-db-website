import React from "react";

function FormInput({
  id,
  placeholder,
  type,
  value,
  handleChange,
  errorMessage,
  disabled = false,
}) {
  return (
    <div
      className={
        errorMessage && !disabled ? "input-group error" : "input-group"
      }
    >
      <label htmlFor={id} className='sr-only'>
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        value={value || ""}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete='off'
        disabled={disabled}
        className='w-full bg-orange-100 text-lg rounded-sm px-4 py-2 shadow-sm'
      />
      {errorMessage && !disabled && (
        <div className='validation-msg'>{errorMessage[0]}</div>
      )}
    </div>
  );
}

export default FormInput;
