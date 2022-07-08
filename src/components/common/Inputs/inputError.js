import React from "react";
import { CapitalizeFirstLetter } from "../../../utils/helpers/helper";

const InputError = ({ text }) => {
  return (
    <p className="text-red text-sm text-right mt-2">
      {CapitalizeFirstLetter(text)}
    </p>
  );
};

export default InputError;
