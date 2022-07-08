import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logo } from "../../assets/svg";
import { SignUpSchema } from "../../utils/validationSchema/validationSchema";
import PasswordInput from "../common/Inputs/PasswordInput";
import TextInput from "../common/Inputs/TextInput";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({
    delayError: 2000,
    mode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="grid place-items-center h-fit md:h-screen">
      <div className="flex flex-col place-content-center bg-white drop-shadow-md rounded-lg w-full md:w-2/4 p-8">
        <div className="cursor-pointer mx-auto">
          <Link to="/">{logo}</Link>
        </div>
        <div className="mt-2 md:mt-8 text-sm md:text-md">
          <p className="text-dark font-medium text-xl">Sign Up</p>
          <p className="text-dark text-md mt-2">
            Please sign up a new account.
          </p>
        </div>
        <div className="mt-2 md:mt-4 text-sm md:text-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="block md:flex md:justify-between">
              <div className="w-full md:w-1/2">
                <TextInput
                  label="First Name"
                  placeholder="Enter your first name"
                  type="text"
                  name="first_name"
                  required
                  {...register("first_name", { required: true })}
                  errors={errors}
                />
              </div>
              <div className="w-full ml-0 md:w-1/2 md:ml-4">
                <TextInput
                  label="Last Name"
                  placeholder="Enter your last name"
                  type="text"
                  name="last_name"
                  required
                  {...register("last_name", { required: true })}
                  errors={errors}
                />
              </div>
            </div>
            <TextInput
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              name="email"
              required
              {...register("email", { required: true })}
              errors={errors}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              name="password"
              required
              {...register("password", { required: true })}
              errors={errors}
            />
            <Link to="/pin-code">
              <button
                className="bg-blue text-white px-14 disabled:opacity-30 disabled:cursor-not-allowed border text-sm md:text-md mt-8 py-4 w-full rounded-lg hover:text-blue button-blue border-blue"
                disabled={!isValid || !isDirty || isSubmitting}
                type="submit"
              >
                Create Account
              </button>
            </Link>
          </form>
          <Link to="/login">
            <p className="text-center text-sm mt-4 text-dark md:text-md hover:text-blue cursor-pointer duration-1000 ease-in-out nav-anime">
              Already have an account ? <span>Log in here</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
