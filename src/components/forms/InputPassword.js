import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logo } from "../../assets/svg";
import { ResetPasswordSchema } from "../../utils/validationSchema/validationSchema";
import PasswordInput from "../common/Inputs/PasswordInput";

const InputPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({
    delayError: 2000,
    mode: "onChange",
    resolver: yupResolver(ResetPasswordSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col place-content-center bg-white drop-shadow-md rounded-lg w-2/5 p-8">
        <div className="cursor-pointer mx-auto">
          <Link to="/">{logo}</Link>
        </div>
        <div className="mt-8">
          <p className="text-dark font-medium text-xl">Update Password!</p>
          <p className="text-dark text-md mt-4">
            Please input your new password to your account.
          </p>
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput
              label="New Password"
              id="new-pwd"
              placeholder="Enter your new password"
              type="password"
              name="newPassword"
              required
              {...register("newPassword", { required: true })}
              errors={errors}
            />
            <PasswordInput
              label="Confirm New Password"
              id="confirm-new-pwd"
              placeholder="Enter your new password"
              type="password"
              name="confirmPassword"
              required
              {...register("confirmPassword", { required: true })}
              confirmPasswordErrors={errors}
            />
            <button
              className="bg-blue text-white px-14 disabled:opacity-30 disabled:cursor-not-allowed border text-sm md:text-md mt-8 py-4 w-full rounded-lg hover:text-blue button-blue border-blue"
              disabled={!isValid || !isDirty || isSubmitting}
              type="submit"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
