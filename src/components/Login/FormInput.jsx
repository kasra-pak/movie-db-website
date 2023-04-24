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
        className='w-full rounded-sm bg-orange-100 px-4 py-2 text-lg font-semibold tracking-wide text-secondary shadow-sm placeholder:text-secondary placeholder:opacity-50'
      />
      {errorMessage && !disabled && (
        <div className='validation-msg'>{errorMessage[0]}</div>
      )}
    </div>
  );
}

export default FormInput;
