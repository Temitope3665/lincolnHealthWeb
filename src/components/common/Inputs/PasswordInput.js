/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";
import { eyeLock, eyeOpen } from "../../../assets/svg";
import InputError from "./inputError";

const PasswordInput = forwardRef(
  (
    {
      placeholder,
      label,
      defaultValue,
      value,
      onChange,
      errors,
      id,
      name,
      confirmPasswordErrors,
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    console.log(confirmPasswordErrors);

    return (
      <div className="mt-4 flex flex-col text-dark">
        <label className="text-md font-medium" htmlFor={id}>
          {label}
        </label>
        <input
          className={
            errors[name]?.message === undefined
              ? "p-4 rounded-md border-lightBlue focus:outline-none border w-full mt-4 outline-none block relative"
              : "p-4 rounded-md border-red border w-full mt-4 outline-none block relative"
          }
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          id={id}
          name={name}
          onChange={onChange}
          ref={ref}
        />
        {/* <p className="text-red text-sm text-right mt-2">
          {errors[name]?.message === undefined
            ? ""
            : "Password must contain at least 6 letters, 1 special character , 1 capital letter, 1 small letter and 1 number"}
        </p> */}
        {errors && errors[name] && <InputError text= {errors[name]?.message === undefined
            ? ""
            : "Password must contain at least 6 letters, 1 special char, and 1 number"} />}

        <div style={{ maxWidth: "388px" }}>
          {/* {confirmPasswordErrors && confirmPasswordErrors[name]
            && ( */}
      
      {confirmPasswordErrors && confirmPasswordErrors[name] && <InputError text={confirmPasswordErrors[name]?.type === 'required' ? confirmPasswordErrors[name]?.message : 'Password do not match'} />}
            
          {/* <p className="text-red text-sm text-right mt-2">
            {confirmPasswordErrors[name]?.message === undefined
              ? ""
              : "Password do not match"}
          </p> */}
          {/* ) } */}
        </div>
        <div
          className="h-4 w-4 absolute mt-14 right-0 mr-14 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? eyeOpen : eyeLock}
        </div>
      </div>
    );
  }
);

export default PasswordInput;
