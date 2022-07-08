import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logo } from "../../assets/svg";
import { EmailSchema } from "../../utils/validationSchema/validationSchema";
import TextInput from "../common/Inputs/TextInput";

const InputEmailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({
    delayError: 2000,
    mode: "onChange",
    resolver: yupResolver(EmailSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="grid md:place-items-center h-screen">
      <div className="flex flex-col place-content-center bg-white drop-shadow-md rounded-lg w-full md:w-2/4 p-8">
        <div className="cursor-pointer mx-auto">
          <Link to="/">{logo}</Link>
        </div>
        <div className="mt-8 text-sm md:text-md">
          <p className="text-dark font-medium text-xl">Forgot Password</p>
          <p className="text-dark text-md mt-2">
            Enter your registered email address below.
          </p>
        </div>
        <div className="mt-4 text-sm md:text-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              name="email"
              required
              {...register("email", { required: true })}
              errors={errors}
            />
            <button
              className="bg-blue text-white px-14 disabled:opacity-30 disabled:cursor-not-allowed border text-sm md:text-md mt-8 py-4 w-full rounded-lg hover:text-blue button-blue border-blue"
              disabled={!isValid || !isDirty || isSubmitting}
              type="submit"
            >
              Recover Password
            </button>
          </form>
          <Link to="/login">
            <p className="text-center text-md mt-4 px-6 text-dark hover:text-blue cursor-pointer duration-1000 ease-in-out nav-anime">
              Take me back to <span className="text-blue">Login</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InputEmailForm;
