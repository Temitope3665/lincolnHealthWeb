import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/svg";
import { yupResolver } from "@hookform/resolvers/yup";
import PasswordInput from "../common/Inputs/PasswordInput";
import TextInput from "../common/Inputs/TextInput";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../utils/validationSchema/validationSchema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({ delayError: 2000, mode: "onChange", resolver: yupResolver(LoginSchema) });
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
        <div className="mt-4 md:mt-8 text-sm md:text-md">
          <p className="text-dark font-medium text-xl">Welcome Back!</p>
          <p className="text-dark text-md mt-4">
            Please Log in to your account.
          </p>
        </div>
        <div className="mt-4 md:mt-8 text-sm md:text-md">
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
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              name="password"
              required
              {...register("password", { required: true })}
              errors={errors}
            />
            <Link to="/forgot-password">
              <p className="mt-4 text-right text-sm md:text-md text-dark hover:text-blue cursor-pointer duration-1000 ease-in-out nav-anime">
                Forgot Password ?
              </p>
            </Link>
            <button
              disabled={!isValid || !isDirty || isSubmitting}
              type="submit"
              className="bg-blue disabled:opacity-30 disabled:cursor-not-allowed text-sm md:text-md text-white px-14 border mt-8 cursor-pointer py-4 w-full rounded-lg hover:text-blue button-blue border-blue"
            >
              Log In
            </button>
          </form>
          <Link to="/signup">
            <p className="text-center text-sm md:text-md mt-4 px-6 text-dark hover:text-blue cursor-pointer duration-1000 ease-in-out nav-anime">
              Don&apos;t have an account ? <span>Sign up here</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
