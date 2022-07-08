/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import InputError from "./inputError";

const TextInput = forwardRef(
  (
    { type, placeholder, label, defaultValue, value, name, onChange, errors, pattern },
    ref
  ) => (
    <div className="mt-3">
      <label className="text-md font-medium">{label}</label>
      <input
        className={errors && errors[name] &&
          errors[name]?.type !== ''
            ? "p-4 rounded-md border-red border w-full mt-4 focus:outline-none"
            : "p-4 rounded-md border-lightBlue border w-full mt-4 focus:outline-none"
        }
        // className={errors && errors[name] && "p-4 rounded-md border-lightBlue border w-full mt-4 focus:outline-none"}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        ref={ref}
        pattern={pattern}
      />
      {errors && errors[name] && <InputError text={errors[name]?.message} />}
    </div>
  )
);

export default TextInput;
