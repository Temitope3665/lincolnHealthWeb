import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AppointmentSchema } from "../../utils/validationSchema/validationSchema";
import TextInput from "../common/Inputs/TextInput";

const BookAppoitmentForm = () => {
  const [location, setLocation] = useState('');
  const [accept, setAccept] = useState(false);
  console.log(accept)
  console.log(location);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({
    delayError: 2000,
    mode: "onChange",
    resolver: yupResolver(AppointmentSchema),
  });
  const onSubmit = (data) => {
    const upload = {...data, accept, location}
    console.log(upload);
    reset();
  };
  return (
    <form className="w-full md:w-4/5" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder="Your Name"
        type="text"
        name="name"
        required
        {...register("name", { required: true })}
        errors={errors}
      />
      <TextInput
        placeholder="Mobile Number"
        type="tel"
        name="tel"
        required
        {...register("tel", { required: true })}
        errors={errors}
      />
      <div className="p-4 rounded-md border-lightBlue border w-full mt-5">
        <select className="text-dark w-full outline-none" onChange={(e) => setLocation(e.target.value)}>
          <option>Select your state</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Oyo">Oyo</option>
        </select>
      </div>
      <div className="mt-4 flex items-center cursor-pointer">
        <input id="form-check" className="mr-2" type="checkbox" onChange={(e) => setAccept(e.target.checked)} />
        <label
          htmlFor="form-check"
          className="text-dark text-sm font-medium cursor-pointer"
        >
          I have read and accept the{" "}
          <span className="text-blue">Privacy Policy</span>
        </label>
      </div>
      <div>
        <button
          className="bg-blue text-white disabled:opacity-30 disabled:cursor-not-allowed font-medium w-full mt-10 p-4 rounded-2xl hover:text-white button-blue border-blue border-2"
          disabled={!isValid || !isDirty || isSubmitting || location === '' || !accept || !errors }
          type="submit"
        >
          Request Now
        </button>
        {console.log(errors)}
      </div>
    </form>
  );
};

export default BookAppoitmentForm;
